import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Layout from 'layouts/body/Layout'
// import { useAppNavigation } from 'navigation/useAppNavigation';
import  tokenService  from '../../services/token/token.service';
import { StackActions } from '@react-navigation/native';
// import MainScreen from 'pages/APage/MainScreen/MainScreen';
import MainLogo from 'components/UI/Logo/MainLogo';
import { useAppNavigator } from 'hook/navigate/useAppNavigator';

const SplashScreen = () => {
  // const navigation = useAppNavigation();
  const navigation = useAppNavigator();
  useEffect(() => {
    const timer = setTimeout(async () => {
      const checkTokenExists = await tokenService.checkTokenExists();
      const isTokenExpired = await tokenService.isTokenExpired;
      console.log("Check Token Exists:",checkTokenExists);
      console.log("Check Token Expired:",isTokenExpired);
      if (await tokenService.checkTokenExists() && await tokenService.isTokenExpired){
        // navigation.dispatch(
        //   StackActions.replace("MainObjectScreen")
        // )
        navigation.replaceScreen("BottomTabObjectScreen")
      } else {
        // navigation.dispatch(
        //   StackActions.replace("OnboardingObjectScreen")
        // )
        navigation.replaceScreen("OnboardingObjectScreen")
        // navigation.replaceScreen("BottomTabObjectScreen")

      }
    }, 3000); // 5000 milliseconds = 5 seconds
    return () => clearTimeout(timer); // Clear the timer when the component unmounts or re-renders
  }, [navigation]);
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const checkTokenExisted = async() => {
  //     const token = await tokenService.checkTokenExists();
  //     if (token){
  //       setCheck(true)
  //     } else {
  //       setCheck(false)
  //     }
  //   }
  //   checkTokenExisted();
  //   setLoading(false);
  //   navigation.dispatch(
  //     StackActions.replace("")
  //   )
  //   console.log(check)
  // },[])
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <MainLogo size={200}/>
        </View>
        <View style={styles.containerBot}>
          <Text style={styles.versionText}>Version 1.0.0</Text>
        </View>
      </View>
    </Layout>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    display:"flex",
    alignItems:"center",
    textAlign:"center",
    justifyContent:"center"
  },
  containerTop:{
    height: "80%",
    display:"flex",
    alignItems:"center",
    textAlign:"center",
    justifyContent:"center"
  },
  containerBot:{
    height: "20%",
    display:"flex",
    alignItems:"center",
    textAlign:"center",
    justifyContent:"center"
  },
  versionText:{
    fontSize: 14
  }
})