import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export interface SmallBookProps {
    id: string;
    imgUrl: string;
    bookName?: string | undefined;
    authorName?:string | undefined;
    action: () => void;
}
const SmallBook:React.FC<SmallBookProps> = ({id,action,bookName,imgUrl,authorName}) => {
    const pressHandler = () => {
        action();
    }
  return (
    <View>
        <Pressable onPress={pressHandler}>
            <View>
                <Image source={{uri:imgUrl}} style={{width: 160, height: 160, objectFit:"cover", borderRadius: 4}}/>
            </View>
            <View>
                <Text style={styles.title}>
                    {bookName}
                </Text>
            </View>
            <View>
                {authorName ? <Text style={styles.des}>{authorName}</Text>:""}
            </View>
        </Pressable>
    </View>
  )
}

export default SmallBook

const styles = StyleSheet.create({
    container:{

    },
    title:{
        color:"#2E2E5D",
        fontSize: 16,
        fontWeight: "600",
        marginTop:8
    },
    des:{
        color:"#4838D1",
        fontSize: 12
    }
})