import { StyleSheet } from "react-native";
import commonStyles from "../../styles";

const componentStyles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginVertical: 10,
      },
      cardText: {
        fontSize: 18,
        color: '#333',
      },
      buttonRow: {
        flexDirection: 'row',
      },
      cardButton: {
        marginLeft: 10,
        backgroundColor: '#1f6f2d',
        padding: 10,
        borderRadius: 5,
      },
  questionList: {
    backgroundColor: "#1B2136",
    height: 500,
    width: '90%',
    borderRadius: 15,
    margin: 10,
    paddingVertical: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollableView: {
    padding: 10
  },
  contentContainer: {
    paddingBottom: 30, // Espaço extra para evitar o corte do último item
  }
});

const styles = StyleSheet.flatten([commonStyles, componentStyles]);

export default styles;
