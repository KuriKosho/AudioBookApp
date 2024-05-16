import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SafeAreaView style={[styles.container]}>
        {children}
    </SafeAreaView>
  )
};
export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    padding:0,
    margin:0,
  },
})
