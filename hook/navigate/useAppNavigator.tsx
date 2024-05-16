import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "navigation/navigator/RootNavi";

export const useAppNavigator = () => {
  const navi = useNavigation<NavigationProp<RootStackParamList>>();
//   const goToScreenWithParams = (screenName: keyof RootStackParamList, params: any) => {
//      navi.navigate(screenName, params);
//   };
//   const goToScreen=( screenName: keyof RootStackParamList) => {
//     navi.navigate(screenName);
//   }
//   const goBack = () => {
//     navi.goBack();
//   }
  const replaceScreen = (screenName: keyof RootStackParamList) => {
    navi.reset({
      index: 0,
      routes: [{ name: screenName }],
      });
  }
//   return {goToScreenWithParams,goToScreen,goBack,replaceScreen};
  return {replaceScreen};
}