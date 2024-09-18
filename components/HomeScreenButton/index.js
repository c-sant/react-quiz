import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function HomeScreenButton({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonLabel}>{text}</Text>
    </TouchableOpacity>
  );
}
