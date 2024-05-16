import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DynamicIcon from '../Icon/DynamicIcon';
export interface BottomTabProps{
    focus: boolean;
    icon: subicon;
}
export interface subicon{
    library:string;
    color:string;
    name: string;
    size: number;
}
const BottomTab:React.FC<BottomTabProps> = ({icon, focus}) => {
  return (
    <View style={styles.tabContainer}>
      <DynamicIcon 
        color={focus ? "#4838D1" : "#6A6A8B"} 
        library={icon.library}
        name={icon.name}
        size={icon.size}
        />
    </View>
  )
}

export default BottomTab
const styles = StyleSheet.create({
    tabContainer: {
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        marginTop: 5,
    },
});