import React from 'react'
import { View, ScrollView, SafeAreaView, Image, Pressable } from 'react-native'
import Colors from '../../assets/Colors';
import styles from './DashBoard.style';

import Pp0 from '../../assets/DummyData/Images/pp0.jpg';
import Pp1 from '../../assets/DummyData/Images/pp1.jpeg';
import Pp2 from '../../assets/DummyData/Images/pp2.jpg';
import Pp3 from '../../assets/DummyData/Images/pp3.jpg';
import Pp4 from '../../assets/DummyData/Images/pp4.jpg';
import Pp5 from '../../assets/DummyData/Images/pp5.jpg';
import Pp6 from '../../assets/DummyData/Images/pp6.jpg';
import Pp7 from '../../assets/DummyData/Images/pp7.jpg';

const DashBoard = () => {
    return (
        <SafeAreaView style={styles.page}>

            <ScrollView style={styles.story} horizontal showsHorizontalScrollIndicator={false}>


                <Pressable style={{ flex: 1, width: 80, borderRadius: 40, backgroundColor: Colors.white, borderWidth: 2, borderColor: Colors.dashboardHeaderIconColor, marginLeft: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 70, height: 70, borderRadius: 35 }} source={Pp0} />
                </Pressable>

                <Pressable style={{ flex: 1, width: 80, borderRadius: 40, backgroundColor: Colors.white, borderWidth: 2, borderColor: Colors.dashboardHeaderIconColor, marginLeft: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 70, height: 70, borderRadius: 35 }} source={Pp1} />
                </Pressable>

                <Pressable style={{ flex: 1, width: 80, borderRadius: 40, backgroundColor: Colors.white, borderWidth: 2, borderColor: Colors.dashboardHeaderIconColor, marginLeft: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 70, height: 70, borderRadius: 35 }} source={Pp2} />
                </Pressable>

                <Pressable style={{ flex: 1, width: 80, borderRadius: 40, backgroundColor: Colors.white, borderWidth: 2, borderColor: Colors.dashboardHeaderIconColor, marginLeft: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 70, height: 70, borderRadius: 35 }} source={Pp3} />
                </Pressable>

                <Pressable style={{ flex: 1, width: 80, borderRadius: 40, backgroundColor: Colors.white, borderWidth: 2, borderColor: Colors.dashboardHeaderIconColor, marginLeft: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 70, height: 70, borderRadius: 35 }} source={Pp4} />
                </Pressable>

                <Pressable style={{ flex: 1, width: 80, borderRadius: 40, backgroundColor: Colors.white, borderWidth: 2, borderColor: Colors.dashboardHeaderIconColor, marginLeft: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 70, height: 70, borderRadius: 35 }} source={Pp5} />
                </Pressable>

                <Pressable style={{ flex: 1, width: 80, borderRadius: 40, backgroundColor: Colors.white, borderWidth: 2, borderColor: Colors.dashboardHeaderIconColor, marginLeft: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 70, height: 70, borderRadius: 35 }} source={Pp6} />
                </Pressable>

                <Pressable style={{ flex: 1, width: 80, borderRadius: 40, backgroundColor: Colors.white, borderWidth: 2, borderColor: Colors.dashboardHeaderIconColor, marginLeft: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 70, height: 70, borderRadius: 35 }} source={Pp7} />
                </Pressable>

            </ScrollView>

            <View style={styles.contenView}></View>

        </SafeAreaView>
    )
}

export default DashBoard;