import { Text, View } from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";
import { getQuestionsOfTheme } from "../../services/Database";
import ThemeSelector from "../ThemeSelector";
import QuestionsSlider from "../QuestionsSlider";
import FlowButton from "../FlowButton";

export default function GameSettingsScreen({ navigation }) {
  const [questions, setQuestions] = useState([]);
  const [theme, setTheme] = useState(-1);
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);

  async function fetchQuestions() {
    const loadedQuestions = await getQuestionsOfTheme(theme);
    setQuestions(loadedQuestions);
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
        onPress={() => {
          navigation.navigate("Game", { gameData: questions});
        }}
        backgroundColor="#29903B"
      />
    </View>
  );
}
