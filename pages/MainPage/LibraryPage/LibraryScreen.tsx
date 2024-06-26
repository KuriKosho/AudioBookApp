import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Layout from 'layouts/body/Layout'
import Header from 'components/Header/Header'
import InputBox from 'components/UI/input/InputBox'
import TextSelectButton from 'components/UI/button/Main/TextSelectButton'
import TextSelectWithIcon from 'components/UI/button/Main/TextSelectWithIcon'
import SmallBook from 'components/HomeScreen/SmallBook'
import { ListSellerBookData } from '../HomePage/Data/SellerBookData'
import LibBook from 'components/HomeScreen/LibBook'
import { useDashboardNavigator } from 'hook/navigate/useDashboardNavigator'
import { useLibraryBook } from 'services/api/AudioUser/useLibrary'
import { typeBookResponse } from 'services/api/AudioBook/useTypeBook'

const LibraryScreen = () => {
  const navi = useDashboardNavigator();
  const [search, setSearch] = React.useState<string>('')
  const {ListLibraryBookData, fetchLibraryBook,deleteBook,addBook} = useLibraryBook();

  // Choose book action
  const chooseBook = (id:string,bookName:string | undefined, authorName:string| undefined) => {
    navi.goToScreenWithParams("DetailsScreen",{
      id:id,
      bookName:bookName,
      authorName:authorName,
    })
  }

  useEffect(() => { 
    fetchLibraryBook();
  }, [])
  
 
  const formDeleteBook = (id:string) => {
    Alert.alert(
      "Delete Book",
      "Are you sure you want to delete this book?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Delete", onPress: () => deleteBook(id) }
      ]
    );
  }

  return (
    <Layout>
        {/* <ScrollView style={styles.container} showsVerticalScrollIndicator={true} nestedScrollEnabled={true}> */}
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Header/>
          </View>
          <View style={styles.containerBase}>
            <Text style={styles.h2}>My Books</Text>
            <InputBox  keyboardType="default" placeholder="Search Books or Author..." value={search} setValue={setSearch}/>
          </View>
          
          <View style={styles.bodyContaner}>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={true}>
                    <View style={styles.rowToColumnContainer}>
                      {ListLibraryBookData.map((item,index) => {
                        return (
                          <LibBook  key={index} id={item.id} authorName={item.authorName} bookName={item.bookName} imgUrl={item.imgUrl} action={()=>chooseBook(item.id,item.bookName,item.authorName)} actionDelete={()=> formDeleteBook(item.id)} />
                        )
                      })}
                    </View>
            </ScrollView>
          </View>
        </View>
    </Layout>
  )
}

export default LibraryScreen

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:20,
    marginBottom: 50,
    flex:1,
  },
  containerBase:{
    display:"flex",
    flexDirection:"column",
    marginVertical: 10,
    rowGap: 12
  },
  bodyContaner: {
    display: 'flex',
    flex:1,
    flexDirection: "row",
    alignItems: 'center',
  },
  containerCate:{
    display:"flex",
    flexDirection:"column",
    rowGap: 12
  },
  containerCateRow:{
    display:"flex",
    flexDirection:"row",
    width: "100%",
    justifyContent:"space-between",
    columnGap: 12
  },
  headerContainer:{
    marginTop: 20
  },
  h2:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#010104',
  },
  h3:{
    fontSize: 16,
    fontWeight: '500',
    color: '#010104',
  },
  rowToColumnContainer:{
    display:"flex",
    flexDirection:"column",
    flexWrap: 'wrap',
    justifyContent: 'flex-start', // or 'flex-start' based on your design
    alignItems: 'center', // or 'flex-start' based on your design
    width: '100%',
    columnGap: 16,
    rowGap:16,
  },
})