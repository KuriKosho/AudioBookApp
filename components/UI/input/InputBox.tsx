import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import DynamicIcon from '../Icon/DynamicIcon'



export interface InputBoxProps {
    keyboardType: 'default' | 'numeric' | 'email-address' | 'phone-pad' | 'decimal-pad',
    placeholder?: string,
    value:any,
    setValue:React.Dispatch<React.SetStateAction<any>>,
    // width?: "100%" | "auto",
}
const InputBox:React.FC<InputBoxProps> = ({keyboardType,placeholder,setValue,value}) => {
  const [showPass, setShowPass] = React.useState<boolean>(false)
  const showPasswordHandler = () => {
    setShowPass(!showPass);
  }
    function checkSecureTextEntry(): boolean{
        if(placeholder?.toUpperCase().includes("PASSWORD")){
            return true
        }
        return false
    }
    
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.inputStyle]}
        placeholder={placeholder}
        onChangeText={text => setValue(text)}
        value={value}
        keyboardType={keyboardType}
        autoCapitalize={"none"}
        secureTextEntry={checkSecureTextEntry() && !showPass}
      /> 
      {checkSecureTextEntry() && 
        <Pressable onPress={showPasswordHandler} style={styles.eyeSt}>
          {showPass ? <DynamicIcon color='#a2a2a2' library='Ionicons' name='eye' size={20}/> :<DynamicIcon color='#a2a2a2' library='Ionicons' name='eye-off-sharp' size={20}/>}
        </Pressable>
      }  
    </View>
  )
}

export default InputBox


const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: "100%",
    },
    inputStyle: {
      height: 53, 
      paddingHorizontal: 24,
      width: "100%",
      borderRadius: 8,
      fontSize: 14,
      lineHeight: 20,
      backgroundColor:"#F5F5FA",
      color: "#000000"
    },
    eyeSt:{
      position: 'absolute',
      right: 15,
      top: 17,
    }

  })