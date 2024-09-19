import { Text, View } from "react-native";
import styles from "./styles";

export default function QuestionRegistrationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Pergunta</Text>
      <View style={styles.formSpace}>
        <View style={styles.row}>
          <Text style={styles.inputLabel}>Tema</Text>
        </View>
      </View>
    </View>
  );
}
