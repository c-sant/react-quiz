import React from "react";
import { Text, View, Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import FlowButton from "../FlowButton";
import { useState } from "react";
import { getQuestions } from "../../services/Database";
import styles from "./styles";
import QuestionCard from "../QuestionCard";
import { deleteQuestion } from "../../services/Database";

export default function QuestionsScreen({ navigation }) {
  const [questions, setQuestions] = useState(null);

  async function fetchQuestions() {
    const loadedQuestions = await getQuestions();
    console.log(loadedQuestions);
    setQuestions(loadedQuestions);
  }

  async function handleDeleteQuestion(question, id) {
    console.log(question);
    console.log(id);
    Alert.alert(
      "Apagar pergunta",
      `Você tem certeza de que quer apagar a pergunta selecionada (${question})?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Apagar",
          onPress: async () => {
            await deleteQuestion(id);
            await fetchQuestions();
            // Alert.alert("Sucesso", "A mensagem foi apagada.");
          },
        },
      ]
    );
  }

  useFocusEffect(
    React.useCallback(() => {
      fetchQuestions(); // Call the function to fetch questions
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perguntas</Text>
      <View style={styles.questionList}>
        {/* Render questions here */}
        {questions &&
          questions.map((question, index) => (
            <QuestionCard
              key={index}
              data={question}
              onDeleteQuestion={handleDeleteQuestion}
            />
          ))}
      </View>
      <FlowButton
        text="+ Nova pergunta"
        onPress={() => navigation.navigate("QuestionRegistration")}
      ></FlowButton>
    </View>
  );
}
