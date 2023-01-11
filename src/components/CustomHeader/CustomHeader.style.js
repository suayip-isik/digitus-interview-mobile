import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
        backgroundColor: Colors.white,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    image: {
        width: 100,
        height: 50,
    }
})