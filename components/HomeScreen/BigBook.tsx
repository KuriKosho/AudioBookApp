import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export interface BigBookProps {
    id: string;
    imgUrl: string;
    action: () => void;
}
const BigBook:React.FC<BigBookProps> = ({id,imgUrl,action}) => {
    const pressHandler = () => {
        action();
    }
  return (
    <View>
        <Pressable onPress={pressHandler}>
            <View>
                <Image source={{uri:imgUrl}} style={{width: 200, height: 300}}/>
            </View>
        </Pressable>
    </View>
  )
}

export default BigBook

const styles = StyleSheet.create({})