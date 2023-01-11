import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../assets/Colors';
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

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ borderWidth: 1, borderColor: Colors.veryLightBlue, padding: 5, paddingHorizontal: 15, borderRadius: 15 }}>
                            <Text style={{ color: Colors.green, fontWeight: 'bold' }}>Dius aute</Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name='calendar-sharp' size={15} color={Colors.black} style={{ paddingLeft: 30 }} />
                        <Text style={{ paddingLeft: 7, fontSize: 16 }}>11.1.2023</Text>
                    </View>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row' }}>
                        <Text style={{ color: Colors.pink, fontSize: 16, fontWeight: 'bold', paddingRight: 5 }}>{item.totalLike}</Text>
                        <Icon name={item.isLike === true ? 'heart' : 'heart-outline'} size={20} color={Colors.pink} style={{ paddingRight: 20 }} />
                    </View>
                </View>
            </View>

        </Pressable>
    );
}

export default ListCard;