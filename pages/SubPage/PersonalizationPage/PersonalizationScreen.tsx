import { Dimensions, Image, ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useEffect } from 'react'
import Layout from 'layouts/body/Layout';
import ButtonRefNext from 'components/UI/button/Onboarding/ButtonRefNext';
import ButtonRefPrev from 'components/UI/button/Onboarding/ButtonRefPrev';
// import { useAuthNavigationWithParams } from 'navigation/useAppNavigation';
import InputBox from 'components/UI/input/InputBox';
// import {personalizeData} from './PersonalizationData';
import TextSelectBtn from 'components/UI/button/Personalzation/TextSelectBtn';
import { CategoriesResponse, useCategoryList } from 'services/api/Category/GetCategoryAxios';
import { CategoryDTO, updateCategoryList } from 'services/api/AudioUser/updateCategory';
import { usePersonalNavigator } from 'hook/navigate/usePersonalNavigator';

const {width} = Dimensions.get("window");
const PersonalizationScreen = () => {

  const navi = usePersonalNavigator ();
  const personalizeData: CategoriesResponse[] = useCategoryList(1,1000);
  const [listSelect, setListSelect] = React.useState<CategoryDTO[]>([]);
  const [search, setSearch] = React.useState<string>("")
  const submitHandler = async () =>{
    if (listSelect.length>0){
      const check = await updateCategoryList(listSelect);
      if (check) {
        navi.goToScreen("FinishPersonalizationScreen");
      } else {
        console.log("Button disable")
      }
      // navi.goToScreen("FinishPersonalizationScreen");
    } else {
      console.log("Button disable")
    }
  }
  const skipHandler = () =>{
    console.log("skip");
    navi.goToScreen("FinishPersonalizationScreen");
  }

  const updateListHandler = (id:string | undefined) => {
    if (id!=undefined){
      if (listSelect.map((item) => item.id).includes(id)) {
        const newList = listSelect.filter((item) => item.id !== id);
        setListSelect(newList);
      } else {
        setListSelect([...listSelect, {id:id, name:""}]);
      }
    } else {
      console.log("id is undefined");
    }
  }
  return (
    <Layout>
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={require("../../../assets/pattern/bg1.png")} style={styles.imgSt}/>
      </View>
      <View style={styles.labelContainer}>
        <View style={styles.header}>
          <Text style={[styles.txtOrange, , styles.mb10]}>Personalize Suggestion</Text>
          <Text style={styles.txtNormal}>
          Choose <Text style={styles.txtOrange}>min 3 topic</Text> you like, we will give you more often that relate to it.
          </Text>
        </View>
        <View style={styles.searchContainer}>
          <InputBox placeholder="Search Topic" value={search} setValue={setSearch} keyboardType="default"/>
        </View>
        <View style={styles.scrollContainer}>
          <ScrollView style={styles.scrollSt}>
              <View style={styles.textSelectBtnContainer}>
                {personalizeData.map((item,index) => {
                  return (
                    <TextSelectBtn text={item.name} action={()=> updateListHandler(item.id)} key={index}/>
                  )
                })}
              </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {listSelect&& listSelect.length>0 ?
          <ButtonRefNext data={{text:"Submit", action:submitHandler,width:"100%"}} />
          : 
          <ButtonRefNext data={{text:"Submit", action:submitHandler,width:"100%", disable:true }} />
        }
          <ButtonRefPrev data={{text:"Skip", action:skipHandler,width:"100%"}} />
      </View>

    </View>
  </Layout>
  )
}

export default PersonalizationScreen


const styles = StyleSheet.create({
  container:{
    height:"100%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center",
  },
  imgContainer: {
    width:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  },
  scrollSt:{
    width:"100%",
  },
  scrollContainer:{
    height:230,
    width:"100%",
    marginTop:20,
  },
  labelContainer:{
    paddingHorizontal: 30,
    marginTop: -40,
    display:"flex",
    width:width,
    // height:"100%",
    marginBottom:"5%",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"flex-start",
  },
  searchContainer: {
    display:"flex",
    flexDirection:"row",
    width:"100%",
    marginVertical: 5,
  },
  header:{
    display:"flex",
    flexDirection:"column",
    width:"100%",
    alignItems:"flex-start",
    textAlign:"left",
    marginBottom: 10,
  },
  mb10:{
    marginBottom: 10,
  },
  txtNormal:{
    color:"#2E2E5D",
    fontSize: 14,
    fontWeight: "400",
    textAlign:"left",
  },
  imgSt:{
    width: width,
    height: 250,
    objectFit:"contain",
  },
  buttonContainer:{
    display:"flex",
    flexDirection:"column",
    width:"100%",
    justifyContent:"space-between",
    paddingHorizontal: 30,
    marginBottom: 50,
    rowGap: 14,

  },
  textSelectBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start', // or 'flex-start' based on your design
    alignItems: 'center', // or 'flex-start' based on your design
    width: '100%',
    columnGap: 8,
    rowGap: 8,
  },
  txtOrange: {
    color:"#2E2E5D",
    fontSize: 16,
    fontWeight: "500",
    textAlign:"center",
  },
  title: {
    color:"#4838D1",
    fontSize: 48,
    fontWeight: "100",
    textAlign:"left"
  }
})