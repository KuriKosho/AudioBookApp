import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {SplashScreen} from "../../data/pages/SplashPage";

export type SplashStackParamList = {
    SplashScreen: undefined;
}

const SplashStack = createNativeStackNavigator<SplashStackParamList>();

export const SplashNavigator = () => {
  return (
    <SplashStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='SplashScreen'
    >
      <SplashStack.Screen name="SplashScreen" component={SplashScreen} />
    </SplashStack.Navigator>
  );
};