import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigatorScreenParams } from '@react-navigation/native';
import { TabScreenData } from 'data/tabs/BottomTabs';
import { DetailsScreen, ReadBookScreen, SeeMoreScreen } from 'data/pages/DashboardPage';
import BottomBar from 'layouts/bottombar/BottomBar';

export type TabStackParamList = {
  BottomBarTab: NavigatorScreenParams<TabStackScreenList>;
  // SeeMoreScreen: undefined;
  // DetailsScreen: undefined;
  // ReadBookScreen: undefined;
}
export type TabStackScreenList = {
  tabHome: undefined;
  tabSearch: undefined;
  tabLibrary: undefined;
}
const Stack = createNativeStackNavigator<TabStackParamList>();

const BottomTabNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='BottomBarTab'>
      <Stack.Screen name='BottomBarTab'>
        {/* {() => <BottomBar key={1} tabScreens={TabScreenData}/>} */}
        {() => <BottomBar key={1} tabs={TabScreenData.tabs} subScreen={TabScreenData.subScreen}/>}
      </Stack.Screen>
      {/* <Stack.Screen name='SeeMoreScreen' component={SeeMoreScreen}/>
      <Stack.Screen name='DetailsScreen' component={DetailsScreen}/>
      <Stack.Screen name='ReadBookScreen' component={ReadBookScreen}/> */}
    </Stack.Navigator>
  )
}

export default BottomTabNavigator
