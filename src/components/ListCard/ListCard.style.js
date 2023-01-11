import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        width: '100%',
        height: 300,
        marginTop: 20,
        alignSelf: 'center',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,


        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,

    },
    imageContainer: {
        flex: 3,
    },
    image: {
        flex: 1,
        width: '100%',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    contentContainer: {
        flex: 1.3,
        backgroundColor: Colors.white,
    }
})