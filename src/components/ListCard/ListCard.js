import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import styles from './ListCard.style';

const ListCard = ({ item, onPress }) => {
    return (
        <Pressable style={styles.container} onPress={item.onPress}>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={item.image} />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Enim ad minim</Text>
                <View style={styles.innerContainer}>

                </View>
            </View>

        </Pressable>
    );
}

export default ListCard;