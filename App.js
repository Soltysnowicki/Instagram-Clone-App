import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabScreen from "./src/components/navigations/MyTabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
