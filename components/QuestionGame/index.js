import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import React from "react";
import { useEffect, useState } from "react";

export default function QuestionGame({ question, onResponse }) {
    const [options, setOptions] = useState()
    const [ key, setKey] = useState()

    function loadOptions(data){
        let array = []
        array.push(data.alternative_1)
        array.push(data.alternative_2)
        array.push(data.alternative_3)
        array.push(data.answer)
        array = shuffleArray(array)
        setOptions(array)

        if(data["choice"]){
            setKey(array.findIndex((element) => element == data["choice"]))
        }
    }

    function shuffleArray(array) {
        let shuffledArray = [...array]; // Cria uma cópia do array original
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1)); // Escolhe um índice aleatório
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Troca os elementos
        }
        return shuffledArray;
    }

   
    useEffect(() => {
        if(question){
            setKey(null)
            loadOptions(question)
        }
    }, [question])
   
    function onclick(index){
        setKey(index)
        let result = question
        result["choice"] = options[index]
        onResponse(result)
    }
    
  
  return  (
    <View style={styles.content}>
        
        <View>
            <Text style={styles.titleQuestion}>{question?.question}</Text>
        </View>

        <View style={styles.optionContainer}>
            { options && options.map((option, index) => (
                <TouchableOpacity  
                    key={index} 
                    style={{ margin: 10, padding: 20, borderColor: key == index ? '#03fcf0' : '#fff', borderWidth: 5, borderRadius: 5}} 
                    onPress={() => onclick(index)}>
                    <Text style={styles.optionFont}>{option}</Text>
                </TouchableOpacity>
                
            ))}
            
        </View>
        
      </View>
        
    );
}
