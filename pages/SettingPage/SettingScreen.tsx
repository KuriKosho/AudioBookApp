import { Image,Pressable,StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Layout from 'layouts/body/Layout'
import { useDashboardNavigator } from 'hook/navigate/useDashboardNavigator'
import { Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DynamicIcon from 'components/UI/Icon/DynamicIcon';
import ButtonWithIcon from 'components/UI/button/ButtonWithIcon';
import LogoutButton from 'components/UI/button/LogoutButton';
import { handleLogout } from 'services/client/clientService';
import { useAppNavigator } from 'hook/navigate/useAppNavigator';
import { UserInfo } from 'services/api/Auth/LoginAxios';
import clientService from 'services/client/client.service';
import DefaultAvt from 'components/UI/Avatar/DefaultAvt';

const SettingScreen = () => {
  const navi = useDashboardNavigator();
  const nav = useAppNavigator();
  const [isNotification, setIsNotification] = React.useState<boolean>(true);
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState<string>("vn");
  const [username, setUsername] = React.useState<string>("");
  const [avatar, setAvatar] = React.useState<string>("");
  useEffect(() => {
    const getData = async () => {
      const user: UserInfo = await clientService.getUserProfile();
      if (user.username && user.avatar) {
        setUsername(user.username);
        setAvatar(user.avatar);
      } else {
        setUsername("null");
        setAvatar("null");
      }
    }
    getData();
  },[username,avatar])
  const logoutHandler = async()=>{
    if (await handleLogout()==true){  
      nav.replaceScreen("AuthObjectScreen");
    }
    console.log("Logout");
  }
  return (
    <Layout>
      <View style={styles.container}>
        <View>
          <Text style={styles.headerTxt}>Setting</Text>
        </View>
        <View style={styles.profileContainer} >
          <View>
            {
              avatar ?
              avatar.length===1 ?  
              <DefaultAvt avatar={avatar} size={75} />
            :
              <Image
                source={{uri:avatar}}
                style={styles.image} /> 
            : 
              <View></View>
            }
            {/* <Image
              source={{uri:"https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/426507460_1773817219769059_7999777760345788956_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7fnFXnSf0OcQ7kNvgF-ue3e&_nc_ht=scontent.fdad1-1.fna&oh=00_AYBZiTiOaoVb7APCaM4Ltp3zEWxhd60XzUe5lVDkHh8E-A&oe=6646B3E4"}}
              style={styles.image} />*/}
          </View> 
          <View>
            <Text style={styles.txtName}>{username ? username : "null"}</Text>
            <Text style={styles.txtViewProfile} onPress={()=> navi.goToScreen("ProfileScreen")}>View Profile</Text>
          </View>
        </View>
        <View style={styles.systemContainer}>
          <Text style={styles.txtHeader}>System</Text>
          <View style={styles.menuContainer}>
            <View style={[styles.menuItem, styles.boderBottom]}>
              <Text style={styles.txtMenu}>Notification</Text>
              <Switch
                value={isNotification}
                onValueChange={(value) => setIsNotification(value)}
              />
            </View>
            <View style={[styles.menuItem, styles.boderBottom]}>
              <Text style={styles.txtMenu}>Language</Text>
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
              >
                <Picker.Item label="English" value="en" />
                <Picker.Item label="Vietnamese" value="vn" />
                <Picker.Item label="Spanish" value="es" />
                <Picker.Item label="French" value="fr" />
              </Picker>
            </View>
            <View style={styles.menuItem}>
              <Text style={styles.txtMenu}>Dark Mode</Text>
              <Switch
                value={isDarkMode}
                onValueChange={(value) => setIsDarkMode(value)}
              />
            </View>
          </View>
        </View>
        <View style={styles.systemContainer}>
          <Text style={styles.txtHeader}>Audio Book App</Text>
          <View style={styles.menuContainer}>
            <Pressable style={[styles.menuItem, styles.boderBottom, {paddingVertical: 20}]} onPress={()=> navi.goToScreen("SubcribeScreen")}>
              <Text style={styles.txtMenu}>Subscription</Text>
              <DynamicIcon color='#848484' library='AntDesign' name='right' size={20} />
            </Pressable>
            <View style={[styles.menuItem, styles.boderBottom, {paddingVertical: 20}]}>
              <Text style={styles.txtMenu}>Linked Account</Text>
              <DynamicIcon color='#848484' library='AntDesign' name='right' size={20} />
            </View>
            <View style={styles.menuItem}>
              <Text style={styles.txtMenu}>About Audibooks</Text>
              <DynamicIcon color='#848484' library='AntDesign' name='right' size={20} />
            </View>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <LogoutButton data={{text:"Logout", width:"100%",action:logoutHandler}}/>
        </View>
      </View>
          
    </Layout>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 20,
    padding: 10,
    height: "100%",
    backgroundColor: "#F7F8F9"
  },
  headerTxt:{
    color:"#2E2E5D",
    fontSize: 18,
    fontWeight: "600",
    textAlign:"center"
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: 24,
    alignItems: "center",
    marginTop: 20,
    // backgroundColor: "#FFFFFF",
  },
  systemContainer: {
    display: "flex",
    flexDirection: "column",
    columnGap: 24,
    marginTop: 20,
    // backgroundColor: "#FFFFFF",
  },
  menuContainer:{
    display: "flex",
    flexDirection: "column",
    columnGap: 24,
    marginVertical: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
  },
  menuItem:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  boderBottom:{
    borderBottomWidth: 1,
    borderBottomColor: "#F7F8F9",
  },
  txtMenu:{
    fontSize: 16,
    fontWeight: "500",
    color: "#2E2E5D",
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  txtName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2E2E5D",
  },
  txtViewProfile: {
    fontSize: 14,
    color: "#4838D1",
  },
  txtHeader:{
    fontSize: 15,
    fontWeight: "600",
    color: "#515151",
  },

})