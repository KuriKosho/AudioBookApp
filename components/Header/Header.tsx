import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MainLogo from 'components/UI/Logo/MainLogo'
import DynamicIcon from 'components/UI/Icon/DynamicIcon'
import { handleLogout } from 'services/client/clientService'
import { StackActions } from '@react-navigation/native'
import { useAppNavigator } from 'hook/navigate/useAppNavigator'
import { useDashboardNavigator } from 'hook/navigate/useDashboardNavigator'

const Header = () => {
  // const navigation = useAppNavigation();
  const navi = useDashboardNavigator();
  const settingHandler = () => {
    console.log("Setting");
    // handleLogout();
    // navigation.dispatch(StackActions.replace("LoginObjectScreen"));
    // navi.replaceScreen("AuthObjectScreen");
    navi.goToScreen("SettingScreen")
    // navigation.navigate("LoginObjectScreen",{
      // screen: "PersonalizationScreen"
    // })
  }
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <MainLogo size={40}/>
        <Text style={styles.audiTxt}>Audi</Text>
        <Text style={styles.bookTxt}>Book</Text>
        <Text style={styles.dotTxt}>.</Text>
      </View>
      {/* <View>
        <TouchableOpacity onPress={settingHandler}>
          <DynamicIcon color='#4838D1' library='AntDesign' name='setting' size={30}/>
        </TouchableOpacity>
      </View> */}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    logoContainer:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    audiTxt:{
        fontSize: 20,
        color: "#4838D1",
        fontWeight: "900",
    },
    bookTxt:{
        fontSize: 20,
        color: "#4838D1",
        fontWeight: "500",
    },
    dotTxt:{
        fontSize: 25,
        color: "#F77A55",
        fontWeight: "700",
    }

})