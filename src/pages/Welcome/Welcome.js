import React from 'react'
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';
import styles from './Welcome.style';
import DigitusLogo from '../../assets/DigitusLogos/digitus.png';
import welcomePhotoOne from '../../assets/Introduction/introduction1.png'


const Welcome = () => {
    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.logoHeader}>
                <Image style={{ width: '50%', height: '70%', }} source={DigitusLogo} />
            </View>
            <View style={styles.body}>

                <Image style={{ height: '50%', width: '100%', resizeMode: 'cover', marginTop: 20, flex: 1 }} source={welcomePhotoOne} />

                <View style={{ flex: 1 }}>

                    <Text style={{ color: '#0a8754', fontWeight: 'bold', fontSize: 32, alignSelf: 'center', marginTop: 15, }}>Emin ad minim</Text>
                    <Text style={{ alignSelf: 'center', fontSize: 14, color: '#141d45', width: '80%', lineHeight: 26, textAlign: 'center', paddingTop: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</Text>

                    <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', paddingTop: 15, }}>
                        <View style={{ width: 9, height: 9, borderRadius: 4.5, backgroundColor: 'gray', marginLeft: 5 }}></View>
                        <View style={{ width: 9, height: 9, borderRadius: 4.5, backgroundColor: 'lightgray', marginLeft: 5 }}></View>
                        <View style={{ width: 9, height: 9, borderRadius: 4.5, backgroundColor: 'lightgray', marginLeft: 5 }}></View>
                    </View>

                    <View style={{ paddingTop: 35, alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Pressable onPress={() => console.log("preassable")} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#0a8754', width: '75%', borderRadius: 18 }}>
                            <Text style={{ color: '#fff', fontSize: 22, paddingVertical: 5 }}>İleri</Text>
                        </Pressable>
                    </View>

                </View>

            </View>
        </SafeAreaView>
    )
}

export default Welcome;