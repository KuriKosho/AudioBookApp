import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons'

export interface TextSelectWithIconProps {
    text: string | undefined,
    action?: () => void,
    value?: string[],
    setValue?: React.Dispatch<React.SetStateAction<string[]>>,
    width?: string | number,
    icon?: keyof typeof AntDesign.glyphMap,
    id?: string | number,
}
const TextSelectWithIcon:React.FC<TextSelectWithIconProps> = ({text,action,width,value,setValue,id}) => {
  const [select, setSelect] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<boolean>(false);
  useEffect(() => {
    if (setValue && value && id) {
      if (select) {
        setValue([...value,id.toString()]);
      } else {
        setValue(value?.filter((item) => item !== id)); 
      }
    }
  },[select])
  const pressHandler = () =>{
    console.log("Press before:",select);
    setSelect(!select);
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