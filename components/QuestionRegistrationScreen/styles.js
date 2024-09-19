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
  },
  row: {
    flexDirection: "row",
  },
  inputLabel: {
    color: "#fff",
    fontSize: 20,
  },
});

const styles = StyleSheet.flatten([commonStyles, componentStyles]);

export default styles;
