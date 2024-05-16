import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { useAppNavigation, useAuthNavigation, useAuthNavigationWithParams } from 'navigation/useAppNavigation';
import Layout from 'layouts/body/Layout';
import MainLogo from 'components/UI/Logo/MainLogo';
import InputBox from 'components/UI/input/InputBox';
import ButtonRefNext from 'components/UI/button/Onboarding/ButtonRefNext';
import ButtonRefPrev from 'components/UI/button/Onboarding/ButtonRefPrev';
import { StackActions, useRoute } from '@react-navigation/native';
import { useAppNavigator } from 'hook/navigate/useAppNavigator';
import { useAuthNavigator } from 'hook/navigate/useAuthNavigator';

const EmailSentScreen = () => {
  const navigation = useAppNavigator();
  const navi = useAuthNavigator();
  const route = useRoute();
  const {params} = route;
  const {email} = params  as { email: string };
  const submidHandler = () =>{
    console.log("Submit");
    // navigation.dispatch(StackActions.replace("LoginObjectScreen"));
    navigation.replaceScreen("AuthObjectScreen");
  }
  const cancelHandler = () =>{  
    navigation.replaceScreen("AuthObjectScreen");
    // navi.goBack();
  }
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.mb30}>
          <MainLogo size={150}/>
        </View>
        <View style={styles.inputContainer}>
            <View style={styles.mx10}>
              <Text style={styles.txt}>Email Sent</Text>
              <Text style={styles.txt2}>We sent an email to <Text style={styles.txt}>{email ?? email}</Text> with a link to get back into your account.</Text>
            </View>
            <View style={styles.btnContainer}>
              <View style={styles.btnSt}>
                <ButtonRefNext data={{text:"Login now", action:submidHandler,width:"auto"}} />
              </View>
              <View style={styles.btnSt}>
                <ButtonRefPrev data={{text:"Close", action:cancelHandler,width:"auto"}} />
              </View>
            </View>
          </View>
      </View>
    </Layout>
  )
}

export default EmailSentScreen

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