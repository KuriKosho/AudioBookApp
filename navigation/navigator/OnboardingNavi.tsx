import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {OnBoardingScreen} from "../../data/pages/OnboardingPage";

export type OnboardingStackParamList = {
    OnboardingScreen: undefined;
};

const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();

export const OnboardingNavigator = () => {
    return (
      <OnboardingStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName='OnboardingScreen'
      >
        <OnboardingStack.Screen name="OnboardingScreen" component={OnBoardingScreen} />
      </OnboardingStack.Navigator>
    );
  };