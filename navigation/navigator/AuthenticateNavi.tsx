import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthContext from "hook/context/AuthContext";
import {LoginScreen,RegisterScreen,ForgetPasswordScreen, ConfirmOTPScreen,EmailSentScreen} from "../../data/pages/AuthenPage";

export type AuthStackParamList = {
    LoginScreen: undefined;
    RegisterScreen: undefined;
    ForgetPasswordScreen: undefined;
    ConfirmOTPScreen: undefined;
    EmailSentScreen: undefined;
}

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
    return (
      <AuthContext>
          <AuthStack.Navigator screenOptions={{headerShown:false}} initialRouteName='LoginScreen'>
              <AuthStack.Screen name='LoginScreen' component={LoginScreen}/>
              <AuthStack.Screen name='RegisterScreen' component={RegisterScreen}/>
              <AuthStack.Screen name='ConfirmOTPScreen' component={ConfirmOTPScreen}/>
              <AuthStack.Screen name='ForgetPasswordScreen' component={ForgetPasswordScreen}/>
              <AuthStack.Screen name='EmailSentScreen' component={EmailSentScreen}/>
          </AuthStack.Navigator>
      </AuthContext>
    )
  }
  

