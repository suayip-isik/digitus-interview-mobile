import { StyleSheet } from "react-native";

export default StyleSheet.create({
    image: {
        height: '50%',
        width: '100%',
        resizeMode: 'cover',
        marginTop: 20,
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        color: '#0a8754',
        fontWeight: 'bold',
        fontSize: 32,
        alignSelf: 'center',
    },
    description: {
        alignSelf: 'center',
        fontSize: 14,
        color: '#141d45',
        width: '80%',
        lineHeight: 26,
        textAlign: 'center',
        paddingTop: 15,
    }
})