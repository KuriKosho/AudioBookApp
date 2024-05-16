import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from "navigation/navigator/AuthenticateNavi";

export const useAuthNavigator = () => {
  const navi = useNavigation<NavigationProp<AuthStackParamList>>();
  const goToScreenWithParams = (screenName: keyof AuthStackParamList, params: any) => {
     navi.navigate(screenName, params);
  };
  const goToScreen=( screenName: keyof AuthStackParamList) => {
    navi.navigate(screenName);
  }
  const goBack = () => {
    navi.goBack();
  }
  const replaceScreen = (screenName: keyof AuthStackParamList) => {
    navi.reset({
      index: 0,
      routes: [{ name: screenName }],
      });
  }
  return {goToScreenWithParams,goToScreen,goBack,replaceScreen};
}