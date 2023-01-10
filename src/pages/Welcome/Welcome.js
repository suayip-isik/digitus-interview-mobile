import React, { useRef, useState } from 'react'
import { Image, Pressable, SafeAreaView, Text, View, ScrollView, Dimensions } from 'react-native';
import styles from './Welcome.style';
import WelcomePageScrollItem from '../../components/WelcomePageScrollItem/WelcomePageScrollItem';
import DigitusLogo from '../../assets/DigitusLogos/digitus.png';
import welcomePhotoOne from '../../assets/Introduction/introduction1.png';
import welcomePhotoTwo from '../../assets/Introduction/introduction2.png';
import welcomePhotoThree from '../../assets/Introduction/introduction3.png';


const Welcome = () => {
    const { width, height } = Dimensions.get('window');

    const [screenIndex, setScreenIndex] = useState(1)
    const scrollViewRef = useRef();

    const scroll = () => {
        if (screenIndex >= 3) {
            return false
        }
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

                    <ScrollView
                        ref={scrollViewRef}
                        showsHorizontalScrollIndicator={false}
                        scrollEnabled={false}
                        disableIntervalMomentum={true}
                        horizontal
                        style={{ flex: 1 }}>

                        <WelcomePageScrollItem
                            width={width}
                            image={welcomePhotoOne}
                            title={'Emin ad minim'}
                            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'} />

                        <WelcomePageScrollItem
                            width={width}
                            image={welcomePhotoTwo}
                            title={'Emin ad minim'}
                            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'} />

                        <WelcomePageScrollItem
                            width={width}
                            image={welcomePhotoThree}
                            title={'Emin ad minim'}
                            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'} />

                    </ScrollView>

                </View>



                <View style={{ flex: 1 }}>

                    <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                        <View style={[{ width: 9, height: 9, borderRadius: 4.5, backgroundColor: 'lightgray', marginLeft: 5 }, screenIndex === 1 ? { backgroundColor: 'gray' } : { backgroundColor: 'lightgray' }]}></View>
                        <View style={[{ width: 9, height: 9, borderRadius: 4.5, backgroundColor: 'lightgray', marginLeft: 5 }, screenIndex === 2 ? { backgroundColor: 'gray' } : { backgroundColor: 'lightgray' }]}></View>
                        <View style={[{ width: 9, height: 9, borderRadius: 4.5, backgroundColor: 'lightgray', marginLeft: 5 }, screenIndex === 3 ? { backgroundColor: 'gray' } : { backgroundColor: 'lightgray' }]}></View>
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