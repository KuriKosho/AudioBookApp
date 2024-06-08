import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SmallBookProps } from './SmallBook'
import DynamicIcon from 'components/UI/Icon/DynamicIcon';

interface LibBookProps {
    id: string;
    imgUrl: string;
    bookName?: string | undefined;
    authorName?:string | undefined;
    action: () => void;
    actionDelete?: () => void;
}
const LibBook:React.FC<LibBookProps> = ({id,imgUrl,authorName,bookName,action, actionDelete}) => {
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
                    <View>
                        {actionDelete ? <Pressable onPress={actionDelete}>
                            <DynamicIcon name="delete" size={24} color="#2E2E5D" library='AntDesign'/>
                        </Pressable>:""}
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
        width: "100%",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-between",
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
        flex: 1,
        display: "flex",
        flexDirection: "column",
        marginLeft: 16,
    }
})