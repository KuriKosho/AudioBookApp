import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DynamicIcon from 'components/UI/Icon/DynamicIcon';
import { useDashboardNavigator } from 'hook/navigate/useDashboardNavigator';

export type HeaderShownPropsList = {
    name: "Recommended books"| "New Releases" | "Best Seller Book"|"Trending Now"| string | undefined;
}
export interface HeaderShownProps {
    name: string;
}
const HeaderShown:React.FC<HeaderShownProps> = ({name}) => {
    const navi = useDashboardNavigator();
    const pressHander = ()=>{
        navi.goBack();
    }
  return (
    <View style={styles.container}>
        <View>
        <Pressable style={{width: "auto"}} onPress={pressHander}>
            <DynamicIcon color='#000000' library='AntDesign' name='left' size={20}/>
        </Pressable>
        </View>
        <View style={{flex: 1}}>
            <Text style={styles.headerTxt}>{name}</Text>
        </View>
    </View>
  )
}

export default HeaderShown

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        paddingHorizontal: 20,
        alignItems:"center",
        alignContent:"center",
        padding: 10,
    },
    headerTxt:{
        color:"#2E2E5D",
        fontSize: 18,
        fontWeight: "600",
        textAlign:"center"
    }
})