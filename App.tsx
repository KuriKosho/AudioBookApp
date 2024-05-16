import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Layout from 'layouts/body/Layout';
import { RootNavigator } from 'navigation/navigator/RootNavi';
// import { RootNavigator } from 'pages/APage/AllScreen/AllScreens';
import SoundTest from 'services/sound/soudtest';
import SoundScreen from 'test/SoundScreen';

export default function App() {
  const MyTheme = {
    dark: false,
    colors: {
      primary: "#DED0B6",
      background: "#fff",
      card: "#fff",
      text: "#F8FAE5",
      border:"#F8FAE5",
      notification: "rgb(255, 69, 58)",
    },
  };
  return (
    <Layout>
        <NavigationContainer theme={MyTheme}>
          <RootNavigator/>
        </NavigationContainer>
        {/* <SoundScreen/> */}
        {/* <SoundTest/> */}
        <StatusBar style="auto" />
    </Layout>
   
  );
}