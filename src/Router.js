import React from 'react';
import { Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from './assets/colors.js';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import DigitusLogo from './assets/DigitusLogos/digitus.png';
import CustomHeader from './components/CustomHeader';
import TabbarIcon from './components/TabBarIcon';

import Welcome from './pages/Welcome';
import DashBoard from './pages/DashBoard';
import Other from './pages/Other';
import Notification from './pages/Notification';
import Me from './pages/Me';
import Read from './pages/Read';
import CardDetail from './pages/CardDetail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name='TabNavigatorPage' component={TabPage} options={{ headerShown: false }} />
        <Stack.Screen name='CardDetail' component={CardDetail} options={({ navigation }) => ({
          title: '',
          headerBackground: () => <CustomHeader image={DigitusLogo} />,
          headerLeft: () => {
            return (
              <Pressable onPress={() => navigation.goBack()}>
                <Icon name='arrow-back' size={35} color={Colors.gray} />
              </Pressable>
            )
          },
        })} />
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
        tabBarIcon: ({ focused }) => <TabbarIcon focused={focused} activeIcon={'home'} inActiveIcon={'home-outline'} />,
        headerTitle: '',
        headerBackground: () => <CustomHeader image={DigitusLogo} />,
      }} />
      <Tab.Screen name='Read' component={Read} options={{
        tabBarActiveBackgroundColor: Colors.tabbarActiveBackgroundColor,
        tabBarInactiveBackgroundColor: Colors.white,
        tabBarIcon: ({ focused }) => <TabbarIcon focused={focused} activeIcon={'book'} inActiveIcon={'book-outline'} />,
      }} />
      <Tab.Screen name='Me' component={Me} options={{
        tabBarActiveBackgroundColor: Colors.tabbarActiveBackgroundColor,
        tabBarInactiveBackgroundColor: Colors.white,
        tabBarIcon: ({ focused }) => <TabbarIcon focused={focused} activeIcon={'person'} inActiveIcon={'person-outline'} />,
      }} />
      <Tab.Screen name='Notification' component={Notification} options={{
        tabBarActiveBackgroundColor: Colors.tabbarActiveBackgroundColor,
        tabBarInactiveBackgroundColor: Colors.white,
        tabBarIcon: ({ focused }) => <TabbarIcon focused={focused} activeIcon={'notifications'} inActiveIcon={'notifications-outline'} />,
        tabBarBadge: 5,
        tabBarBadgeStyle: {
          backgroundColor: Colors.orange,
          color: Colors.black
        }
      }} />
      <Tab.Screen name='Other' component={Other} options={{
        tabBarActiveBackgroundColor: Colors.tabbarActiveBackgroundColor,
        tabBarInactiveBackgroundColor: Colors.white,
        tabBarIcon: ({ focused }) => <TabbarIcon focused={focused} activeIcon={'ios-list'} inActiveIcon={'ios-list-outline'} />
      }} />
    </Tab.Navigator>
  );
}