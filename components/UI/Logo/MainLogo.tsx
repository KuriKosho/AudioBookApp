import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export interface MainLogoProps {
    size?: number | 24
}
const MainLogo:React.FC<MainLogoProps> = ({size}) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/Logo/logo160x160.png")} style={{width:size, height: size }} />
    </View>
  )
}

export default MainLogo

const styles = StyleSheet.create({
  container:{
    display: "flex",
    justifyContent: "center", 
    alignItems: "center"
  }
})