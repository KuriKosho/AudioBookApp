import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NumberStart from './NumberStart';
import { formatNumber } from 'utils/format/FormatString';
import { typeBookResponse } from 'services/api/AudioBook/useTypeBook';

export interface SellerBookProps {
    id: string;
    imgUrl: string;
    numberStar?: number | undefined;
    authorName?: string | undefined;
    bookName?: string | undefined;
    numberListener?: number | undefined;
    action: () => void;
}
const SellerBook:React.FC<SellerBookProps> = ({id,imgUrl,action,bookName,numberStar,authorName, numberListener}) => {
    const pressHandler = () => {
        console.log(numberListener)
        action();
    }
  return (
    <View style={styles.container}>
        <Pressable onPress={pressHandler}>
            <View style={styles.detailContainer}>
                <View>
                    <Image source={{uri:imgUrl}} style={styles.imgSt}/>
                </View>
                <View style={styles.txtContainer}>
                    <View>
                        <View>
                            <Text style={styles.txtBN}>{bookName}</Text>
                        </View>
                        <View>
                            <Text style={styles.txtAT}>{authorName}</Text>
                        </View>
                    </View>
                    <View>
                        <NumberStart number={numberStar} />
                        <Text style={{marginTop: 10}}>
                            {formatNumber(numberListener)}
                            <Text>+ Listener</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </Pressable>
    </View>
  )
}

export default SellerBook

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        alignContent:"center",
        width: 315,
        height: 144,
        backgroundColor:"#F5F5FA",
        borderRadius: 12,
        
    },
    imgSt:{
        width: 120,
        height: 120,
        objectFit:"cover",
        marginHorizontal: 16,
        borderRadius: 4,
    },
    detailContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        alignContent:"center",
    },
    txtContainer:{
        display:"flex",
        width: "100%",
        height:120,
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"flex-start",
        alignContent:"center",
        rowGap: 4,
    },
    txtBN:{
        fontSize: 16,
        fontWeight: "700",
        color:"#010104",
        marginBottom: 10,
    },
    txtAT:{
        fontSize: 12,
        // fontWeight: "400",
        color:"#6A6A8B"
    }
})