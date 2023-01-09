import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native';
import styles from './Welcome.style';
import DigitusLogo from '../../assets/DigitusLogos/digitus.png';

const Welcome = () => {
    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.logoHeader}>
                <Image style={{ width: '50%', height: '30%' }} source={DigitusLogo} />
            </View>
        </SafeAreaView>
    )
}

export default Welcome;