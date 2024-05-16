import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { slideProps } from 'pages/SubPage/OnBoardingPage/OnBoardingData'

const {width} = Dimensions.get("window")
const OnboardingItem:React.FC<{slideData: slideProps}> = ({slideData}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={slideData.imageUrl} style={styles.imgOnboarding}/>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>{slideData.title}</Text>
        <Text style={styles.textDes}>{slideData.descripion}</Text>
      </View>
    </View>
  )
}

export default OnboardingItem

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width:width,
    display:"flex",
    alignItems:"center",
    textAlign:"center",
  },
  imgContainer: {
    width:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  },
  imgOnboarding: {
    width: 250,
    height: 250,
    objectFit:"contain",
  },
  textContainer:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    textAlign:"center",
  },
  textTitle: {
    color:"#2E2E5D",
    fontWeight:"500",
    fontSize: 16,
    textAlign:"center",
    marginHorizontal: 20

  },
  textDes:{
    color:"#2E2E5D",
    fontWeight:"400",
    fontSize: 14,
    marginTop: 20,
    textAlign:"center",
    marginHorizontal: 20

  }
})
