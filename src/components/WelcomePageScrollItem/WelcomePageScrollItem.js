import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './WelcomePageScrollItem.style';

const WelcomePageScrollItem = ({ width, image, title, description }) => {
    return (
        <View style={{ width: width }}>
            <Image style={styles.image} source={image} />

            <View style={styles.innerContainer}>

                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>

            </View>
        </View>
    );
}

export default WelcomePageScrollItem;