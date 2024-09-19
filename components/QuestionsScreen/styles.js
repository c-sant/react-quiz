import { StyleSheet } from "react-native";
import commonStyles from "../../styles";

const componentStyles = StyleSheet.create({
  questionList: {
    backgroundColor: "#1B2136",
    height: "60%",
    width: "90%",
    borderRadius: 15,
    margin: 10,
  },
});

const styles = StyleSheet.flatten([commonStyles, componentStyles]);

export default styles;
