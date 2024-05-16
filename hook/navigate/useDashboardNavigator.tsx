import { NavigationProp, useNavigation } from "@react-navigation/native";
import { DashboardStackParamList } from "navigation/navigator/DashboardNavi";

export const useDashboardNavigator = () => {
  const navi = useNavigation<NavigationProp<DashboardStackParamList>>();
  const goToScreenWithParams = (screenName: keyof DashboardStackParamList, params: any) => {
     navi.navigate(screenName, params);
  };
  const goToScreen=( screenName: keyof DashboardStackParamList) => {
    navi.navigate(screenName);
  }
  const goBack = () => {
    navi.goBack();
  }
  const replaceScreen = (screenName: keyof DashboardStackParamList) => {
    navi.reset({
      index: 0,
      routes: [{ name: screenName }],
      });
  }
  return {goToScreenWithParams,goToScreen,goBack,replaceScreen};
}