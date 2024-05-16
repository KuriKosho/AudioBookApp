import { StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React from 'react'
import Layout from 'layouts/body/Layout'
import MainLogo from 'components/UI/Logo/MainLogo'
import InputBox from 'components/UI/input/InputBox'
import ButtonRefNext from 'components/UI/button/Onboarding/ButtonRefNext'
import ButtonRefPrev from 'components/UI/button/Onboarding/ButtonRefPrev'
// import { useAuthNavigation, useAuthNavigationWithParams } from 'navigation/useAppNavigation'
import { forgotPassword } from 'services/api/Auth/ForgetAxios'
import Loading from 'pages/LoadingPage/LoadingScreen'
import { useAuthNavigator } from 'hook/navigate/useAuthNavigator'

const ForgetPasswordScreen = () => {
  const navi = useAuthNavigator();
  const [loading, setLoading] = React.useState<boolean>(false)
  const [email, setEmail] = React.useState<string>("")
  const submidHandler =  async () =>{
    // setLoading(true);
    // try{
    //   const check = await forgotPassword(email);
    //   if (check) {
    //     console.log("Forgot Password Success");
    //     navi.goToScreenWithParams("EmailSentScreen",{email:email})
    //   } else {
    //     console.log("Forgot Password Failed");
    //   }
    // } catch (error) {
    //   console.log("Error:",error);
    //   ToastAndroid.show("Error", ToastAndroid.SHORT);
    // }
    // setLoading(false);
        navi.goToScreenWithParams("EmailSentScreen",{email:email})

  }
  const cancelHandler = () =>{  
    navi.goBack();
  }
  return (
    <Layout>
      {loading && <Loading/>}
      <View style={styles.container}>
        <View style={styles.mb30}>
          <MainLogo size={150}/>
        </View>
        <View style={styles.inputContainer}>
            <View style={styles.mx10}>
              <Text style={styles.txt}>Forget Password</Text>
              <Text style={styles.txt2}>Please fill email and we'll send you a link to get back into your account.</Text>
            </View>
            <InputBox  keyboardType="email-address" placeholder="Email" value={email} setValue={setEmail}/>
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

export default ForgetPasswordScreen

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