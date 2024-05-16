import { Animated, Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import OnboardingItem from 'components/Onboarding/OnboardingItem'
import { slide } from './OnBoardingData'
import Layout from 'layouts/body/Layout'
import Paginator from 'components/Onboarding/Paginator'
import ButtonRefNext from 'components/UI/button/Onboarding/ButtonRefNext'
import ButtonRefPrev from 'components/UI/button/Onboarding/ButtonRefPrev'
import { useAppNavigation, useAuthNavigation } from 'navigation/useAppNavigation'
import { StackActions } from '@react-navigation/native'
import { useAppNavigator } from 'hook/navigate/useAppNavigator'

const {width} = Dimensions.get("window")

const OnBoardingScreen = () => {
  // const navi = useAuthNavigation();
  const navi = useAppNavigator()
  const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const viewableItemsChanged = useRef(({ viewableItems }: any) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
    const slideRef = useRef<FlatList>(null);
    
    const scrollTo = () => {
      if (slideRef.current) {
        if (currentIndex < slide.length - 1) {
          slideRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
          console.log("Last slide");
        }
      }
    }

    const scrollBack = () => {
      if (slideRef.current) {
        if (currentIndex >=1) {
          slideRef.current.scrollToIndex({ index: currentIndex - 1 });
        } else {
          console.log("Start slide");
        }
      }
    }
    const lastBtnHandler = () => {
      // navi.dispatch(
      //   StackActions.replace("LoginObjectScreen")
      // )
      navi.replaceScreen("AuthObjectScreen")
    }
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={require("../../../assets/pattern/bg1.png")} style={styles.imgSt}/>
        </View>
        <View style={{flex: 3}}>
          <FlatList 
                data={slide} 
                renderItem={({item})=> <OnboardingItem slideData={item}/>} 
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                bounces={false}
                horizontal
                keyExtractor={(item)=> item.id.toString()}
                onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: false})}
                onViewableItemsChanged={viewableItemsChanged}
                scrollEventThrottle={32}
                viewabilityConfig={viewConfig}
                ref={slideRef}
                />
        </View>
        <View>
          <Paginator data={{slide:slide,scrollX:scrollX}}/>
        </View>
        <View style={styles.buttonContainer}>
          {currentIndex!=slide.length-1 ? 
        <>
          <ButtonRefPrev data={{text:"Previous", action:scrollBack, width:"auto"}} />
          <ButtonRefNext data={{text:"Next", action:scrollTo,width:"auto"}} />
        </>  :
          <ButtonRefNext data={{text:"Lets Get Started", action:lastBtnHandler,width:"auto"}} />
        }
        </View>
      </View>
    </Layout>
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
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
  imgSt:{
    width: width,
    height: 250,
    objectFit:"contain",
  },
  buttonContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal: 40,
    marginBottom: 50,
    columnGap: 20,
  }
})