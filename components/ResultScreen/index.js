import { View, Text } from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";
import FlowButton from "../FlowButton";

export default function ResultScreen({ route, navigation }) {
  const { responses } = route.params
  const [ hits, setHits] = useState(0)
  const [ numberQuestion, setNumberQuestion] = useState(0)
  const [ results, setResults] = useState()

  useEffect(() => {
    if(responses){
        onLoad(responses)
    }
  }, [responses])

  function onLoad(data){
    let hits = 0
    let arrayResult = []
    setNumberQuestion(data.length)
    for(let row of data){
        if(row.answer === row.choice){
            hits++
        }
        arrayResult.push({"answer": row.answer, "choice" : row.choice, "question": row.question})
    }
    setHits(hits)
    setResults(arrayResult)
  }

  

  return  (
  <View style={styles.container}>
    <Text style={styles.title}>Resultados</Text>
    <Text style={styles.title}>Acertos/Total: {hits}/{numberQuestion}</Text>
    <View style={styles.result}>
        {
            results && results.map((value, index) => (
                <View style={{width: '100%', margin: 10}} key={index}>
                    <Text style={{ color: '#fff', fontSize: 18}}>Questão: {value.question}</Text>
                    <Text style={{ color: '#fff', fontSize: 18}}>Resposta Certa: {value.answer}</Text>
                    <Text style={{ color: '#fff', fontSize: 18}}>Resposta Escolhida: {value.choice}</Text>
                    <Text style={{ color: '#fff', fontSize: 18}}>Você { value.answer == value.choice ? 'acertou' : 'errou'}</Text>
                </View>
            ))
        }

    </View>

    <FlowButton
          text="Home"
          onPress={() => navigation.navigate('Home')}
    ></FlowButton>
    
    
  </View>
);
}
