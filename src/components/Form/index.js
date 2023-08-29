import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native"
import ResultImc from "./ResultImc";

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("calcular")

    //função que calcula imc
    function imcCalculator() {
        return setImc((weight / (height * height)).toFixed(2))
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
            return
        }
        //se nao for preenchido
        setImc(null)
        setTextButton("calcular")
        setMessageImc("preencha o peso e altura")
    }
    return (
        <View>
            <View>

                <Text>Altura</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 75.365"
                    keyboardType="numeric"
                />
                <Button
                onPress={() => validationImc()}
                title={textButton} 
                />
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
            <View></View>
            <View></View>
        </View>
    )
}