import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DynamicIcon from 'components/UI/Icon/DynamicIcon';


export interface HeaderFieldProps {
    name: string | undefined;
    action: () => void;
    type?: "dropdown" | "reload" | "link"|"none";
}
const HeaderField:React.FC<HeaderFieldProps> = ({name,action,type}) => {
    const [seeMore, setSeeMore] = React.useState<boolean>(false)
    const pressHandler = () => {
        setSeeMore(!seeMore);
        action();
    }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTxt}>{name}</Text>
      </View>
      <View>
        <Pressable onPress={pressHandler}>
            <View style={styles.seeMoreContainer}>
                <Text style={styles.seeMoreTxt}>See more </Text>
                {type==="reload" && <DynamicIcon name='reload1' color='#4838D1' library='AntDesign' size={20}/>}
                {type==="link" && <DynamicIcon name='right' color='#4838D1' library='AntDesign' size={20}/> }
                {type==="dropdown" && <DynamicIcon name={seeMore ? 'up' : 'down'} color='#4838D1' library='AntDesign' size={20}/>}
            </View>
        </Pressable>
      </View>
    </View>
  )
}

export default HeaderField

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        alignContent:"center",
    },
    seeMoreContainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
    },
    headerTxt:{
        fontSize: 16,
        fontWeight:"600",
        color:"#010104",
    },
    seeMoreTxt:{
        fontSize: 14,
        color:"#4838D1",
        fontWeight:"600",
        marginRight:5,
    }
})