import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashNavigator, SplashStackParamList } from "./SplashNavi";
import { OnboardingNavigator, OnboardingStackParamList } from "./OnboardingNavi";
import { AuthNavigator, AuthStackParamList } from "./AuthenticateNavi";
import { DashboardNavigator, DashboardStackParamList } from "./DashboardNavi";
import BottomTabNavigator, { TabStackParamList } from "./BottomTabNavi";
import { PersonalizationParamList, PersonalNavi } from "./PersonalNavi";
// import { SettingNavigator, SettingParamList } from "./SetttingNavi";


export type RootStackParamList = {
    SplashObjectScreen:NavigatorScreenParams<SplashStackParamList>;
    OnboardingObjectScreen: NavigatorScreenParams<OnboardingStackParamList>;
    AuthObjectScreen: NavigatorScreenParams<AuthStackParamList>;
    DashboardObjectScreen: NavigatorScreenParams<DashboardStackParamList>;
    BottomTabObjectScreen: NavigatorScreenParams<TabStackParamList>;
    PersonalObjectScreen:NavigatorScreenParams<PersonalizationParamList>;
    // SettingObjectScreen: NavigatorScreenParams<SettingParamList>;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();
export const RootNavigator = () => {
    return (
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName='SplashObjectScreen'
        // initialRouteName='DashboardObjectScreen'
        // initialRouteName="BottomTabObjectScreen"
      >
        <RootStack.Screen name='SplashObjectScreen' component={SplashNavigator}/>
        <RootStack.Screen name="OnboardingObjectScreen" component={OnboardingNavigator} />
        <RootStack.Screen name='AuthObjectScreen' component={AuthNavigator}/>
        <RootStack.Screen name='PersonalObjectScreen' component={PersonalNavi}/>
        <RootStack.Screen name='DashboardObjectScreen' component={DashboardNavigator}/>
        <RootStack.Screen name='BottomTabObjectScreen' component={BottomTabNavigator}/>
        {/* <RootStack.Screen name='SettingObjectScreen' component={SettingNavigator}/> */}
      </RootStack.Navigator>
    );
  };