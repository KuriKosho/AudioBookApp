import { StyleSheet,  View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
const Loading:React.FC = () => {
  return (
    <View style={styles.container}>
        <LottieView source={require('../../assets/Loading/Loading.json')} autoPlay loop style={styles.lottieImg}/> 
    </View>
  )
}

export default Loading;

const styles = StyleSheet.create({
    container: {
        top: 0,
        bottom:0,
        start: 0,
        end: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        zIndex:999,
        backgroundColor: "#adadad7d"
    },
    lottieImg: {
      width: 300,
      height: 300
    }
})