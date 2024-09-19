import { Text, TextInput, View } from "react-native";
import styles from "./styles";
import ThemeSelector from "../ThemeSelector";

export default function QuestionRegistrationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Pergunta</Text>
      <View style={styles.formSpace}>
        <View style={styles.row}>
          <Text style={styles.inputLabel}>Tema</Text>
          <ThemeSelector />
        </View>
        <View style={styles.row}>
          <Text style={styles.inputLabel}>Pergunta</Text>
          <TextInput style={styles.textInput}></TextInput>
        </View>
      </View>
    </View>
  );
}
