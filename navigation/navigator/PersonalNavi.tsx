import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {WelcomeScreen,PersonalizationScreen, FinishPersonalizationScreen} from "../../data/pages/PersonalizationPage";

export type PersonalizationParamList = {
    WelcomeScreen: undefined;
    PersonalizationScreen: undefined;
    FinishPersonalizationScreen: undefined;
}

const PersonalStack = createNativeStackNavigator<PersonalizationParamList>();

export const PersonalNavi = () => {
    return (
          <PersonalStack.Navigator screenOptions={{headerShown:false}} initialRouteName='WelcomeScreen'>
              <PersonalStack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
              <PersonalStack.Screen name='PersonalizationScreen' component={PersonalizationScreen}/>
              <PersonalStack.Screen name='FinishPersonalizationScreen' component={FinishPersonalizationScreen}/>
          </PersonalStack.Navigator>
    )
  }
  

