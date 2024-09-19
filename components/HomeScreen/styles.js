import { StyleSheet } from "react-native";
import commonStyles from "../../styles";

const componentStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252c49",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

const styles = StyleSheet.flatten([commonStyles, componentStyles]);

export default styles;
