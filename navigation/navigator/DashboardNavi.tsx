import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailsScreen, HomeScreen, LibraryScreen, ReadBookScreen, SearchScreen, SeeMoreScreen } from "data/pages/DashboardPage";
import {SettingScreen, ProfileScreen, SubcribeScreen, AboutAppScreen} from "pages/SettingPage/SettingPageData";

export type DashboardStackParamList = {
    DetailsScreen: undefined;
    HomeScreen: undefined;
    LibraryScreen: undefined;
    SearchScreen: undefined;
    SeeMoreScreen: undefined;
    ReadBookScreen: undefined;
    ProfileScreen: undefined;
    SettingScreen: undefined;
    SubcribeScreen: undefined;
    AboutAppScreen: undefined;
};

const OnboardingStack = createNativeStackNavigator<DashboardStackParamList>();

export const DashboardNavigator = () => {
    return (
      <OnboardingStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName='HomeScreen'
      >
        <OnboardingStack.Screen name="HomeScreen" component={HomeScreen} />
        <OnboardingStack.Screen name="DetailsScreen" component={DetailsScreen} />
        <OnboardingStack.Screen name="LibraryScreen" component={LibraryScreen} />
        <OnboardingStack.Screen name="SearchScreen" component={SearchScreen} />
        <OnboardingStack.Screen name="SeeMoreScreen" component={SeeMoreScreen} />
        <OnboardingStack.Screen name="ReadBookScreen" component={ReadBookScreen} />
        <OnboardingStack.Screen name='SettingScreen' component={SettingScreen}/>
        <OnboardingStack.Screen name='ProfileScreen' component={ProfileScreen}/>
        <OnboardingStack.Screen name='SubcribeScreen' component={SubcribeScreen}/>
        <OnboardingStack.Screen name='AboutAppScreen' component={AboutAppScreen}/>
      </OnboardingStack.Navigator>
    );
};