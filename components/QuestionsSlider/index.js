import { Text, View } from "react-native";
import Slider from "@react-native-community/slider";
import styles from "./styles";
import { useEffect, useState } from "react";

export default function QuestionsSlider({
  numberOfQuestions,
  setNumberOfQuestions,
  questionsLength,
}) {
  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        minimumTrackTintColor="#fff"
        maximumTrackTintColor="#fff"
        maximumValue={questionsLength}
        step={1}
        value={numberOfQuestions}
        onValueChange={setNumberOfQuestions}
        tapToSeek={true}
      />
      <Text style={styles.label}>{numberOfQuestions}</Text>
    </View>
  );
}
