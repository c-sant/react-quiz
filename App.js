import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createTables } from "./services/Database";
import HomeScreen from "./components/HomeScreen";
import QuestionsScreen from "./components/QuestionsScreen";
import QuestionRegistrationScreen from "./components/QuestionRegistrationScreen";
import QuestionEditScreen from "./components/QuestionEditScreen";
import GameSettingsScreen from "./components/GameSettingsScreen";
import GameScreen from "./components/GameScreen";
import Toast from 'react-native-toast-message';
import LoadingComponent from "./components/LoadingComponent";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loading" component={LoadingComponent}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Questions" component={QuestionsScreen} />
        <Stack.Screen
          name="QuestionRegistration"
          component={QuestionRegistrationScreen}
        />
        <Stack.Screen name="QuestionEdit" component={QuestionEditScreen} />
        <Stack.Screen name="GameSettings" component={GameSettingsScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}
