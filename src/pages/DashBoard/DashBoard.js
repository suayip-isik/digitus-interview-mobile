import React, { useState } from 'react'
import { View, ScrollView, SafeAreaView, Image, Pressable, Text } from 'react-native'
import Colors from '../../assets/Colors';
import styles from './DashBoard.style';
import StoryAvatar from '../../components/StoryAvatar';

import Pp0 from '../../assets/DummyData/Images/pp0.jpg';
import Pp1 from '../../assets/DummyData/Images/pp1.jpeg';
import Pp2 from '../../assets/DummyData/Images/pp2.jpg';
import Pp3 from '../../assets/DummyData/Images/pp3.jpg';
import Pp4 from '../../assets/DummyData/Images/pp4.jpg';
import Pp5 from '../../assets/DummyData/Images/pp5.jpg';
import Pp6 from '../../assets/DummyData/Images/pp6.jpg';
import Pp7 from '../../assets/DummyData/Images/pp7.jpg';

const DashBoard = () => {

    const [images, setImages] = useState([Pp0, Pp1, Pp2, Pp3, Pp4, Pp5, Pp6, Pp7]);

    return (
        <SafeAreaView style={styles.page}>

            <View style={styles.story}>

                <ScrollView style={{ flex: 1 }} horizontal showsHorizontalScrollIndicator={false}>
                    {
                        images.map((val, i) => {
                            return (
                                <StoryAvatar key={i} img={val} />
                            )
                        })
                    }
                </ScrollView>

            </View>

            <View style={styles.contenView}></View>

        </SafeAreaView>
    )
}

export default DashBoard;