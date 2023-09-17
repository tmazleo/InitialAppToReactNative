import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        marginTop: 30,
        backgroundColor: "#002f3d",
        alignItems: "center",
        borderTopLeftRadius: 60,
        paddingTop: 30
    },
    form: {
        width: "100%",

    },
    formLabel: {
        color: "#000",
        fontSize: 18,
        paddingLeft: 20
    },
    formInput: {
        width: "90%",
        backgroundColor: 50,
        backgroundColor: "#013f4d",
        height: 40,
        margin: 12,
        paddingLeft: 10,
        borderRadius: 50
    },
    buttonCalc: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#015d6c",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30
    },
    textButtonCalc: {
        fontSize: 20,
        color: "#fff",

    },
    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20
    }
});

export default styles