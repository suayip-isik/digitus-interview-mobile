import React from 'react'
import { Pressable, Image } from 'react-native'
import styles from './StoryAvatar.style';

export default function StoryAvatar({ img, onPress }) {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Image style={styles.image} source={img} />
        </Pressable>
    )
}