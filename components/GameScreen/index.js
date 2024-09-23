import { View, Text } from "react-native";
import styles from "./styles";
import QuestionGame from "../QuestionGame";
import { useEffect, useState } from "react";
import FlowButton from "../FlowButton";

export default function GameScreen({ route, navigation }) {
  const { gameData } = route.params
  const [ currentNumber, setCurrentNumber] = useState(1)
  const [currentQuestion, setCurrentQuestion] = useState()

  useEffect(() => {
    setCurrentQuestion(gameData[currentNumber-1])
  }, [currentNumber])

  function onReceiveMessage(question){
    setCurrentQuestion(question)
  }

  function onSubmit(){
    navigation.navigate("Result", {responses: gameData})
  }

  return  (
  <View style={styles.container}>
    <Text style={styles.title}>Pergunta</Text>
    <View style={styles.question}>
      <QuestionGame question={currentQuestion} onResponse={(data) => onReceiveMessage(data)}/>
    </View>
    <View style={styles.footerBottom}>
      {
        currentNumber == gameData.length ? 
      (
        <FlowButton
          text="Finalizar"
          onPress={onSubmit}
        ></FlowButton>
      )
      :
      (
        <FlowButton
          text="Avançar"
          onPress={() => setCurrentNumber(currentNumber + 1)}
        ></FlowButton>
      )

      }
      
      {
        currentNumber == 1 ?
        (
          <FlowButton
            text="Voltar"
            onPress={() => setCurrentNumber(currentNumber - 1)}
            backgroundColor="##808a89"
            disabled={true}
          ></FlowButton>
        )
        :
        (
          <FlowButton
            text="Voltar"
            onPress={() => setCurrentNumber(currentNumber - 1)}
            backgroundColor="#d5ad2a"
          ></FlowButton>
        )
      }
      
    </View>
    
  </View>
);
}
