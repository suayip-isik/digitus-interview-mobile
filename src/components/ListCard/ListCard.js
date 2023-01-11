import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import styles from './ListCard.style';

const ListCard = ({ item, onPress }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={item.image} />
            </View>
            <View style={styles.contentContainer}></View>

        </Pressable>
    );
}

export default ListCard;