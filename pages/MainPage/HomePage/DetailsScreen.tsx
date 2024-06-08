import { Animated, Button, Dimensions, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import Layout from 'layouts/body/Layout';
import Loading from 'pages/LoadingPage/LoadingScreen';
import HeaderShown from 'components/Header/HeaderShown';
import useGetBookById, { bookDetailsResponse, Reviewers } from 'services/api/AudioBook/useGetBookById';
import NumberStart from 'components/HomeScreen/NumberStart';
import TextCategory from 'components/UI/text/TextCategory';
import ButtonRefNext from 'components/UI/button/Onboarding/ButtonRefNext';
import ButtonWithIcon from 'components/UI/button/ButtonWithIcon';
import { ReviewerData } from './Data/ReviewerData';
import Reviewer from 'components/DetailScreen/ReviewerDoc';
import ReviewerDoc from 'components/DetailScreen/ReviewerDoc';
import NumberStartWithSelect from 'components/DetailScreen/NumberStarWithSelect';
import ButtonRefPrev from 'components/UI/button/Onboarding/ButtonRefPrev';
import { postReview, ReviewDTO } from 'services/api/AudioUser/reviewBook';
// import playSound from 'services/api/SoundService/Sound';
import { Audio } from 'expo-av';
import { useDashboardNavigator } from 'hook/navigate/useDashboardNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DynamicIcon from 'components/UI/Icon/DynamicIcon';
import { useLibraryBook } from 'services/api/AudioUser/useLibrary';


const {width} = Dimensions.get('window');

const DetailsScreen = () => {
  const route = useRoute();
  const navi = useDashboardNavigator();
  const {addBook,deleteBook} = useLibraryBook();
  const {id,bookName,authorName} = route.params as {id:string | undefined,bookName:string | undefined,authorName:string| undefined};
  const [loading, setLoading] = React.useState<boolean>(false);
  const detailBook:bookDetailsResponse = useGetBookById(id);
  const [selectedStar, setSelectedStar] = React.useState<number>(0);
  const [content, setContent] = React.useState<string>('');
  const [disable, setDisable] = React.useState<boolean>(false);

  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState<number>(0);
  const [reviewer1, setReviewer1] = React.useState<Reviewers>();
  const [submitDisable, setSubmitDisable] = React.useState<boolean>(true);

  // Add to saved
  const [isAdd, setIsAdd] = React.useState<boolean>(false);

  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         (sound as Audio.Sound).unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

  // const loadAudio = async () => {
  //   const { sound } = await Audio.Sound.createAsync(
  //     { uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  //     { shouldPlay: isPlaying }
  //   );
  //   sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
  //   setSound(sound);
  // };

  // const onPlaybackStatusUpdate = (status: Audio.PlaybackStatus) => {
  //   setProgress(status.positionMillis / status.durationMillis);
  // };

  // const playAudio = async () => {
  //   await loadAudio();
  //   setIsPlaying(true);
  // };

  // const pauseAudio = async () => {
  //   if (sound) {
  //     await sound.pauseAsync();
  //     setIsPlaying(false);
  //   }
  // };

  // const stopAudio = async () => {
  //   if (sound) {
  //     await sound.stopAsync();
  //     setIsPlaying(false);
  //   }
  // };
  // const resumeAudio = async () => {
  //   if (sound) {
  //     await sound.playAsync();
  //     setIsPlaying(true);
  //   } else {
  //     await playAudio();
  //   }
  // };

  const selectStar = (number:number) => {
    console.log(number);
    setSelectedStar(number);
  }
  const readBook = () => {
    navi.goToScreenWithParams("ReadBookScreen",{
      bookId:id,
      bookName:bookName,
    })
    console.log("Read book");
  }
  const playAudio = async () => {
    console.log("Play audio");
  }
  
  const submitReview = async () => {
    try {
      const check = await postReview({bookId:id,numberStar:selectedStar,review:content});
      if (check) {
        // console.log("Review posted successfully");
        let avtUrl = await AsyncStorage.getItem("avatar");
        let newReview:Reviewers = {
          numberStar:selectedStar,
          reviewContent:content,
          reviewDate: new Date().toISOString(),
          reviewerAvatar: avtUrl || "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
          reviewerName: "You",
        }
        setReviewer1(newReview);
        setSubmitDisable(true);
      }
    } catch (error) {
      console.log(error);
    }
    setDisable(!disable);
  }
  const editReview = () => {
    setDisable(false);
    setSubmitDisable(false);
  }
  useEffect(() => {
    if (content && selectedStar) {
      setSubmitDisable(false);
    } else {
      setSubmitDisable(true);
    }
  },[content,selectedStar])
  const saveBookHandler = async () => {
    if (isAdd) {
      id && deleteBook(id);
    } else {
      id && addBook(id);
    }
    setIsAdd(!isAdd);
  }

  return (
    <Layout>
      {loading ?? <Loading/>}
      <View>
        <HeaderShown name={bookName || ''} key={id}/>
      </View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
        <View style={styles.bodyContaner}>
          <View style={styles.bookFlexCenter}>
            <Image source={{uri:detailBook.imgUrl}} style={styles.imgSt} />
          </View>
          <View style={styles.bookDetailsContainer}>
            <View style={[styles.flexRowFix]}>
              <View style={styles.flexColumn}>
                <View>
                  <Text style={styles.bookTittle}>{bookName}</Text>
                </View>
                <View>
                  <Text style={styles.bookAuthor}>{authorName}</Text>
                </View>
              </View>
              <Pressable onPress={()=> saveBookHandler()}>
                {isAdd ? <DynamicIcon name="bookmark-added" color='#1225b4' library='MaterialIcons' size={30}/> : <DynamicIcon name="bookmark-add" color='#1225b4' library='MaterialIcons' size={30}/>}
              </Pressable>
            </View>
            <View style={styles.bookFlexStart}>
              <NumberStart number={detailBook.numberStar} size={26}/>
              <Text style={styles.txtStar}>{detailBook.numberStar}.0</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={[styles.bookFlexStart, {columnGap: 8}]}>
              {detailBook.categories?.map((category,index) => {
                return (
                  <TextCategory key={index} category={category}/>
                )
              })}
            </View>
            </ScrollView>
            <View style={styles.flexRow}>
              <View style={styles.btnSt}>
                <ButtonWithIcon action={() => playAudio()} size="auto" text="Play Audio" type="main" icon={{library:"AntDesign",name:"play"}}/>
              </View>
              <View style={styles.btnSt}>
                <ButtonWithIcon action={() => readBook()} size="auto" text="Read book" type="sub" icon={{library:"AntDesign",name:"book"}}/>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.txtSumary}>Sumary</Text>
            {detailBook.summary?.map((sumary,index) => {
              return (
                <Text key={index} style={styles.txtSubSumary}>{sumary}</Text>
              )
            })}
          </View>
          <View>
            <View style={[styles.flexRow]}>
              <View>
                <Text style={styles.txtSumary}>Review</Text>
              </View>
              <View>
                <Text style={styles.txtSubSumary}>{detailBook.numberReview} reviewers</Text>
              </View>
            </View>
            <View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.flexRow}>
                  {detailBook.reviews?.map((reviewer,index) => {
                    return (
                      <ReviewerDoc key={index} reviewer={reviewer} />
                    )
                  })}
                  {reviewer1 ? <ReviewerDoc reviewer={reviewer1} /> : null}
                </View>
              </ScrollView>
            </View>
          </View>
          <View>
            <View style={[styles.flexRow]}>
              <View>
                <Text style={styles.txtSumary}>Write your review</Text>
              </View>
              <View>
                <NumberStartWithSelect key={1} number={selectedStar} size={20} selectStar={selectStar}/>
              </View>
            </View>
            <View>
              <View>
                <TextInput
                  style={styles.commentInput}
                  placeholder="Write your review..."
                  multiline={true}
                  numberOfLines={4}
                  onChangeText={(text) => {
                    setContent(text);
                  }}
                  value={content}
                  editable={!disable}
                />
                <View style={styles.btnContainer}>
                  <ButtonRefPrev data={{text:"Edit",width:"auto",action:editReview}}/>
                  <ButtonRefNext data={{text:"Submit",width:"auto",action:submitReview, disable:submitDisable}}/>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Layout>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:20,
    marginBottom: 50,
  },
  flexColumn:{
    display: 'flex',
    flexDirection: 'column',
  },
  flexRowFix: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexRow:{
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: 20,
    marginTop: 20,
  },
  btnSt:{
    flex: 1,
  },
  bodyContaner: {
    marginTop: 20,
    marginBottom: 20,
    rowGap: 20,
    display: 'flex',
    flexDirection: "column",
    justifyContent:"flex-start",
    // alignItems: 'center',
  },
  bookDetailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    rowGap: 10,
  },
  bookFlexCenter:{
    flex:1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  bookFlexStart:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'left',
  },
  imgSt:{
    width: width*0.8,
    height: width*0.8,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  bookTittle: {
    color:"#010104",
    fontSize: 20,
    fontWeight: 'bold',
  },
  bookAuthor:{
    color:"#9292A2",
    fontSize: 16,
    fontWeight: '500',
  },
  txtStar:{
    color:"#9292A2",
    fontSize: 25,
    fontWeight: '300',
    marginHorizontal: 10,
  },
  txtSumary:{
    color:"#2E2E5D",
    fontSize: 16,
    fontWeight: '500',
  },
  txtSubSumary:{
    color:"#6A6A8B",
    fontSize: 14,
    fontWeight: '400',
    marginVertical: 5,
    textAlign: 'justify',
  },
  commentInput:{
    width: '100%',
    height: 80,
    borderRadius: 12,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  btnContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: 10,
  }
})