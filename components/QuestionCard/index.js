import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";

function trimTextWithEllipsis(text, limit) {
  if (text.length > limit) {
    return text.substring(0, limit - 3) + "...";
  }
  return text;
}

export default function QuestionCard({ data, onDeleteQuestion }) {
  let question = trimTextWithEllipsis(data.question, 17);
  // let theme = trimTextWithEllipsis(data.theme, 17);

  console.log(data.id);
  console.log(question);

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderLabel}>{data.theme}</Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardBodyText}>{`Pergunta: ${question}`}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.cardButton}>
            <AntDesign name="edit" size={24} color="#f1f1f1" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardButton}
            onPress={() => onDeleteQuestion(question, data.id)}
          >
            <AntDesign name="delete" size={24} color="#f1f1f1" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
