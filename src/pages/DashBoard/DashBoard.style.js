import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

export default StyleSheet.create({
    page: {
        flex: 1,
        // backgroundColor: Colors.white,
    },
    story: {
        flex: 1,
        backgroundColor: '#fff', //Colors.veryLightBlue,
        flexDirection: 'row',
        paddingVertical: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    contenView: {
        flex: 7.3,
        paddingHorizontal: '3%',
        paddingTop: '1%',
    }
})