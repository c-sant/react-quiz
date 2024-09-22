import { StyleSheet } from "react-native";
import commonStyles from "../../styles";

const componentStyles = StyleSheet.create({
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
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
});

const styles = StyleSheet.flatten([commonStyles, componentStyles]);

export default styles;
