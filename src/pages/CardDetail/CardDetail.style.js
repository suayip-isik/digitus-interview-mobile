import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

export default StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    imageContainer: {
        flex: 2,
    },
    image: {
        width: '100%',
        height: '110%',
        resizeMode: 'cover',
    },
    contentContainer: {
        flex: 3,
        backgroundColor: Colors.white,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderRadius: 10
    },
    title: {
        color: '#0a8754',
        fontWeight: 'bold',
        fontSize: 32,
        paddingTop: 15,
        paddingBottom: 10,
        paddingLeft: 10,
    },
    contentTitleContainer: {
        alignItems: 'flex-start',
    }
});