import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from 'layouts/body/Layout'

const ScreenTest:React.FC = () => {
  return (
    <Layout>
      <Text style={styles.textColor}>ScreenTest</Text>
    </Layout>
  )
}

export default ScreenTest

const styles = StyleSheet.create({
    container: {
        // width: 100,
        // height:100,
        backgroundColor:"blue"
    },
    textColor: {
        color:"#000000"
    }
})