import { View, Text } from "react-native";
import styles from "./styles";
import QuestionGame from "../QuestionGame";
import { useEffect, useState } from "react";
import FlowButton from "../FlowButton";
import { Bar } from "react-native-progress";
import { BackHandler } from "react-native";
import Toast from "react-native-toast-message";

export default function GameScreen({ route, navigation }) {
  const { gameData } = route.params
  const [ currentNumber, setCurrentNumber] = useState(1)
  const [currentQuestion, setCurrentQuestion] = useState()
  const [ progress, setProgress] = useState(0)

  useEffect(() => {
    setCurrentQuestion(gameData[currentNumber-1])
    calculateProgress()
  }, [currentNumber])

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {return true})
    return () => backHandler.remove()
  }, [])

  function calculateProgress(){
    setProgress(currentNumber/gameData.length)
  }

  function onReceiveMessage(question){
    setCurrentQuestion(question)
  }

  function onSubmit(){
    if(!currentQuestion["choice"]){
      Toast.show({
        type: 'info',
        text1: 'Não é possível avançar',
        text2: 'A pergunta tem que ser respondida'
      })
      return;
    }

    navigation.navigate("Result", {responses: gameData})
  }


  function onNext(){
    if(!currentQuestion["choice"]){
      Toast.show({
        type: 'info',
        text1: 'Não é possível avançar',
        text2: 'A pergunta tem que ser respondida'
      })
      return;
    }

    setCurrentNumber(currentNumber + 1)
  }

  return  (
  <View style={styles.container}>
    <View style={styles.alignProgressBar}>
      <View>
        <Bar progress={progress} width={200}/>
      </View>
      <Text style={styles.fontColor}>{currentNumber}/{gameData.length}</Text>
    </View>
    <Text style={styles.title}>Pergunta</Text>
    <View style={styles.question}>
      <QuestionGame question={currentQuestion} onResponse={(data) => onReceiveMessage(data)}/>
    </View>
    <View style={styles.footerBottom}>
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
          onPress={onNext}
        ></FlowButton>
      )

      }
    </View>
    
  </View>
);
}
