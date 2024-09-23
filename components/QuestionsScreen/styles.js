import { StyleSheet } from "react-native";
import commonStyles from "../../styles";

const componentStyles = StyleSheet.create({
  questionList: {
    backgroundColor: "#1B2136",
    width: "90%",
    borderRadius: 15,
    margin: 10,
    paddingVertical: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollableView: {
    height: 400, // Altura fixa para a área scrollable
    padding: 10
  },
  contentContainer: {
    paddingBottom: 30, // Espaço extra para evitar o corte do último item
  }
});

const styles = StyleSheet.flatten([commonStyles, componentStyles]);

export default styles;
