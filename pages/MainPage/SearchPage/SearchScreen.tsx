import { ActivityIndicator, FlatList, InputAccessoryView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useMemo } from 'react'
import Layout from 'layouts/body/Layout'
import Header from 'components/Header/Header'
import TextSelectWithIcon from 'components/UI/button/Main/TextSelectWithIcon'
import SmallBook from 'components/HomeScreen/SmallBook'
import { ListSellerBookData } from '../HomePage/Data/SellerBookData'
import { useDashboardNavigator } from 'hook/navigate/useDashboardNavigator'
import { typeBookResponse } from 'services/api/AudioBook/useTypeBook'
import axiosClient from 'services/api/ConfigAxios'
import InputBox from 'components/UI/input/InputBox'
import { AxiosResponse } from 'axios'
import SellerBook from 'components/HomeScreen/SellerBook'
import { Categories, useRandomCategoryList } from 'services/api/Category/useRandomCategory'
import { useSearchBook } from 'services/api/AudioBook/useSearch'

const SearchScreen = () => {
  const navi = useDashboardNavigator();
  const {BookData, ListBookData, ListBookDataCategory, fetchBookWithSearch, fetchBookWithCategory } = useSearchBook();
  
  const [search, setSearch] = React.useState<string>('')
  const [isSearch, setIsSearch] = React.useState<boolean>(false)
  const [isSearchCategory, setIsSearchCategory] = React.useState<boolean>(false)

  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [currentPage, setCurrentPage] = React.useState<number>(1)
  const [listLatestSearch, setListLatestSearch] = React.useState<typeBookResponse[]>([])
  const [sendRequest, setSendRequest] = React.useState<boolean>(true)
  const [listCategories, setListCatrgories] = React.useState<string[]>([])
  // Choose book action
  const chooseBook = (id:string,bookName:string | undefined, authorName:string| undefined) => {
    navi.goToScreenWithParams("DetailsScreen",{
      id:id,
      bookName:bookName,
      authorName:authorName,
    })
  }
  const renderItem = (item: any) => {
    const itemConvert = item.item;
    return (
      <View style={{marginVertical: 5}}>
        <SellerBook size={"100%"} id={itemConvert.id} bookName={itemConvert.bookName} imgUrl={itemConvert.imgUrl} authorName={itemConvert.authorName} numberListener={itemConvert.numberListener} numberStar={itemConvert.numberStar} action={()=>chooseBook(itemConvert.id,itemConvert.bookName,itemConvert.authorName)} />
      </View>
    )
  }
  const renderLoader = () => {
    return (
      isLoading ?
        <View style={styles.loaderStyle}>
          <ActivityIndicator size="large" color="#aaa" />
        </View> : 
        null
    );
  };
  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleSearch = () => {
    setCurrentPage(1);
    setIsSearch(true);
  }
  useEffect(() => {
    setIsLoading(true);
    if (isSearch) {
      fetchBookWithSearch({searchString:search,page:currentPage,size:15});
    }
    setIsLoading(false);
  }, [currentPage,isSearch]);
  useEffect(() => {
    if (search == '') {
      setIsSearch(false);
    } 
  }, [search]);
  useEffect(() => {
    if (ListBookData) {
      setListLatestSearch(ListBookData);
    }
  }, [ListBookData]);
// Random list category
  const [listRandomCategory, setListRandomCategory] = React.useState<Categories[] | undefined>(undefined);
  const fetchCategoryList = async () => {
    try {
        const response = await axiosClient.get("/api/v1/category/random");
        if (response) {
            setListRandomCategory(response.data);
        }
    } catch (error) {
        console.log("Error:", error);
        throw new Error('Update category list failed');
    }
  };
  useEffect(() => {
    fetchCategoryList();
  }, []);
  useEffect(() => {
    if (listCategories.length > 0) {
      setIsSearchCategory(true);
    } else {
      setIsSearchCategory(false);
    }
  },[listCategories]);
  useEffect(() => {
    if (isSearchCategory) {
      fetchBookWithCategory({categories:listCategories,page:currentPage,size:15});
    }
  },[currentPage,isSearchCategory]);
  
  const renderRecommendedCategories = useMemo(() => (
    <View style={styles.containerBase}>
      <Text style={styles.h3}>Recommended Categories</Text>
      <View style={styles.containerCate}>
        <View style={styles.containerCateRow}>
          {listRandomCategory ? (
            listRandomCategory.map((item, index) => (
              <TextSelectWithIcon key={index} id={item.id} text={item.name} width={'100%'} value={listCategories} setValue={setListCatrgories} />
            ))
          ) : (
            <View>
              <Text>Loading...</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  ), [listRandomCategory, listCategories]);

  const renderLatestSearch = useMemo(() => (
    <View style={styles.containerBase}>
      <Text style={styles.h3}>Latest Search</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.containerCateRow}>
          {listLatestSearch &&
            listLatestSearch.map((item, index) => (
              <SmallBook key={index} id={item.id} bookName={item.bookName} imgUrl={item.imgUrl} action={() => chooseBook(item.id, item.bookName, item.authorName)} />
            ))}
        </View>
      </ScrollView>
    </View>
  ), [listLatestSearch]);

  const renderHeader = useMemo(() => (
    <View>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.containerBase}>
        <Text style={styles.h2}>Explore</Text>
        <InputBox
          keyboardType="default"
          placeholder="Search Books or Author..."
          value={search}
          setValue={setSearch}
          returnKeyType="search"
          onSubmitEditing={handleSearch}
        />
      </View>
    </View>
  ), [search]);

  const renderContent = () => (
    <View>
      {renderRecommendedCategories}
      {isSearch ? (
        <>
          <Text style={styles.h3}>Search Result</Text>
          <FlatList
            data={BookData}
            renderItem={renderItem}
            ListFooterComponent={renderLoader}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={loadMoreItem}
            onEndReachedThreshold={0}
          />
        </>
      ) : isSearchCategory ?
      (
        <>
          <Text style={styles.h3}>Search Result</Text>
          <FlatList
            data={BookData}
            renderItem={renderItem}
            ListFooterComponent={renderLoader}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={loadMoreItem}
            onEndReachedThreshold={0}
          />
        </>
      )
      :(
        <>
          {renderLatestSearch}
        </>
      )}
    </View>
  );
  return (
    <Layout>
      <View style={styles.container}>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={[{ key: 'content' }]} // Fake data để FlatList có thể render
        renderItem={renderContent}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
      />
      </View>  
    </Layout>
    
    // <Layout>
    //     <ScrollView style={styles.container} showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
    //       {/* <View style={styles.container}> */}
    //       <View style={styles.headerContainer}>
    //         <Header/>
    //       </View>
    //       <View style={styles.containerBase}>
    //         <Text style={styles.h2}>Explore</Text>
    //          <InputBox
    //           keyboardType="default"
    //           placeholder="Search Books or Author..."
    //           value={search}
    //           setValue={setSearch}
    //           returnKeyType="search"
    //           onSubmitEditing={handleSearch}
    //       /> 
    //       </View>
    //       {isSearch ? <>
    //         <View style={styles.containerSearch}>
    //           <Text style={styles.h3}>Search Result</Text>
    //           <FlatList
    //             data={ListBookData}
    //             renderItem={renderItem}
    //             ListFooterComponent={renderLoader}
    //             keyExtractor={(item, index) => index.toString()}
    //             onEndReached={loadMoreItem}
    //             onEndReachedThreshold={0}
    //           />
    //         </View>
    //       </>:
    //       <>
    //       <View style={styles.containerBase}>
    //         <Text style={styles.h3}>Recommended Categories</Text>
    //         <View style={styles.containerCate}>
    //           <View style={styles.containerCateRow}>
    //             { listRandomCategory ? listRandomCategory.map((item,index) => {
    //               return (
    //                 <TextSelectWithIcon key={index} id={item.id} text={item.name} width={"100%"} value={listCategories} setValue={setListCatrgories}/>
    //               )
    //             }): <View>
    //               <Text>Loading...</Text>
    //               </View>}
    //           </View>
    //         </View>
    //       </View>
    //       <View style={styles.containerBase}>
    //         <Text style={styles.h3}>Latest Search</Text>
    //         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    //           <View style={styles.containerCateRow}>
    //             { listLatestSearch && listLatestSearch.map((item,index) => {
    //               return (
    //                 <SmallBook  key={index} id={item.id} bookName={item.bookName} imgUrl={item.imgUrl} action={()=>chooseBook(item.id,item.bookName,item.authorName)} />
    //               )
    //             })}
    //           </View>
    //         </ScrollView>
    //       </View>
    //       </>}
    //     {/* </View> */}
    //   </ScrollView>
    // </Layout>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:20,
    marginBottom: 50
  },
  containerBase:{
    display:"flex",
    flexDirection:"column",
    marginVertical: 20,
    rowGap: 12,
  },
  containerSearch:{
    display:"flex",
    flexDirection:"column",
    // paddingBottom: 450,
    rowGap: 12,
    // backgroundColor: '#8f0b0b',
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
    justifyContent:"flex-start",
    columnGap: 12,
    rowGap: 12,
    flexWrap: 'wrap',
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
    flexDirection:"row",
    flexWrap: 'wrap',
    justifyContent: 'flex-start', // or 'flex-start' based on your design
    alignItems: 'center', // or 'flex-start' based on your design
    width: '100%',
    columnGap: 16,
    rowGap:16,
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },
})