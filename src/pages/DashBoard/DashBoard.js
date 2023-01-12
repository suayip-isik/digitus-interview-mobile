import React, { useState } from 'react'
import { View, ScrollView, SafeAreaView, Image, Pressable, Text, FlatList } from 'react-native'
import Colors from '../../assets/colors.js';
import styles from './DashBoard.style';
import StoryAvatar from '../../components/StoryAvatar';
import ListCard from '../../components/ListCard';


// FAKE DATA IMPORT 
import Pp0 from '../../assets/DummyData/Images/pp0.jpg';
import Pp1 from '../../assets/DummyData/Images/pp1.jpeg';
import Pp2 from '../../assets/DummyData/Images/pp2.jpg';
import Pp3 from '../../assets/DummyData/Images/pp3.jpg';
import Pp4 from '../../assets/DummyData/Images/pp4.jpg';
import Pp5 from '../../assets/DummyData/Images/pp5.jpg';
import Pp6 from '../../assets/DummyData/Images/pp6.jpg';
import Pp7 from '../../assets/DummyData/Images/pp7.jpg';

import cp0 from '../../assets/DummyData/CardPhoto/cp0.jpeg'
import cp1 from '../../assets/DummyData/CardPhoto/cp1.jpeg'
import cp2 from '../../assets/DummyData/CardPhoto/cp2.jpeg'

const DashBoard = ({ navigation }) => {

    const [images, setImages] = useState([Pp0, Pp1, Pp2, Pp3, Pp4, Pp5, Pp6, Pp7]);

    const FAKE_DATA = [
        {
            id: '0',
            image: cp0,
            title: 'First Item',
            date: '',
            isLike: false,
            totalLike: 50,
            onPress: () => navigation.push("CardDetail", { image: cp0 }),
        },
        {
            id: '1',
            image: cp1,
            title: 'Second Item',
            date: '',
            isLike: true,
            totalLike: 174,
            onPress: () => navigation.push("CardDetail", { image: cp1 }),
        },
        {
            id: '2',
            image: cp2,
            title: 'Third Item',
            date: '',
            isLike: false,
            totalLike: 6,
            onPress: () => navigation.push("CardDetail", { image: cp2 }),
        },
    ];

    return (
        <SafeAreaView style={styles.page}>

            <View style={styles.story}>
                <ScrollView style={{ flex: 1 }} horizontal showsHorizontalScrollIndicator={false}>
                    {
                        images.map((val, i) => {
                            return (
                                <StoryAvatar
                                    onPress={() => { alert(i + " nolu story açıldı") }}
                                    key={i}
                                    img={val} />
                            )
                        })
                    }
                </ScrollView>
            </View>

            <View style={styles.contenView}>

                <FlatList
                    style={{ flex: 1 }}
                    data={FAKE_DATA}
                    renderItem={ListCard}
                    keyExtractor={item => item.id} showsVerticalScrollIndicator={false} />

            </View>

        </SafeAreaView>
    )
}

export default DashBoard;