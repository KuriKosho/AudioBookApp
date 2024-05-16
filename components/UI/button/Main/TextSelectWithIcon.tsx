import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

export interface TextSelectWithIconProps {
    text: string | undefined,
    action?: () => void,
    width?: string | number,
    icon?: keyof typeof AntDesign.glyphMap
}
const TextSelectWithIcon:React.FC<TextSelectWithIconProps> = ({text,action,width}) => {
  const [select, setSelect] = React.useState<boolean>(false);
  const pressHandler = () =>{
    setSelect(!select);
    action && action();
  }
  return (
    <View style={[styles.container, {backgroundColor: select ? "#7466E3": "#F5F5FA"},width!=="auto" ? {width: "auto"}: {flex: 1} ]}>
        <Pressable onPress={pressHandler} style={styles.container2} >
            <Text style={[styles.txt, {color: select ? "#fff": "#2E2E5D"}]}>{text}</Text>
        </Pressable>
    </View>
  )
}

export default TextSelectWithIcon


const styles = StyleSheet.create({
  container:{
    borderRadius: 12,
    height: 48,
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