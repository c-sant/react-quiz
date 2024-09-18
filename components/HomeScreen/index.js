import { View, Text } from "react-native";
import styles from "./styles";
import HomeScreenButton from "../HomeScreenButton";
import { getNumberOfQuestions } from "../../services/Database";

async function navigateIfHaveQuestions() {
  let numberOfQuestions = await getNumberOfQuestions();

  if (numberOfQuestions > 0) {
    // navega para o jogo
  } else {
    // continua na mesma tela e emite um alerta
  }
}

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Massa</Text>
      <View>
        <HomeScreenButton text={"JOGAR"} onPress={navigateIfHaveQuestions} />
        <HomeScreenButton text={"PERGUNTAS"} />
      </View>
    </View>
  );
}
