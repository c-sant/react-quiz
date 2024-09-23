import { View, Text, ScrollView } from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";
import FlowButton from "../FlowButton";
import ResultCard from "../ResultCard";

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
        <ScrollView style={styles.scrollableView} contentContainerStyle={styles.contentContainer}>
        {
            results && results.map((value, index) => (
                    <ResultCard 
                        question={value.question}
                        answer={value.answer}
                        choice={value.choice}
                        isCorrect={value.answer == value.choice}
                        key={index}
                    />
                
            ))
        }
        </ScrollView>

    </View>

    <FlowButton
          text="Home"
          onPress={() => navigation.navigate('Home')}
    ></FlowButton>
    
    
  </View>
);
}
