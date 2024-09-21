import { StyleSheet } from "react-native";
import commonStyles from "../../styles";

const componentStyles = StyleSheet.create({
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  formSpace: {
    height: "55%",
    width: "90%",
    margin: 5,
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
    width: 200,
    height: 50,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 3,
    color: "#fff",
  },
});

const styles = StyleSheet.flatten([commonStyles, componentStyles]);

export default styles;
