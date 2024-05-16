import { NavigationProp, useNavigation } from "@react-navigation/native";
import { PersonalizationParamList } from "navigation/navigator/PersonalNavi";

export const usePersonalNavigator = () => {
  const navi = useNavigation<NavigationProp<PersonalizationParamList>>();
  const goToScreenWithParams = (screenName: keyof PersonalizationParamList, params: any) => {
     navi.navigate(screenName, params);
  };
  const goToScreen=( screenName: keyof PersonalizationParamList) => {
    navi.navigate(screenName);
  }
  const goBack = () => {
    navi.goBack();
  }
  const replaceScreen = (screenName: keyof PersonalizationParamList) => {
    navi.reset({
      index: 0,
      routes: [{ name: screenName }],
      });
  }
  return {goToScreenWithParams,goToScreen,goBack,replaceScreen};
}