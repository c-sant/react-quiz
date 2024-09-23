import { StyleSheet } from "react-native";
import commonStyles from "../../styles";

const componentStyles = StyleSheet.create({
    card: {
      padding: 15,
      margin: 10,
      borderRadius: 10
    },
    questionText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    answerText: {
      fontSize: 16,
      marginBottom: 5,
    },
    choiceText: {
      fontSize: 16,
      marginBottom: 5,
    },
    resultText: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 10,
    },
  });
  

const styles = StyleSheet.flatten([commonStyles, componentStyles]);

export default styles;
