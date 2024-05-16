import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderShown from 'components/Header/HeaderShown';
import { useRoute } from '@react-navigation/native';
import Loading from 'pages/LoadingPage/LoadingScreen';
import Layout from 'layouts/body/Layout';
import { ListNewBookData } from './Data/NewBookData';
import SmallBook from 'components/HomeScreen/SmallBook';
import useTypeBook from 'services/api/AudioBook/useTypeBook';
import { useDashboardNavigator } from 'hook/navigate/useDashboardNavigator';


  export interface SeeMoreProps{
    id: string;
    imgUrl: string;
    bookName?: string | undefined;
    authorName?: string | undefined;
    // action: () => void;
  }
  const SeeMoreScreen = () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const navi = useDashboardNavigator();
    const route = useRoute();
    const { params } = route;
    const { name, type } = params as { name: string | undefined, type: string | undefined };
    const list = useTypeBook(type || '', 1, 1000);
    useEffect(() => {
      if (name!=null) {
        console.log("Name: ",name);
      }
      // setLoading(true);
      // setTimeout(() => {
      //   setLoading(false);
      // }, 100);
    },[])
    const bookSelectHander = (id:string,bookName:string | undefined, authorName:string| undefined) => {
      navi.goToScreenWithParams("DetailsScreen",{
        id:id,
        bookName:bookName,
        authorName:authorName,
      })
    }
    return (
      <Layout>
        {loading === true ? <Loading /> :
          <View>
            <HeaderShown name={name || ""} />
          </View>}
        <View style={styles.bodyContaner}>
          <View>
            <ScrollView horizontal={false} style={styles.scrollSt} showsVerticalScrollIndicator={false}>
              <View style={styles.rowToColumnContainer}>
                {list.map((item, index) => {
                  return (
                    <SmallBook key={index}
                      action={() => bookSelectHander(item.id, item.bookName, item.authorName)}
                      bookName={item.bookName}
                      id={item.id}
                      imgUrl={item.imgUrl}
                      authorName={item.bookName}
                    />
                  )
                })}
              </View>
            </ScrollView>
          </View>
        </View>
      </Layout>
    )
  }

  export default SeeMoreScreen

  const styles = StyleSheet.create({
    bodyContaner: {
      marginHorizontal: 20,
      marginTop: 10,
      marginBottom: 100,
      rowGap: 20,
      display: 'flex',
      flexDirection: "row",
      justifyContent: "center",
      alignItems: 'center',
    },

    rowToColumnContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: 'wrap',
      justifyContent: 'space-between', // or 'flex-start' based on your design
      alignItems: 'center', // or 'flex-start' based on your design
      width: '100%',
      columnGap: 16,
      rowGap: 16,
    },
    scrollContainer: {
      width: "100%",
      marginVertical: 15,
    },
    scrollSt: {
      width: "100%",
    },
  })