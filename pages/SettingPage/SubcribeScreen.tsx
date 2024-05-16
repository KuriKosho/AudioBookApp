import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from 'layouts/body/Layout'
import HeaderShown from 'components/Header/HeaderShown'
import { useDashboardNavigator } from 'hook/navigate/useDashboardNavigator'

const SubcribeScreen = () => {
  const navi = useDashboardNavigator();
  return (
    <Layout>
      <HeaderShown name='Subscriptions'/>
      <View style={styles.container}>
        <View>
          <Image source={{uri:"https://jobsgo.vn/blog/wp-content/uploads/2023/01/Premium-nghia-la-gi.jpg"}} style={styles.image} />
        </View>
      </View>
    </Layout>
  )
}

export default SubcribeScreen

const styles = StyleSheet.create({
  container:{
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 20,
    padding: 10,
    height: "100%",
  },
  image:{
    width: 200,
    height: 200
  }
})