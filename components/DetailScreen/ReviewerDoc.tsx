import NumberStart from 'components/HomeScreen/NumberStart';
import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { Reviewers } from 'services/api/AudioBook/useGetBookById';


const {width} = Dimensions.get('window');

const ReviewerDoc: React.FC<{reviewer:Reviewers}> = ({reviewer}) => {
    console.log(reviewer);
    return (
        <View style={styles.container}>
            <View style={styles.containerRow}>
                <View>
                    <Image source={{uri:reviewer.reviewerAvatar}} style={styles.image}/>
                </View>
                <View style={styles.containerC}>
                    {/* <View style={styles.containerR}> */}
                        <View style={styles.containerR}>
                            <View style={{flex:1}}>
                                <Text style={styles.name}>{reviewer.reviewerName}</Text>
                            </View>
                            <View>
                                <Text style={styles.date}>{reviewer.reviewDate}</Text>
                            </View>
                        </View>
                    {/* </View> */}
                    <NumberStart number={reviewer.numberStar} size={14}/>
                </View>
            </View>
            <View>
                <Text style={styles.review}>{reviewer.reviewContent}</Text>
            </View>
        </View>
    );
};
export default ReviewerDoc;
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingRight: 8,
        width: width - 40,
    },
    containerR:{
        flex:1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    containerC:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        rowGap: 4,
        flex: 1,
        paddingVertical: 3,

    },
    containerRow:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        columnGap: 20,
        textAlign: 'center',
        alignContent: 'center',
        textAlignVertical: 'center',

    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 8,
        objectFit:"cover"
    },
    name: {
        color:"#2E2E5D",
        fontWeight: 'bold',
        fontSize: 16,
    },
    stars: {
        marginTop: 4,
    },
    date: {
        color: '#6A6A8B',
        marginTop: 4,
    },
    review: {
        marginTop: 8,
        color:"#6A6A8B",
        fontSize: 14,
        fontWeight: '400',
    },
});