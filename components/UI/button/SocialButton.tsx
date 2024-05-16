import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export interface SocialButtonProps {
    imageUrl?: ImageSourcePropType,
    size?: number | 24
}
const SocialButton:React.FC<SocialButtonProps> = ({imageUrl, size}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Image source={imageUrl} style={{width:size, height: size }} />
        </TouchableOpacity>
    </View>
  )
}

export default SocialButton

const styles = StyleSheet.create({
    container:{
      display: "flex",
      justifyContent: "center", 
      alignItems: "center",
      borderColor:"#4838D1",
      borderWidth: 1.5,
      paddingHorizontal: 30,
      paddingVertical: 13,
      borderRadius: 8,

    }
  })