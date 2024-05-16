import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export interface TextButtonProps {
    action?: () => void,
    text: string,
}
const TextButton:React.FC<TextButtonProps> = ({text, action}) => {
  return (
    <TouchableOpacity onPress={action}>
              <Text style={styles.textSt}>{text}</Text>
    </TouchableOpacity>
  )
}

export default TextButton

const styles = StyleSheet.create({
    textSt:{
        color: "#F77A55",
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "500",
    }
})