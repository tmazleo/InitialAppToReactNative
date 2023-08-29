import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#ffffff",
        alignItems: "center",
        borderRadius: 60,
        marginTop: 30,
    },
    form: {
        width: "100%",
        height: "auto",
        margin: 30,
        padding: 10,

    },
    formLabel: {
        color: "#000",
        fontSize: 18,
        paddingLeft: 20
    },
    formInput: {
        width: "90%",
        backgroundColor: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10
    },
    buttonCalc: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30
    },
    textButtonCalc: {
        fontSize: 20,
        color: "#fff",

    }
});

export default styles