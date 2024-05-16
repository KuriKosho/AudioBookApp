// import { StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { NavigationContainer } from '@react-navigation/native';
// import SubScreen from '../SubScreen/SubScreen';
// // import MainScreen from '../MainScreen/MainScreen';
// import ScreenTest from 'test/ScreenTest';
// import { NavigatorScreenParams } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import SplashScreen from 'pages/SplashPage/SplashScreen';
// import { ConfirmOTPScreen, EmailSentScreen, FinishPersonalizationScreen, ForgetPasswordScreen, LoginScreen, PersonalizationScreen, RegisterScreen, WelcomeScreen } from '../SubScreen/SubScreenData';
// import OnBoardingScreen from 'pages/SubPage/OnBoardingPage/OnBoardingScreen';
// import {SettingScreen, ProfileScreen, SubcribeScreen} from 'pages/SettingPage/SettingPageData';


// export type RootStackParamList = {
//   SplashObjectScreen:NavigatorScreenParams<SplashStackParamList>;
//   OnboardingObjectScreen: NavigatorScreenParams<OnboardingStackParamList>;
//   LoginObjectScreen: NavigatorScreenParams<LoginStackParamList>;
//   MainObjectScreen: NavigatorScreenParams<MainStackParamList>;
// };
// export type SplashStackParamList = {
//   SplashScreen: undefined;
// }
// export type OnboardingStackParamList = {
//   OnboardingScreen: undefined;
// };
// export type LoginStackParamList = {
//   LoginScreen: undefined;
//   RegisterScreen: undefined;
//   ForgetPasswordScreen: undefined;
//   WelcomeScreen: undefined;
//   PersonalizationScreen: undefined;
//   FinishPersonalizationScreen: undefined;
//   ConfirmOTPScreen: undefined;
//   EmailSentScreen: undefined;
// };
// export type SettingStackParamList = {
//   ProfileScreen: undefined;
//   SettingScreen: undefined;
//   SubscribeScreen:  undefined;
// }

// export type MainStackParamList = {
//   MainScreen: undefined;
// };

// const SplashStack = createNativeStackNavigator<SplashStackParamList>();
// const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();
// const MainStack = createNativeStackNavigator<MainStackParamList>();
// const RootStack = createNativeStackNavigator<RootStackParamList>();
// const LoginStack = createNativeStackNavigator<LoginStackParamList>();
// const SettingStack = createNativeStackNavigator<SettingStackParamList>();

// const SplashNavigator = () => {
//   return (
//     <SplashStack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//       initialRouteName='SplashScreen'
//     >
//       <SplashStack.Screen name="SplashScreen" component={SplashScreen} />
//     </SplashStack.Navigator>
//   );
// };
// const OnboardingNavigator = () => {
//   return (
//     <OnboardingStack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//       initialRouteName='OnboardingScreen'
//     >
//       <OnboardingStack.Screen name="OnboardingScreen" component={OnBoardingScreen} />
//     </OnboardingStack.Navigator>
//   );
// };
// const LoginNavigator = () => {
//   return (
//     <LoginStack.Navigator
//     screenOptions={{
//       headerShown: false,
//     }}
//     initialRouteName='LoginScreen'
//   >
//     <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
//     <LoginStack.Screen name="RegisterScreen" component={RegisterScreen} />
//     <LoginStack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
//     <LoginStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
//     <LoginStack.Screen name="PersonalizationScreen" component={PersonalizationScreen} />
//     <LoginStack.Screen name='FinishPersonalizationScreen' component={FinishPersonalizationScreen}/>
//     <LoginStack.Screen name='ConfirmOTPScreen' component={ConfirmOTPScreen}/>
//     <LoginStack.Screen name='EmailSentScreen' component={EmailSentScreen}/>
//   </LoginStack.Navigator>
//   )
// }
// const SettingNavigator = () => {
//   return (
//     <SettingStack.Navigator
//     screenOptions={{
//       headerShown: false,
//     }}
//     initialRouteName='SettingScreen'
//   >
//     <SettingStack.Screen name="SettingScreen" component={SettingScreen} />
//     <SettingStack.Screen name="ProfileScreen" component={ProfileScreen} />
//     <SettingStack.Screen name="SubscribeScreen" component={SubcribeScreen} />
//   </SettingStack.Navigator>
//   )

// }
// const MainNavigator = () => {
//   return (
//     <MainStack.Navigator
//     screenOptions={{
//       headerShown: false,
//     }}
//     initialRouteName='MainScreen'
//   >
//     <MainStack.Screen name="MainScreen" component={MainScreen} />
//   </MainStack.Navigator>
//   )
// }

// export const RootNavigator = () => {
//   return (
//     <RootStack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//       // initialRouteName='SplashObjectScreen'
//       initialRouteName='MainObjectScreen'
//     >
//       <RootStack.Screen name='SplashObjectScreen' component={SplashNavigator}/>
//       <RootStack.Screen name='LoginObjectScreen' component={LoginNavigator}/>
//       <RootStack.Screen name="OnboardingObjectScreen" component={OnboardingNavigator} />
//       <RootStack.Screen name='MainObjectScreen' component={MainNavigator}/>
//     </RootStack.Navigator>
//   );
// };