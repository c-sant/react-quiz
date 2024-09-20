import QuestionForm from "../QuestionForm";
import { insertQuestion } from "../../services/Database";

export default function QuestionRegistrationScreen({ navigation }) {
  return (
    <QuestionForm
      title={"Cadastro de perguntas"}
      onSubmit={insertQuestion}
      onPressReturn={() => navigation.navigate("Questions")}
    />
  );
}
