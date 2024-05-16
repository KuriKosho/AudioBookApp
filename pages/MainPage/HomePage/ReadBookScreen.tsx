import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native';
import Layout from 'layouts/body/Layout';
import HeaderField from 'components/Header/HeaderField';
import HeaderShown from 'components/Header/HeaderShown';
import useGetContentBookById, { bookContentResponse } from 'services/api/AudioBook/useGetContentBookById';
import Loading from 'pages/LoadingPage/LoadingScreen';

const ReadBookScreen = () => {
    const route = useRoute();
    const {bookId, bookName} = route.params as {bookId:string, bookName:string};
    const [loading, setLoading] = React.useState<boolean>(false);
    const bookContent:bookContentResponse = useGetContentBookById(bookId);
    // useEffect(() => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 500);
    // },[])
  return (
    <Layout>
        {loading ?? <Loading/>}
        <HeaderShown name={bookName}/>
        <ScrollView>
            <View style={styles.container}>
                {bookContent.content?.map((content, index) => (
                    <Text key={index} style={styles.text}>{content}</Text>
                ))}
            </View>
        </ScrollView>
    </Layout>
  )
}

export default ReadBookScreen

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 20
    },
    text:{
        fontSize: 16,
        fontWeight: '400',
        color: '#000',
        marginBottom: 20,
        textAlign: 'justify'
    }
})