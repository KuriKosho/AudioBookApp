import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Layout from 'layouts/body/Layout'
import Header from 'components/Header/Header'
import HeaderField from 'components/Header/HeaderField'
import TextSelectButton from 'components/UI/button/Main/TextSelectButton'
import { BookRecommenDataProps, ListBookRecommenData } from './Data/BookRecommenData'
import BigBook from 'components/HomeScreen/BigBook'
import { ListSellerBookData, SellerBookDataProps } from './Data/SellerBookData'
import SellerBook from 'components/HomeScreen/SellerBook'
import { ListNewBookData,  NewBookProps } from './Data/NewBookData'
import SmallBook from 'components/HomeScreen/SmallBook'
import { ListTrendingBookData, TrendingBookProps } from './Data/TrendingBookData'
import { useCategoryList } from 'services/api/Category/GetCategoryAxios'
import useTypeBook from 'services/api/AudioBook/useTypeBook'
import { useDashboardNavigator } from 'hook/navigate/useDashboardNavigator'

const HomeScreen = () => {
  // Navigation
  const navi = useDashboardNavigator();
  // const navi = useHomeScreenNavigation();
  // See more action
  const seeMore = (name:string, type:"recommend"|"bestseller"|"newrelease"|"trending") => {
    console.log("See more name: ",name);
    navi.goToScreenWithParams('SeeMoreScreen',{
      name: name,
      type:type,
    })
  }
  // Choose book action
  const chooseBook = (id:string,bookName:string | undefined, authorName:string| undefined) => {
    navi.goToScreenWithParams("DetailsScreen",{
      id:id,
      bookName:bookName,
      authorName:authorName,
    })
  }
  // Category
  const [size, setSize] = React.useState<number>(10)
  const listCategoryMain = useCategoryList(1,size);
  const [isSeeMoreCategory, setIsSeeMoreCategory] = React.useState<boolean>(false)
  const [categoryList, setCategoryList] = React.useState<number[]>([])

  const seeMoreCategory = () => {
    console.log("See more category")
    setIsSeeMoreCategory(!isSeeMoreCategory)
    if (isSeeMoreCategory) {
      setSize(10)
    } else {
      setSize(1000)
    }
  }

  const updateListSelectedCategory = (id:string | undefined) => {
    if (id!=undefined){
      if (categoryList?.includes(parseInt(id))) {
        const newList = categoryList.filter((item) => item !== parseInt(id));
        setCategoryList(newList);
      } else {
        setCategoryList([...categoryList, parseInt(id)]);
      }
    } else {
      console.log("id is undefined");
    }
  }
  // Recommended Book
  let listRecommenBook = useTypeBook('recommend',1,10);
  const seeMoreRecommended = () => {
    seeMore("Recommended book",'recommend');
  }
  // Best seller book
  const listSellerBook = useTypeBook('bestseller',1,10);
  const seeMoreSeller = () => {
    seeMore("Best seller book",'bestseller');
  }
  // New releases book
  const listNewBookData = useTypeBook('newrelease',1,10);
  const seeMoreNew = ()=> {
    seeMore("New releases book",'newrelease');
  }
  // Trending book
  const listTrendBook = useTypeBook('trending',1,10);
  const seeMoreTrending = () => {
    seeMore("Trending book",'trending');
  }
  return (
    <Layout>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
        <View style={styles.headerContainer}>
          <Header/>
        </View>
        <View style={styles.normalContainer}>
          <HeaderField name='Categories' action={seeMoreCategory} type='dropdown'/>
          <View style={[styles.scrollContainer, isSeeMoreCategory ? {height: 250}: {}]}>
            <ScrollView horizontal={isSeeMoreCategory ? false: true}  style={styles.scrollSt}  nestedScrollEnabled={true}>
              <View style={[styles.rowToColumnContainer]} >
                  {listCategoryMain.map((item,index) => {
                    return(
                      <TextSelectButton key={index} text={item.name} action={()=>updateListSelectedCategory(item.id)} />
                    )
                  })}
              </View>
            </ScrollView>
          </View>       
        </View>
        <View style={styles.normalContainer}>
            <HeaderField name="Recommended For You" type='none' action={()=> seeMoreRecommended()} />
            <View style={styles.scrollContainer}>
              <ScrollView horizontal style={styles.scrollSt} showsHorizontalScrollIndicator={false}>
                <View style={styles.rowToColumnContainer}>
                  {listRecommenBook.map((item,index) => {
                    return (
                      <BigBook key={index} id={item.id} imgUrl={item.imgUrl} action={()=>chooseBook(item.id,item.bookName,item.authorName)} />
                    )
                  })}
                </View>
              </ScrollView>
            </View>
        </View>
        <View style={styles.normalContainer}>
            {/* <HeaderField name="Best Seller" type='none' action={()=> seeMore("Best seller book",'bestseller')} /> */}
            <HeaderField name="Best Seller" type='none' action={()=> seeMoreSeller()} />
            <View style={styles.scrollContainer}>
              <ScrollView horizontal style={styles.scrollSt} showsHorizontalScrollIndicator={false} >
                <View style={styles.rowToColumnContainer}>
                  {listSellerBook.map((item,index) => {
                    return (
                      <SellerBook numberListener={item.numberListener} key={index} id={item.id} 
                       bookName={item.bookName} authorName={item.authorName} 
                       numberStar={item.numberStar} imgUrl={item.imgUrl} action={()=>chooseBook(item.id,item.bookName,item.authorName)} size={315}/>
                    )
                  })}
                </View>
              </ScrollView>
            </View>
        </View>
        <View style={styles.normalContainer}>
            {/* <HeaderField name="New Releases" type='none' action={()=> seeMore("New releases",'newreleases')} /> */}
            <HeaderField name="New Releases" type='none' action={()=> seeMoreNew()} />
            <View style={styles.scrollContainer}>
              <ScrollView horizontal style={styles.scrollSt} showsHorizontalScrollIndicator={false} >
                <View style={styles.rowToColumnContainer}>
                  {listNewBookData.map((item,index) => {
                    return (
                      <SmallBook  key={index} id={"1"} bookName={item.bookName} imgUrl={item.imgUrl} action={()=>chooseBook(item.id,item.bookName,item.authorName)} />
                    )
                  })}
                </View>
              </ScrollView>
            </View>
        </View>
        <View style={styles.normalContainer}>
            {/* <HeaderField name="Trending Now" type='none' action={()=> seeMore("Trending now",'trending')} /> */}
            <HeaderField name="Trending Now" type='none' action={()=> seeMoreTrending()} />
            <View style={styles.scrollContainer}>
              <ScrollView horizontal style={styles.scrollSt} showsHorizontalScrollIndicator={false} >
                <View style={styles.rowToColumnContainer}>
                  {listTrendBook.map((item,index) => {
                    return (
                      <SmallBook  key={index} id={item.id} bookName={item.bookName} imgUrl={item.imgUrl} action={()=>chooseBook(item.id,item.bookName,item.authorName)} />
                    )
                  })}
                </View>
              </ScrollView>
            </View>
        </View>
      </ScrollView>
    </Layout>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:20,
    marginBottom: 50
  },
  headerContainer:{
    marginVertical:20,
  },
  normalContainer:{
    display:"flex",
    flexDirection:"column",
    marginVertical:10,
  },
  rowToColumnContainer:{
    display:"flex",
    flexDirection:"row",
    flexWrap: 'wrap',
    justifyContent: 'flex-start', // or 'flex-start' based on your design
    alignItems: 'center', // or 'flex-start' based on your design
    width: '100%',
    columnGap: 16,
    rowGap:16,
  },
  scrollContainer:{
    width:"100%",
    marginVertical:15,
  },
  scrollSt:{
    width:"100%",
  },
})