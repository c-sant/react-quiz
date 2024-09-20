import { Text, TextInput, View } from "react-native";
import styles from "./styles";
import ThemeSelector from "../ThemeSelector";
import { useState } from "react";
import FlowButton from "../FlowButton";
import { insertQuestion } from "../../services/Database";

export default function QuestionRegistrationScreen() {
  const [theme, setTheme] = useState(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [alternative1, setAlternative1] = useState("");
  const [alternative2, setAlternative2] = useState("");
  const [alternative3, setAlternative3] = useState("");

  function clear() {
    setTheme("");
    setQuestion("");
    setAnswer("");
    setAlternative1();
    setAlternative2();
    setAlternative3();
  }

  async function saveQuestion() {
    let data = {
      theme_id: theme,
      question: question,
      answer: answer,
      alternative_1: alternative1,
      alternative_2: alternative2,
      alternative_3: alternative3,
    };
    let success = await insertQuestion(data);

    if (success) {
      // TO-DO: ADICIONAR TOAST AVISANDO QUE FUNCIONOU A INSERÇÃO NO BANCO
    }
    clear();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Pergunta</Text>
      <View style={styles.formSpace}>
        <View style={styles.row}>
          <Text style={styles.inputLabel}>Tema</Text>
          <ThemeSelector theme={theme} setTheme={setTheme} />
        </View>
        <View style={styles.row}>
          <Text style={styles.inputLabel}>Pergunta</Text>
          <TextInput
            style={styles.textInput}
            value={question}
            onChangeText={setQuestion}
          ></TextInput>
        </View>
        <View style={styles.row}>
          <Text style={styles.inputLabel}>Resposta</Text>
          <TextInput
            style={styles.textInput}
            value={answer}
            onChangeText={setAnswer}
          ></TextInput>
        </View>
        <View style={styles.row}>
          <Text style={styles.inputLabel}>Alternativa 1</Text>
          <TextInput
            style={styles.textInput}
            value={alternative1}
            onChangeText={setAlternative1}
          ></TextInput>
        </View>
        <View style={styles.row}>
          <Text style={styles.inputLabel}>Alternativa 2</Text>
          <TextInput
            style={styles.textInput}
            value={alternative2}
            onChangeText={setAlternative2}
          ></TextInput>
        </View>
        <View style={styles.row}>
          <Text style={styles.inputLabel}>Alternativa 3</Text>
          <TextInput
            style={styles.textInput}
            value={alternative3}
            onChangeText={setAlternative3}
          ></TextInput>
        </View>
      </View>
      <FlowButton
        text="Salvar"
        onPress={saveQuestion}
        backgroundColor="#29903B"
      />
    </View>
  );
}
