import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "./ProfileScreen";
import TodoApp from "./TodoApp";

const Stack = createNativeStackNavigator();

const RoutesContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />

      <Stack.Screen name="Home" component={TodoApp} />
    </Stack.Navigator>
  );
};

export default RoutesContainer;
