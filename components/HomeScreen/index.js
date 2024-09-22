import { View, Text } from "react-native";
import styles from "./styles";
import FlowButton from "../FlowButton";
import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getNumberOfQuestions } from "../../services/Database";
import { useState } from "react";

export default function HomeScreen({ navigation }) {
  const [hasQuestions, setHasQuestions] = useState(false);

  async function checkIfHasQuestions() {
    let numberOfQuestions = await getNumberOfQuestions();
    setHasQuestions(Number(numberOfQuestions) > 0);
  }

  // TO-DO: CONSERTAR O BUG QUE DESABILITA O BOTÃO JOGAR MESMO QUANDO HÁ PERGUNTAS
  // (Possible unhandled promise rejection)
  // O BUG SOME SE VOCÊ ENTRA NA TELA DE PERGUNTAS E VOLTA AO MENU INICIAL
  useFocusEffect(
    React.useCallback(() => {
      checkIfHasQuestions();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Massa</Text>
      <View>
        <FlowButton
          backgroundColor={hasQuestions ? "#219de2" : "#4d4d4d"}
          text={"JOGAR"}
          onPress={() => navigation.navigate("GameSettings")}
          disabled={!hasQuestions}
        />
        <FlowButton
          text={"PERGUNTAS"}
          onPress={() => navigation.navigate("Questions")}
        />
      </View>
    </View>
  );
}
