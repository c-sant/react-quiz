import { StyleSheet } from "react-native";
import commonStyles from "../../styles";

const componentStyles = StyleSheet.create({
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 35,
  },
  formSpace: {
    height: "60%",
    width: "90%",
    margin: 15,
    justifyContent: "space-evenly",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputLabel: {
    color: "#fff",
    fontSize: 20,
  },
  textInput: {
    backgroundColor: "#1B2136",
    width: 300,
  },
});

const styles = StyleSheet.flatten([commonStyles, componentStyles]);

export default styles;
