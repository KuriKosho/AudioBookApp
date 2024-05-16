import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MainLogo from 'components/UI/Logo/MainLogo'
import InputBox from 'components/UI/input/InputBox'
import Checkbox from 'components/UI/CheckBox/Chechbox'
import ButtonRefNext from 'components/UI/button/Onboarding/ButtonRefNext'
import SocialButton from 'components/UI/button/SocialButton'
import Layout from 'layouts/body/Layout'
// import { useAuthNavigation, useAuthNavigationWithParams } from 'navigation/useAppNavigation'
import TextButton from 'components/UI/button/TextButton'
import DateTimePicker from '@react-native-community/datetimepicker';
import ButtonRefPrev from 'components/UI/button/Onboarding/ButtonRefPrev'
import { register } from 'services/api/Auth/RegisterAxios'
import Loading from 'pages/LoadingPage/LoadingScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useAuthNavigator } from 'hook/navigate/useAuthNavigator'

const RegisterScreen = () => {
  // const navi = useAuthNavigation();
  const navi = useAuthNavigator();
  // const na = useAuthNavigationWithParams();
  const [loading, setLoading] = React.useState<boolean>(false)
  const [email, setEmail] = React.useState<string>("")
  const [password, setPassword] = React.useState<string>("")
  const [username, setUsername] = React.useState<string>("")
  // const [dob, setDob] = React.useState<Date>(new Date())
  // const [txtDob, setTxtDob] = React.useState<string>("Date of birth")
  // const [showPicker, setShowPicker] = React.useState<boolean>(false)

  const TermHanler = () => {
    console.log("Term and condition");
  }
  const DataPolicyHandler = () => {
    console.log("Data Policy");
  }
  const CookiePolicyHandler = () => {
    console.log("Cookie Policy");
  }
  const RegisterHandler = async () => {
    setLoading(true);
    try {
      const check = await register(username,password,email);
      console.log("Check register:",check)
      if (check) {
        // na.goToScreenWithParams("ConfirmOTPScreen",{email:email})
        await AsyncStorage.setItem("username",username);
        await AsyncStorage.setItem("password",password);
        navi.goToScreenWithParams("ConfirmOTPScreen",{email:email})
      } 
    } catch (error) {
      console.log("Error:",error);
    }
    setLoading(false);
    // navi.goToScreenWithParams("ConfirmOTPScreen",{email:email})

  }
  const CancelHandler = () => {
    navi.goBack();
  }
  return (
    <Layout>
      {/* {showPicker && <DateTimePicker value={dob} mode="date" display="spinner" onChange={(event, selectedDate) => {
        setShowPicker(false)
        if(selectedDate){
          setDob(selectedDate)
          setTxtDob(selectedDate.toLocaleDateString())
        } else {
          setTxtDob("Date of birth");
        }
      }} />} */}
      {loading && <Loading/>}
      <View style={styles.container}>
        <View style={styles.mb30}>
          <MainLogo size={150}/>
        </View>
        <View style={styles.inputContainer}>
            <View style={styles.mx10}>
              <Text style={styles.txt}>Register</Text>
            </View>
            <InputBox  keyboardType="default" placeholder="User name" value={username} setValue={setUsername}/>
            <InputBox  keyboardType="email-address" placeholder="Email" value={email} setValue={setEmail}/>
            <InputBox  keyboardType="default" placeholder="Password" value={password} setValue={setPassword}/>
            <View style={[styles.mx10,styles.txtContainer]}>
              <Text style={styles.txtDefault}>
                By signing up, you agree to our
              </Text>
              <TextButton text=' Terms' action={TermHanler}/>
              <Text style={styles.txtDefault}> ,</Text>
              <TextButton text='Data Policy' action={DataPolicyHandler}/>
              <Text style={styles.txtDefault}> and </Text>
              <TextButton text='Cookie Policy.' action={CookiePolicyHandler}/>
            </View> 
            <View style={styles.btnContainer}>
              <View style={styles.btnSt}>
                <ButtonRefNext data={{text:"Register", action:RegisterHandler,width:"auto"}} />
              </View>
              <View style={styles.btnSt}>
                <ButtonRefPrev data={{text:"Cancel", action:CancelHandler,width:"auto"}} />
              </View>
            </View>
          </View>
      </View>
    </Layout>
  )
}

export default RegisterScreen

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
  mt10:{
    marginStart: 10,
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
  dateContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: "100%",
    height: 53, 
    paddingHorizontal: 24,
    borderRadius: 8,
    fontSize: 14,
    lineHeight: 20,
    backgroundColor:"#F5F5FA",
    color: "#B8B8C7"
  },
  dateTxt:{
    color: "#666666"
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