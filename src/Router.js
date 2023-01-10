import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from './assets/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import DigitusLogo from './assets/DigitusLogos/digitus.png';

import Welcome from './pages/Welcome';
import DashBoard from './pages/DashBoard';
import Other from './pages/Other';
import Notification from './pages/Notification';
import Me from './pages/Me';
import Read from './pages/Read';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name='TabNavigatorPage' component={TabPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const TabPage = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false, }}>
      <Tab.Screen name='Dashboard' component={DashBoard} options={{
        tabBarActiveBackgroundColor: Colors.tabbarActiveBackgroundColor,
        tabBarInactiveBackgroundColor: Colors.white,
        headerLeft: () => {
          return (
            <Pressable style={{ padding: 10 }}>
              <Icon name='search-outline' size={25} color={Colors.dashboardHeaderIconColor} />
            </Pressable>
          )
        },
        headerRight: () => {
          return (
            <Pressable style={{ padding: 10 }}>
              <IconFeather name='user' size={25} color={Colors.dashboardHeaderIconColor} />
            </Pressable>
          )
        },
        tabBarIcon: ({ focused }) => {
          if (focused) {
            return (<Icon name='home' size={20} color={Colors.black} />)
          } else {
            return (<Icon name='home-outline' size={20} color={Colors.black} />)
          }
        },
        headerTitle: '',
        headerBackground: () => {
          return (
            <View style={{
              alignItems: 'center',
              justifyContent: 'flex-end',
              flex: 1,
              backgroundColor: Colors.white,

              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
            }}>
              <Image style={{ width: 100, height: 50 }} source={DigitusLogo} />
            </View>
          )
        },
      }} />
      <Tab.Screen name='Read' component={Read} options={{
        tabBarActiveBackgroundColor: Colors.tabbarActiveBackgroundColor,
        tabBarInactiveBackgroundColor: Colors.white,
        tabBarIcon: ({ focused }) => {
          if (focused) {
            return (<Icon name='book' size={20} color={Colors.black} />)
          } else {
            return (<Icon name='book-outline' size={20} color={Colors.black} />)
          }
        }
      }} />
      <Tab.Screen name='Me' component={Me} options={{
        tabBarActiveBackgroundColor: Colors.tabbarActiveBackgroundColor,
        tabBarInactiveBackgroundColor: Colors.white,
        tabBarIcon: ({ focused }) => {
          if (focused) {
            return (<IconFeather name='users' size={20} color={Colors.black} />)
          } else {
            return (<IconFeather name='users' size={20} color={Colors.black} />)
          }
        }
      }} />
      <Tab.Screen name='Notification' component={Notification} options={{
        tabBarActiveBackgroundColor: Colors.tabbarActiveBackgroundColor,
        tabBarInactiveBackgroundColor: Colors.white,
        tabBarIcon: ({ focused }) => {
          if (focused) {
            return (<Icon name='notifications' size={20} color={Colors.black} />)
          } else {
            return (<Icon name='notifications-outline' size={20} color={Colors.black} />)
          }
        }
      }} />
      <Tab.Screen name='Other' component={Other} options={{
        tabBarActiveBackgroundColor: Colors.tabbarActiveBackgroundColor,
        tabBarInactiveBackgroundColor: Colors.white,
        tabBarIcon: ({ focused }) => {
          if (focused) {
            return (<Icon name='ios-list' size={20} color={Colors.black} />)
          } else {
            return (<Icon name='ios-list-outline' size={20} color={Colors.black} />)
          }
        }
      }} />
    </Tab.Navigator>
  );
}