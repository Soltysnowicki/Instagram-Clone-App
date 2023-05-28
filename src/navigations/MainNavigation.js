import BottomTabScreen from "./MyTabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
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
};

export default MainNavigation;
