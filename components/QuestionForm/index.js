import { View, Text, TextInput } from "react-native";
import styles from "./styles";
import ThemeSelector from "../ThemeSelector";
import { useState } from "react";
import FlowButton from "../FlowButton";

export default function QuestionForm({
  title,
  currentData,
  onSubmit,
  onPressReturn,
}) {
  const [id, setId] = useState(currentData?.id || null);
  const [theme, setTheme] = useState(currentData?.theme_id || null);
  const [question, setQuestion] = useState(currentData?.question || "");
  const [answer, setAnswer] = useState(currentData?.answer || "");
  const [alternative1, setAlternative1] = useState(
    currentData?.alternative_1 || ""
  );
  const [alternative2, setAlternative2] = useState(
    currentData?.alternative_2 || ""
  );
  const [alternative3, setAlternative3] = useState(
    currentData?.alternative_3 || ""
  );

  function clear() {
    setId(null);
    setTheme(null);
    setQuestion("");
    setAnswer("");
    setAlternative1("");
    setAlternative2("");
    setAlternative3("");
  }

  async function handleOnSubmit() {
    let data = {
      theme_id: theme,
      question: question,
      answer: answer,
      alternative_1: alternative1,
      alternative_2: alternative2,
      alternative_3: alternative3,
    };

    if (id) data["id"] = id;
    console.log(data);

    // TO-DO VALIDAÇÃO: PRECISA CHECAR SE NÃO FALTA NADA (o ID só é necessário durante um update, no insert ele é gerado automaticamente pelo SQLite)

    let success = await onSubmit(data);

    if (success) {
      // TO-DO: ADICIONAR TOAST VERDE AVISANDO QUE FUNCIONOU A OPERAÇÃO NO BANCO
      clear();
    } else {
      // TO-DO: ADICIONAR TOAST AMARELO AVISANDO QUE NÃO FUNCIONOU A OPERAÇÃO
    }

    onPressReturn();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
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
        onPress={handleOnSubmit}
        backgroundColor="#29903B"
      />
      <FlowButton
        text="Voltar"
        onPress={onPressReturn}
        backgroundColor="#d5ad2a"
      ></FlowButton>
    </View>
  );
}
