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
    setHasQuestions(numberOfQuestions > 0);
  }

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
          onPress={() => console.log("is enabled")}
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
