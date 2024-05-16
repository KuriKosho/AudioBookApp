// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {LoginScreen,RegisterScreen,ForgetPasswordScreen,WelcomeScreen,PersonalizationScreen, ConfirmOTPScreen} from "./SubScreenData"
// import AuthContext from 'hook/context/AuthContext';
// import { NavigatorScreenParams } from '@react-navigation/native';
// import EmailSentScreen from 'pages/SubPage/AuthenticatePage/EmailSentScreen';
// import FinishPersonalizationScreen from 'pages/SubPage/PersonalizationPage/FinishPersonalizationScreen';


// export type AuthStackParamList = {
//     AuthScreen: NavigatorScreenParams<AuthStackScreenList>;
// }
// export type AuthStackScreenList = {
//     OnBoardingScreen: undefined;
//     LoginScreen: undefined;
//     RegisterScreen: undefined;
//     ForgetPasswordScreen: undefined;
//     WelcomeScreen: undefined;
//     PersonalizationScreen: undefined;
//     FinishPersonalizationScreen: undefined;
//     ConfirmOTPScreen: undefined;
//     EmailSentScreen: undefined;
// }
// const Stack = createNativeStackNavigator<AuthStackScreenList>();
// const SubScreen = () => {
//   return (
//     <AuthContext>
//         <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='OnBoardingScreen'>
//             {/* <Stack.Screen name='OnBoardingScreen' component={OnBoardingScreen}/> */}
//             <Stack.Screen name='LoginScreen' component={LoginScreen}/>
//             <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
//             <Stack.Screen name='ConfirmOTPScreen' component={ConfirmOTPScreen}/>
//             <Stack.Screen name='ForgetPasswordScreen' component={ForgetPasswordScreen}/>
//             <Stack.Screen name='EmailSentScreen' component={EmailSentScreen}/>
//             <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
//             <Stack.Screen name='PersonalizationScreen' component={PersonalizationScreen}/>
//             <Stack.Screen name='FinishPersonalizationScreen' component={FinishPersonalizationScreen}/>
//         </Stack.Navigator>
//     </AuthContext>
//   )
// }

// export default SubScreen
