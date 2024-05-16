import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface ButtonRefProps {
    text: string,
    action?: () => void,
    width: "100%" | "auto",
    disable?: boolean,
}
const LogoutButton:React.FC<{data:ButtonRefProps}> = ({data}) => {
  return (
    <TouchableOpacity disabled={data.disable && data.disable==true ? true : false} onPress={data.action} style={[styles.btn, data.width=="100%" ? {width:"100%"}:{flex: 1}]}  >
      <Text style={styles.textSt}>{data.text}</Text>
    </TouchableOpacity>
  )
}

export default LogoutButton

const styles = StyleSheet.create({
  btn:{
    height: 50,
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#F77A55",
  },
  textSt:{
    color:"#F77A55",
    fontSize: 16,
    fontWeight:"500",
    letterSpacing:1,
  }
})