import { StyleSheet } from "react-native";
import commonStyles from "../../styles";

const componentStyles = StyleSheet.create({
    question: {
      backgroundColor: "#1B2136",
      height: "60%",
      width: "90%",
      borderRadius: 15,
      margin: 10,
      paddingVertical: 10,
      alignItems: "center",
      justifyContent: "center"
    },

    footerBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
        marginLeft: 10
    },
    fontColor: {
        color: "#fff"
    },
    alignProgressBar: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }
  });

const styles = StyleSheet.flatten([commonStyles, componentStyles]);

export default styles;
