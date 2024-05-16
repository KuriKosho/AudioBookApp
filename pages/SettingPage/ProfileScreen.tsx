import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDashboardNavigator } from 'hook/navigate/useDashboardNavigator'
import Layout from 'layouts/body/Layout';
import HeaderShown from 'components/Header/HeaderShown';
import DateTimePicker from '@react-native-community/datetimepicker';
import ButtonRefNext from 'components/UI/button/Onboarding/ButtonRefNext';
import DefaultAvt from 'components/UI/Avatar/DefaultAvt';
import clientService from 'services/client/client.service';
import { UserInfo } from 'services/api/Auth/LoginAxios';
import { updateUserInfo } from 'services/api/AudioUser/updateUserInfo';

const ProfileScreen = () => {
  const navi = useDashboardNavigator();
  const [dob, setDob] = React.useState<Date>(new Date())
  const [txtDob, setTxtDob] = React.useState<string>("")
  const [showPicker, setShowPicker] = React.useState<boolean>(false)

  const [username, setUsername] = React.useState<string>("")
  const [displayName, setDisplayName] = React.useState<string>("")
  const [email, setEmail] = React.useState<string>("")
  const [phone, setPhone] = React.useState<string>("")
  const [disable, setDisable] = React.useState<boolean>(true)
  const [avatar , setAvatar] = React.useState<string>("")
  useEffect(()=>{
    const getData = async () => {
      const user: UserInfo = await clientService.getUserProfile();
        console.log(user);
        setUsername(user.username || '');
        setDisplayName(user.displayName|| '');
        setEmail(user.email|| '');
        setPhone(user.phone|| '');
        setAvatar(user.avatar|| '');
        setTxtDob(user.dob|| '01/01/2002');
      }
    getData();
  },[])
  useEffect(()=>{
    const fetchData = async () => {
      const user: UserInfo = await clientService.getUserProfile();
      if (username !== user.username || displayName !== user.displayName || email !== user.email || phone !== user.phone || txtDob !== user.dob) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    }
    fetchData();
  },[username, displayName, email, phone])
  const saveHander = async () => {
    let id = (await clientService.getUserProfile()).userId;
    if (!id) {
      console.log("User ID not found");
      return false;
    }
    const check = await updateUserInfo({userId: id, displayName: displayName, username:username, email:email, avatar:avatar, phone:phone, dob: txtDob});
    console.log(check);
    if (check){
      await clientService.setUserProfile({userId: id, displayName: displayName, username:username, email:email, avatar:avatar, phone:phone, dob: txtDob});
      setDisable(true);
    }
    
  }
  return (
    <Layout>
      <HeaderShown name='Profile'/>
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {
            avatar ?
            avatar.length==1 ?  
            <DefaultAvt avatar={avatar} size={160} />:
            <Image
              source={{uri:avatar}}
              style={styles.image} />  : <View></View>
          }
           {/* <Image
              source={{uri:"https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/426507460_1773817219769059_7999777760345788956_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7fnFXnSf0OcQ7kNvgF-ue3e&_nc_ht=scontent.fdad1-1.fna&oh=00_AYBZiTiOaoVb7APCaM4Ltp3zEWxhd60XzUe5lVDkHh8E-A&oe=6646B3E4"}}
              style={styles.image} /> */}
          {/* <DefaultAvt avatar=''/> */}
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.sectionContainer}>
            <View style={styles.label}>
              <Text style={styles.txtName}>Display Name</Text>
            </View> 
            <View style={styles.content}>
              <TextInput style={styles.txtShow} value={displayName} onChangeText={(text)=> setDisplayName(text)}></TextInput>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <View style={styles.label}>
              <Text style={styles.txtName}>Username</Text>
            </View>
            <View style={styles.content}>
              <TextInput style={styles.txtShow} value={username} onChangeText={(text)=> setUsername(text)}></TextInput>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <View style={styles.label}>
              <Text style={styles.txtName}>Email</Text>
            </View>
            <View style={styles.content}>
              <TextInput style={styles.txtShow} value={email} onChangeText={(text)=> setEmail(text)}></TextInput>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <View style={styles.label}>
              <Text style={styles.txtName}>Phone</Text>
            </View>
            <View style={styles.content}>
              <TextInput style={styles.txtShow} value={phone} onChangeText={(text)=> setPhone(text)}></TextInput>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <View style={styles.label}>
              <Text style={styles.txtName}>Date Birth</Text>
            </View>
            <View style={styles.content}>
              {showPicker && <DateTimePicker value={dob} mode="date" display="spinner" onChange={(event, selectedDate) => {
                setShowPicker(false)
                if(selectedDate){
                  setDob(selectedDate)
                  setTxtDob(selectedDate.toLocaleDateString())
                } else {
                  setTxtDob("01/01/2000");
                }
              }} />}
              <Text style={styles.txtShow} onPress={()=>setShowPicker(true)}>{txtDob}</Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: 130}}>
          <ButtonRefNext data={{text:"Save", width:'100%', action:saveHander, disable:disable}}/>
        </View>
      </View>
      </ScrollView>

    </Layout>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal:20,
    display:"flex",
    flexDirection:"column",
    // alignItems:"center"
  },
  imageContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    marginVertical:20,
  },
  infoContainer:{
    flex:1,
    display:"flex",
    flexDirection:"column",
    rowGap:20,
    marginVertical:20,
  },
  txtName:{
    color:"#2E2E5D",
    fontSize: 16,
    fontWeight: "600",
  },
  txtShow:{
    color:"#2E2E5D",
    fontSize: 16,
    fontWeight: "400",
  },
  sectionContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
  },
  image:{
    width: 160,
    height: 160,
    borderRadius: 20,
    // marginVertical: 20,
  },
  label:{
    width: 120,
  },
  content:{
    flex:1,
  }
})