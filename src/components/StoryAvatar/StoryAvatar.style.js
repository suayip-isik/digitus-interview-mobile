import { StyleSheet } from "react-native";
import Colors from "../../assets/colors.js";

export default StyleSheet.create({
    container: {
        flex: 1,
        width: 80,
        borderRadius: 40,
        backgroundColor: Colors.white,
        borderWidth: 2,
        borderColor: Colors.dashboardHeaderIconColor,
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
})