// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { DetailsScreen, TabInfo, TabScreenData } from './MainScreenData'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import BottomBar from 'layouts/bottombar/BottomBar';
// import { NavigatorScreenParams } from '@react-navigation/native';

// export type TabStackParamList = {
//   BottomBar: NavigatorScreenParams<TabStackScreenList>;
// }
// export type TabStackScreenList = {
//   tabHome: undefined;
//   tabSearch: undefined;
//   tabLibrary: undefined;
// }
// // Home tab
// export type HomeStackParamList = {
//   HomeStack: NavigatorScreenParams<HomeStackScreenList>;
// }
// export type HomeStackScreenList = {
//   HomeScreen: undefined;
//   DetailsScreen: undefined;
//   SeeMoreScreen: undefined;
//   ReadBookScreen: undefined;
// }

// const MainScreen = () => {
//   const Stack = createNativeStackNavigator();

//   return (
//     <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='BottomBar'>
//       <Stack.Screen name='BottomBar'>
//         {() => <BottomBar key={1} tabScreens={TabScreenData}/>}
//       </Stack.Screen>
//     </Stack.Navigator>
//   )
// }

// export default MainScreen
