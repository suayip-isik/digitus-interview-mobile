import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

export default StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    story: {
        flex: 1,
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        paddingVertical: 10,
    },
    contenView: {
        flex: 7.3,
    }
})