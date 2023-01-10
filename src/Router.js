import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Welcome from './pages/Welcome';
import DashBoard from './pages/DashBoard';
import Other from './pages/Other';
import Notification from './pages/Notification';
import Me from './pages/Me';
import Read from './pages/Read';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const homeIcon = <Icon name='home' size={5} color='#000' />

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name='TabNavigatorPage' component={TabPage} />
        <Stack.Screen name='TabBar' component={TabPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const TabPage = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tab.Screen name='Dashboard' component={DashBoard} options={{
        tabBarIcon: ({ focused }) => {
          if (focused) {
            return (<Icon name='home' size={20} color='#000' />)
          } else {
            return (<Icon name='home-outline' size={20} color='#000' />)
          }
        }
      }} />
      <Tab.Screen name='Read' component={Read} />
      <Tab.Screen name='Me' component={Me} />
      <Tab.Screen name='Notification' component={Notification} />
      <Tab.Screen name='Other' component={Other} />
    </Tab.Navigator>
  );
}