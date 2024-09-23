import { Text, View } from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";
import { getQuestionsOfTheme } from "../../services/Database";
import ThemeSelector from "../ThemeSelector";
import QuestionsSlider from "../QuestionsSlider";
import FlowButton from "../FlowButton";
import { isZero, validateFields } from "../../utils/utils";
import Toast from "react-native-toast-message";

export default function GameSettingsScreen({ navigation }) {
  const [questions, setQuestions] = useState([]);
  const [theme, setTheme] = useState(-1);
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);

  async function fetchQuestions() {
    setNumberOfQuestions(0);
    const loadedQuestions = await getQuestionsOfTheme(theme);
    setQuestions(loadedQuestions);
  }

  function shuffleArray(array) {
    let shuffledArray = [...array]; // Cria uma cópia do array original
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Escolhe um índice aleatório
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Troca os elementos
    }
    return shuffledArray;
  }

  function getNumberOfQuestionSelected(){
    let array = shuffleArray(questions)
    return array.slice(0, numberOfQuestions)
  }

  function play(){
    try{
      validateFields('Tema', theme)
      isZero('Número de perguntas', numberOfQuestions)
    }catch(err){
      Toast.show({
        type: 'info',
        text1: 'Campos obrigatórios',
        text2: err
      })
      return;
    }
    let arrayToGame = getNumberOfQuestionSelected()
    navigation.navigate("Game", { gameData: arrayToGame});
  }

  useEffect(() => {
    fetchQuestions();
  }, [theme]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações da partida</Text>
      <View style={styles.formSpace}>
        <View style={styles.row}>
          <Text style={styles.inputLabel}>Tema</Text>
          <ThemeSelector
            theme={theme}
            setTheme={setTheme}
            searchable={true}
            searchPlaceholder="Buscar..."
            addCustomItem={false}
            includeAll={true}
          ></ThemeSelector>
        </View>
        <View style={styles.row}>
          <Text style={styles.inputLabel}>Perguntas</Text>
          <QuestionsSlider
            numberOfQuestions={numberOfQuestions}
            setNumberOfQuestions={setNumberOfQuestions}
            questionsLength={questions.length}
          />
        </View>
      </View>
      <FlowButton
        text="Jogar"
        onPress={play}
        backgroundColor="#29903B"
      />
    </View>
  );
}
