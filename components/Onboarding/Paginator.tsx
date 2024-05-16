import { Animated, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { slideProps } from 'pages/SubPage/OnBoardingPage/OnBoardingData'
export interface paginatorProps{
    slide: slideProps[]
    scrollX: any
}
const Paginator:React.FC<{data: paginatorProps}> = ({data}) => {
    const {width} = useWindowDimensions();

  return (
    <View style={[styles.container]}>
      {data.slide.map((_, i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
            const dotWidth = data.scrollX.interpolate({
                inputRange,
                outputRange: [12,20,12],
                extrapolate: "clamp",
            })
            const opacity = data.scrollX.interpolate({
                inputRange,
                outputRange: [0.3,1,0.3],
                extrapolate: "clamp",
            
            })
            return (<Animated.View style={[styles.dot, {width:dotWidth, opacity}]} key={i}/>)
      })}
    </View>
  )
}

export default Paginator

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        height: 64,
        display:"flex",
        alignItems:"center",
    },
    dot:{
        height: 12,
        borderRadius: 6,
        backgroundColor: "#7466E3",
        marginHorizontal: 8,
    }
    // F77A55
})