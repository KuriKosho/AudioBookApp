import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SmallBookProps } from './SmallBook'

const LibBook:React.FC<SmallBookProps> = ({id,imgUrl,authorName,bookName,action}) => {
    const pressHandler = () => {
        action();
    }
    return (
        <View>
            <Pressable onPress={pressHandler}>
                <View style={styles.container}>
                    <View>
                        <Image source={{uri:imgUrl}} style={styles.img}/>
                    </View>
                    <View style={styles.txtContainer}>
                        <Text style={styles.title}>
                            {bookName}
                        </Text>
                        <Text style={styles.des}>
                            {authorName}
                        </Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default LibBook

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
    },
    img:{
        width: 80,
        height: 80,
        borderRadius: 4
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
    },
    txtContainer: {
        display: "flex",
        flexDirection: "column",
        marginLeft: 16,
    }
})