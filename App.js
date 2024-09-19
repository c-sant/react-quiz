import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createTables } from "./services/Database";
import HomeScreen from "./components/HomeScreen";
import QuestionsScreen from "./components/QuestionsScreen";
import QuestionRegistrationScreen from "./components/QuestionRegistrationScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  createTables(); // inicializa o banco de dados

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Questions" component={QuestionsScreen} />
        <Stack.Screen
          name="QuestionRegistration"
          component={QuestionRegistrationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
