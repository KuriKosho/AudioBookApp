import { View, Text, StyleSheet, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTab from 'components/UI/Tab/BottomTab';
import { ChildInfo, FullTabInfo, TabInfo } from 'data/tabs/BottomTabs';

const screenOptions = {
    tabBarShowLabel: true,
    headerShown: false,
    tabBarActiveTintColor: "#4838D1",
    tabBarInactiveTintColor: "#6A6A8B",
    tabBarOptions:{
      labelStyle: {
        fontSize: 10,
        fontWeight: "500",
        textTransform: "capitalize",
        paddingBottom: 5,
      },
    },
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: "white",
    },
  }; 
  interface TabData {
    tabs: TabInfo;
    subScreen: ChildInfo[];
  }
  const createStack: React.FC<TabData> = ({ tabs, subScreen }) => {
    const SubStack = createNativeStackNavigator();
      return(
        <SubStack.Navigator>
          <SubStack.Screen name={tabs.name} component={tabs.component} options={{headerShown: false}} />
          {subScreen?.map((screen, index) => (
            // <SubStack.Screen key={index} name={screen.childName} component={screen.childComponent} options={{headerShown: screen.childName.includes("SeeMoreScreen") ? true: false,headerTintColor:"#2E2E5D"}}/>
            <SubStack.Screen key={index} name={screen.childName} component={screen.childComponent} options={{headerShown:  false,}}/>
          ))}
        </SubStack.Navigator> 
      )
  }

  const BottomBar: React.FC<FullTabInfo> = ({ tabs,subScreen }) => {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator screenOptions={{
        ...screenOptions,
        tabBarStyle: {
          ...screenOptions.tabBarStyle,
          position: "absolute" as const
        },
        tabBarLabelStyle: {
          ...screenOptions.tabBarOptions.labelStyle 
        } as StyleProp<TextStyle>
      }}>
        {tabs.map((screen, index) => (
          <Tab.Screen
            key={index}
            name={screen.tabName}
            options={({ route }) => ({
              tabBarIcon: ({ focused }) => (
                <BottomTab focus={focused} icon={screen.icon} />
              ),
            })}
          >
            {() => createStack({tabs: screen, subScreen: subScreen})}
          </Tab.Screen>
        ))}
      </Tab.Navigator>
    );
  };

export default BottomBar

const style = StyleSheet.create({
    tabLabel: {
        fontSize: 12,
        fontWeight: "bold",
        textTransform: "capitalize",
        // marginTop: 5,
    },
})

