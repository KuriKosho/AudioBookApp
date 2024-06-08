import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackActions, useRoute } from '@react-navigation/native';
// import { useAppNavigation, useAuthNavigation, useAuthNavigationWithParams } from 'navigation/useAppNavigation';
import Layout from 'layouts/body/Layout';
import MainLogo from 'components/UI/Logo/MainLogo';
import InputBox from 'components/UI/input/InputBox';
import TextButton from 'components/UI/button/TextButton';
import ButtonRefNext from 'components/UI/button/Onboarding/ButtonRefNext';
import ButtonRefPrev from 'components/UI/button/Onboarding/ButtonRefPrev';
import { verifyAccount } from 'services/api/Auth/VerifyAxios';
import Loading from 'pages/LoadingPage/LoadingScreen';
import { resendOtp } from 'services/api/Auth/ResendAxios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuthNavigator } from 'hook/navigate/useAuthNavigator';
import { useAppNavigator } from 'hook/navigate/useAppNavigator';

const ConfirmOTPScreen = () => {
  const route = useRoute();
  const {params} = route;
  const {email} = params  as { email: string };
  const navi = useAuthNavigator();
  const navigation = useAppNavigator();
  const [loading, setLoading] =   React.useState<boolean>(false);
  const [otp, setOtp] = React.useState<string>("")
  const submidHandler = async () =>{
    setLoading(true);
    const check = await verifyAccount(email, otp);
    if (check) {
      console.log("Login Success");
      // await AsyncStorage.removeItem("username");
      // await AsyncStorage.removeItem("password");
      // navigation.dispatch(StackActions.replace("WelcomeScreen"))
      navigation.replaceScreen("PersonalObjectScreen");
      console.log("Submit");
    } else {
      console.log("Login Failed");
    }
    setLoading(false);
    // navigation.replaceScreen("PersonalObjectScreen");
    
  }
  const cancelHandler = () =>{  
    navi.goBack();
  }
  const resendHandler = async () => {
    setLoading(true);
    const check = await resendOtp(email);
    if (check) {
      console.log("Resend Success");
    } else {
      console.log("Resend Failed");
    }
    setLoading(false);
  }
  return (
    <Layout>
      {loading ?? <Loading />}
      <View style={styles.container}>
        <View style={styles.mb30}>
          <MainLogo size={150}/>
        </View>
        <View style={styles.inputContainer}>
            <View style={styles.mx10}>
              <Text style={styles.txt}>Confirmation Code</Text>
              <Text style={styles.txt2}>Enter the confirmation code we sent to </Text>
              <Text style={[styles.txt,styles.mt10]}>{email ?? email}</Text>
            </View>
            <InputBox  keyboardType="numeric" placeholder="Confirmation Code" value={otp} setValue={setOtp}/>
            <View style={[styles.mx10,styles.txtContainer]}>
              <Text style={styles.txtDefault}>
              Didn’t receive the code?
              </Text>
              <TextButton text=' Resend' action={resendHandler}/>
            </View> 
            <View style={styles.btnContainer}>
              <View style={styles.btnSt}>
                <ButtonRefNext data={{text:"Submit", action:submidHandler,width:"auto"}} />
              </View>
              <View style={styles.btnSt}>
                <ButtonRefPrev data={{text:"Cancel", action:cancelHandler,width:"auto"}} />
              </View>
            </View>
          </View>
      </View>
    </Layout>
  )
}

export default ConfirmOTPScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 30,
    display: "flex",
    paddingTop: 40,
  },
  mb30:{
    marginBottom: 30,
  },
  mx10:{
    marginHorizontal: 10,
  },
  ms10:{
    marginStart: 10,
  },
  mt10:{
    marginTop: 10,
  },
  inputContainer:{
    display: 'flex',
    flexDirection: 'column',
    rowGap: 16,
    marginBottom: 30,
  },
  txt:{
    fontSize: 16,
    fontWeight: "500",  
    color:"#2E2E5D"
  },
  txt2:{
    fontSize: 14,
    fontWeight: "400",  
    color:"#2E2E5D",
    marginTop: 10,
  },
  txtDefault:{
    fontSize: 14,
    fontWeight: "400",
    textAlign:"justify",
  },
  txtCenter:{
    textAlign:"center",
  },
  txtLeft:{
    textAlign:"left"
  },
  txtContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    flexWrap:"wrap",
    alignItems:"center",
  },
  btnContainer:{
    display:"flex",
    flexDirection:"column",
    rowGap: 14,
    marginTop: 20

  },
  btnSt:{
    display:"flex",
    flexDirection:"row",
  }
})