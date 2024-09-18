import { Text, View } from "react-native";
import styles from "./styles";
import FlowButton from "../FlowButton";

export default function QuestionsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perguntas</Text>
      <View style={styles.questionList}></View>
      <FlowButton text="+ Nova pergunta"></FlowButton>
    </View>
  );
}
