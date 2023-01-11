import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './TabBarIcon.style';
import Colors from '../../assets/Colors';

const TabbarIcon = ({ focused, activeIcon, inActiveIcon }) => {
    if (focused) {
      return (<Icon name={activeIcon} size={20} color={Colors.black} />)
    } else {
      return (<Icon name={inActiveIcon} size={20} color={Colors.black} />)
    }
  }

  export default TabbarIcon;