import React from 'react';
import { View, Image } from 'react-native';
import styles from './CustomHeader.style';

const CustomHeader = ({ image }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
        </View>
    )
}

export default CustomHeader;