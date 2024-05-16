import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import MainLogo from 'components/UI/Logo/MainLogo'
import InputBox from 'components/UI/input/InputBox'
import Checkbox from 'components/UI/CheckBox/Chechbox'
import ButtonRefNext from 'components/UI/button/Onboarding/ButtonRefNext'
import SocialButton from 'components/UI/button/SocialButton'
import Layout from 'layouts/body/Layout'
// import { useAppNavigation, useAuthNavigation } from 'navigation/useAppNavigation'
import TextButton from 'components/UI/button/TextButton'
import { StackActions } from '@react-navigation/native'
import { login } from 'services/api/Auth/LoginAxios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loading from 'pages/LoadingPage/LoadingScreen'
import { useAppNavigator } from 'hook/navigate/useAppNavigator'
import { useAuthNavigator } from 'hook/navigate/useAuthNavigator'

const LoginScreen = () => {
  // const naviauth = useAuthNavigation();
  // const naviroot = useAppNavigation();
  const navi = useAppNavigator();
  const naviauth = useAuthNavigator();
  const [loading, setLoading] = React.useState<boolean>(false)
  const [username, setUsername] = React.useState<string>("")
  const [password, setPassword] = React.useState<string>("")
  const [showPassword, setShowPassword] = React.useState<boolean>(false)
  const [rememberMe, setRememberMe] = React.useState<boolean>(false)
  useEffect(() => {
    const getData = async () => {
      const username = await AsyncStorage.getItem("username");
      const password = await AsyncStorage.getItem("password");
      if (username && password) {
        setUsername(username);
        setPassword(password);
        setRememberMe(true);
      }
    }
    getData();
  },[])
  const registerHandler = () => {
    // naviauth.navigate('RegisterScreen')
    naviauth.goToScreen("RegisterScreen");
  }
  const rememberHander = () => {
    console.log("Remember Me");
    setRememberMe(!rememberMe);
  }
  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  }
  const loginHandler =async ()  => {
    setLoading(true);
    const check = await login(username, password);
    if (check) {
      console.log("Login Success");
      if (rememberMe) {
        await AsyncStorage.setItem("username", username);
        await AsyncStorage.setItem("password", password);
      } else {
        await AsyncStorage.removeItem("username");
        await AsyncStorage.removeItem("password");
      }
      // naviroot.dispatch(StackActions.replace("MainObjectScreen"));
      navi.replaceScreen("BottomTabObjectScreen")
    } else {
      console.log("Login Failed");
    }
    setLoading(false);
    // navi.replaceScreen("BottomTabObjectScreen")
  }
  const forgetHandler = () => {
    console.log("Forget Password");
    // naviauth.navigate('ForgetPasswordScreen')
    naviauth.goToScreen("ForgetPasswordScreen");
  }
  return (
    <Layout>
      {loading && <Loading/>}
      <View style={styles.container}>
        <View style={styles.mb30}>
          <MainLogo size={150}/>
        </View>
        <View>
          <View style={styles.inputContainer}>
            <View style={styles.mx10}>
              <Text style={styles.txt}>Login to Your Account</Text>
            </View>
            <InputBox  keyboardType="email-address" placeholder="User name" value={username} setValue={setUsername}/>
            <InputBox  keyboardType="default" placeholder="Password" value={password} setValue={setPassword}/>
            <View style={[styles.mx10, styles.checkContainer]}>
              <Checkbox isChecked={rememberMe} action={rememberHander}  />
              <Text style={styles.rememberTxt}>Remember me</Text>
            </View>
            <View style={styles.btnContainer}>
              <ButtonRefNext data={{text:"Login", action:loginHandler, width:"auto"}} />
            </View>
            <View style={styles.alignRight}>
              <TextButton text='Forget Password ?' action={forgetHandler}/>
            </View>
          </View>
        </View>
        <View>
          <View>
            <Text style={[styles.rememberTxt, styles.txtCenter]}>Or login with</Text>
          </View>
          <View style={styles.socialContainer}>
              <SocialButton imageUrl={require("assets/Logo/logos_google.png")} size={30} />
              <SocialButton imageUrl={require("assets/Logo/logos_facebook.png")} size={30}/>
              <SocialButton imageUrl={require("assets/Logo/logos_twitter.png")} size={30}/>
          </View>
          <View style={styles.registerContainer}>
            <Text style={[styles.rememberTxt, styles.txtCenter]}>Don't have an account? </Text>
            <TextButton text='Register' action={registerHandler}/>
          </View>
        </View>
    </View>
    </Layout>

  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 30,
    display: "flex",
    paddingTop: 40,
  },
  txt:{
    fontSize: 16,
    fontWeight: "500",  
    color:"#2E2E5D"
  },
  inputContainer:{
    display: 'flex',
    flexDirection: 'column',
    rowGap: 16,
    marginBottom: 30,
  },
  mt10:{
    marginStart: 10,
  },
  mx10:{
    marginHorizontal: 10,
  },
  mb30:{
    marginBottom: 30,
  },
  checkContainer:{
    display:"flex",
    flexDirection: "row",
  },
  rememberTxt:{
    color: "#2E2E5D",
    fontSize: 14,
    lineHeight: 20,
  },
  txtCenter:{
    textAlign:"center"
  },
  txtRight:{
    textAlign:"right"
  },
  alignRight:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-end",
  },
  btnContainer:{
    display:"flex",
    flexDirection:"row",
  },
  forgetTxt: {
    color: "#F77A55",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
  },
  socialContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginVertical: 20,
  },
  registerContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  }
})