import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from 'layouts/body/Layout';
import ButtonRefNext from 'components/UI/button/Onboarding/ButtonRefNext';
import OnboardingItem from 'components/Onboarding/OnboardingItem';
import { slideFinish } from './FinishPersonalizationData';
import Loading from 'pages/LoadingPage/LoadingScreen';
// import { useAppNavigation } from 'navigation/useAppNavigation';
import { StackActions } from '@react-navigation/native';
import { useAppNavigator } from 'hook/navigate/useAppNavigator';

const {width} = Dimensions.get("window");

const FinishPersonalizationScreen= () => {
  const navi = useAppNavigator();
  
  const finishHandler = () => {
    console.log("Finish");
    // navi.dispatch(StackActions.replace("MainObjectScreen"));
    navi.replaceScreen("BottomTabObjectScreen");
  }
  return (
    <Layout>
      {/* <Loading/> */}
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={require("../../../assets/pattern/bg1.png")} style={styles.imgSt}/>
      </View>
      <View style={styles.imgContainer2}>
        <OnboardingItem slideData={slideFinish}/>
      </View>
      <View style={styles.buttonContainer}>
          <ButtonRefNext data={{text:"Finish", action:finishHandler,width:"auto"}} />
      </View>
    </View>
    </Layout>
  )
}

export default FinishPersonalizationScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center",
  },
  imgContainer: {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  },
  imgContainer2:{
    flex:1,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    // marginTop:-50,
  },
  imgSt:{
    width: width,
    height: 250,
    objectFit:"contain",
  },
  buttonContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal: 40,
    marginBottom: 50,
    columnGap: 20,
  }
})