import QuestionForm from "../QuestionForm";
import { updateQuestion } from "../../services/Database";

export default function QuestionEditScreen({ route, navigation }) {
  const { questionData } = route.params;

  return (
    <QuestionForm
      title={"Edição de pergunta"}
      currentData={questionData}
      onSubmit={updateQuestion}
      isUpdated={true}
      onPressReturn={() => navigation.navigate("Questions")}
    />
  );
}
