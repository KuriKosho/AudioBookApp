import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CategoryDTO } from 'services/api/AudioUser/updateCategory';

export interface TextSelectBtnProps {
    text: string | undefined,
    action?: () => void,
}
const TextSelectBtn:React.FC<TextSelectBtnProps> = ({text,action}) => {
  const [select, setSelect] = React.useState<boolean>(false);
  const pressHandler = () =>{
    setSelect(!select);
    action && action();
  }
  return (
    <View style={[styles.container, {backgroundColor: select ? "#4838D1": "#fff"}]}>
      <Pressable onPress={pressHandler} style={styles.container2} >
          <Text style={[styles.txt, {color: select ? "#fff": "#4838D1"}]}>{text}</Text>
      </Pressable>
    </View>

  )
}

export default TextSelectBtn

const styles = StyleSheet.create({
  container:{
    borderRadius: 24,
    height: 29,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#4838D1",
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
    fontSize: 14,
    fontWeight: "500",
  }
})