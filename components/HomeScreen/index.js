import { View, Text } from "react-native";
import styles from "./styles";
import HomeScreenButton from "../HomeScreenButton";

function navigateIfHaveQuestions() {}

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
