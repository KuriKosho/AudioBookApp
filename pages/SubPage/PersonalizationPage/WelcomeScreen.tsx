import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from 'layouts/body/Layout'
import ButtonRefPrev from 'components/UI/button/Onboarding/ButtonRefPrev'
import ButtonRefNext from 'components/UI/button/Onboarding/ButtonRefNext'
// import { useAppNavigation, useAuthNavigation, useAuthNavigationWithParams } from 'navigation/useAppNavigation'
import { StackActions } from '@react-navigation/native'
import { usePersonalNavigator } from 'hook/navigate/usePersonalNavigator'
import { useAppNavigator } from 'hook/navigate/useAppNavigator'


const {width} = Dimensions.get("window")
const WelcomeScreen = () => {
  const navi = usePersonalNavigator();
  const mainNavi = useAppNavigator();
  const personalizeHandler = () =>{
    navi.goToScreen("PersonalizationScreen");
    console.log("Personalize");
  }
  const skipHandler = () =>{
    // nvi.dispatch(StackActions.replace("MainObjectScreen"));
    mainNavi.replaceScreen("BottomTabObjectScreen");
    console.log("Skip");
  }
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={require("../../../assets/pattern/bg1.png")} style={styles.imgSt}/>
        </View>
        <View style={styles.labelContainer}>
          <View>
            <Text style={styles.txtOrange}>Welcome !</Text>
          </View>
          <View>
            <Text style={styles.title}>
              Find what you are looking for
            </Text>
          </View>
          <View>
            <Text style={styles.txtNormal}>
              By personalize your account, we can help you to find what you like.
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
            <ButtonRefNext data={{text:"Personalize Your Account", action:personalizeHandler,width:"100%"}} />
            <ButtonRefPrev data={{text:"Skip", action:skipHandler,width:"100%"}} />
        </View>
      </View>
    </Layout>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center",
  },
  imgContainer: {
    width:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  },
  labelContainer:{
    paddingHorizontal: 30,
    display:"flex",
    flex:1,
    marginBottom:"30%",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"flex-start"
  },
  txtNormal:{
    color:"#2E2E5D",
    fontSize: 14,
    fontWeight: "400",
    textAlign:"left",
  },
  imgSt:{
    width: width,
    height: 250,
    objectFit:"contain",
  },
  buttonContainer:{
    display:"flex",
    flexDirection:"column",
    width:"100%",
    justifyContent:"space-between",
    paddingHorizontal: 30,
    marginBottom: 50,
    rowGap: 14
  },
  txtOrange: {
    color:"#F77A55",
    fontSize: 16,
    fontWeight: "500",
    textAlign:"center",
  },
  title: {
    color:"#4838D1",
    fontSize: 48,
    fontWeight: "100",
    textAlign:"left"
  }
})