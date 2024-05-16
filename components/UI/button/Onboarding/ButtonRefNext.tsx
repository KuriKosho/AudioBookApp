import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface ButtonRefProps {
    text: string,
    action?: () => void,
    width: "100%" | "auto",
    disable?: boolean,
}
const ButtonRefNext:React.FC<{data:ButtonRefProps}> = ({data}) => {
  return (
    <TouchableOpacity disabled={data.disable && data.disable==true ? true : false} onPress={data.action} style={[styles.btn, data.width=="100%" ? {width:"100%"}:{flex: 1}, data.disable==true ? {opacity:0.3}: {opacity:1}]}>
      <Text style={styles.textSt}>{data.text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonRefNext

const styles = StyleSheet.create({
  btn:{
    height: 56,
    backgroundColor: "#4838D1",
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 8,
  },
  textSt:{
    color:"#fff",
    fontSize: 16,
    fontWeight:"500",
    letterSpacing:1,
  }
})