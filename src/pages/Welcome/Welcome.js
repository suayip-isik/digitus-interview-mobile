import React, { useRef, useState } from 'react'
import { Image, Pressable, SafeAreaView, Text, View, ScrollView, Dimensions } from 'react-native';
import styles from './Welcome.style';
import DigitusLogo from '../../assets/DigitusLogos/digitus.png';
import welcomePhotoOne from '../../assets/Introduction/introduction1.png'


const Welcome = () => {
    const { width, height } = Dimensions.get('window');

    const [screenIndex, setScreenIndex] = useState(1)
    const scrollViewRef = useRef();

    const scroll = () => {
        setScreenIndex(screenIndex + 1)
        scrollViewRef.current?.scrollTo({ x: width * screenIndex, y: 0, animated: true }, 3)
    }


    return (
        <SafeAreaView style={styles.page}>

            <View style={styles.logoHeader}>
                <Image style={{ width: '50%', height: '70%', }} source={DigitusLogo} />
            </View>

            <View style={styles.body}>

                <View style={{ flex: 5 }}>

                    {/* <Image style={{ height: '50%', width: '100%', resizeMode: 'cover', marginTop: 20, flex: 1 }} source={welcomePhotoOne} />

                    <View style={{ flex: 1, justifyContent: 'center' }}>

                        <Text style={{ color: '#0a8754', fontWeight: 'bold', fontSize: 32, alignSelf: 'center',  }}>Emin ad minim</Text>
                        <Text style={{ alignSelf: 'center', fontSize: 14, color: '#141d45', width: '80%', lineHeight: 26, textAlign: 'center', paddingTop: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</Text>

                    </View> */}
                    <ScrollView
                        ref={scrollViewRef}
                        showsHorizontalScrollIndicator={false}
                        scrollEnabled={false}
                        disableIntervalMomentum={true}
                        horizontal
                        style={{ flex: 1 }}>

                        <View style={{ width: width }}>
                            <Image style={{ height: '50%', width: '100%', resizeMode: 'cover', marginTop: 20, flex: 1 }} source={welcomePhotoOne} />

                            <View style={{ flex: 1, justifyContent: 'center' }}>

                                <Text style={{ color: '#0a8754', fontWeight: 'bold', fontSize: 32, alignSelf: 'center', }}>Emin ad minim</Text>
                                <Text style={{ alignSelf: 'center', fontSize: 14, color: '#141d45', width: '80%', lineHeight: 26, textAlign: 'center', paddingTop: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</Text>

                            </View>
                        </View>

                        <View style={{ width: width }}>
                            <Image style={{ height: '50%', width: '100%', resizeMode: 'cover', marginTop: 20, flex: 1 }} source={welcomePhotoOne} />

                            <View style={{ flex: 1, justifyContent: 'center' }}>

                                <Text style={{ color: '#0a8754', fontWeight: 'bold', fontSize: 32, alignSelf: 'center', }}>Emin ad minim</Text>
                                <Text style={{ alignSelf: 'center', fontSize: 14, color: '#141d45', width: '80%', lineHeight: 26, textAlign: 'center', paddingTop: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</Text>

                            </View>
                        </View>

                    </ScrollView>

                </View>



                <View style={{ flex: 1 }}>

                    <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                        <View style={{ width: 9, height: 9, borderRadius: 4.5, backgroundColor: 'gray', marginLeft: 5 }}></View>
                        <View style={{ width: 9, height: 9, borderRadius: 4.5, backgroundColor: 'lightgray', marginLeft: 5 }}></View>
                        <View style={{ width: 9, height: 9, borderRadius: 4.5, backgroundColor: 'lightgray', marginLeft: 5 }}></View>
                    </View>

                    <View style={{ paddingTop: 30, alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Pressable onPress={scroll} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#0a8754', width: '75%', borderRadius: 18 }}>
                            <Text style={{ color: '#fff', fontSize: 22, paddingVertical: 5 }}>İleri</Text>
                        </Pressable>
                    </View>

                </View>

            </View>
        </SafeAreaView>
    )
}

export default Welcome;