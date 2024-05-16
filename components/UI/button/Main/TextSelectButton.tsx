import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export interface TextSelectButtonProps {
    text: string | undefined,
    action?: () => void,
}
const TextSelectButton:React.FC<TextSelectButtonProps> = ({text,action}) => {
  const [select, setSelect] = React.useState<boolean>(false);
  const pressHandler = () =>{
    setSelect(!select);
    action && action();
  }
  return (
    <View style={[styles.container, {backgroundColor: select ? "#7466E3": "#F5F5FA"}]}>
    <Pressable onPress={pressHandler} style={styles.container2} >
        <Text style={[styles.txt, {color: select ? "#fff": "#2E2E5D"}]}>{text}</Text>
    </Pressable>
  </View>
  )
}

export default TextSelectButton


const styles = StyleSheet.create({
  container:{
    borderRadius: 12,
    height: 40,
    paddingHorizontal: 16,
    display:"flex",
    alignItems: 'center',
    justifyContent:"center",
  },
  container2:{
    display:"flex",
    flexDirection:"row",
    alignItems: 'center',
    alignContent:"center",
    alignSelf:"center",
    justifyContent:"center",
  },
  txt:{
    fontSize: 16,
    fontWeight: "400",
  }
})