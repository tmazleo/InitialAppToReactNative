import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration } from "react-native"
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("calcular")
    const [errorMessage, setErrorMessage] = useState(null)

    //função que calcula imc
    function imcCalculator() {
        return setImc((weight / (height * height)).toFixed(2))
    }

    function verificationImc() {
        if (height == null && weight == null) {
            Vibration.vibrate();
            setErrorMessage("campo obrigatório*")
        }
    }

    //validando os campos
    function validationImc() {
        //se for preenchido
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual:")
            setTextButton("calcular novamente")
            setErrorMessage(null)
            return
        }
        //se nao for preenchido
        verificationImc()
        setImc(null)
        setTextButton("calcular")
        setMessageImc("preencha o peso e altura")
    }
    return (
        <View style={styles.formContext}>
            <View style={styles.form}>

                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                />

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 75.365"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.buttonCalc}
                    onPress={() => { validationImc() }}>
                    <Text style={styles.textButtonCalc}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
            <View></View>
            <View></View>
        </View>
    )
}