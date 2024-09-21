import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function FlowButton({
  text,
  onPress,
  backgroundColor = "#219de2",
  disabled = false,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor }]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonLabel}>{text}</Text>
    </TouchableOpacity>
  );
}
