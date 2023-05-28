import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostListScreen from "../screens/PostScreen/PostListScreen";
import SearchScreen from "../screens/SearchScreen/SearchScreen";
import ActivityScreen from "../screens/ActivityScreen/ActivityScreen";
import Ionic from "react-native-vector-icons/Ionicons";
import ReelsScreen from "../screens/ReelsScreen/ReelsScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles.tabBar,

        tabBarIcon: ({ focused, size, colour }) => {
          let iconName;
          if (route.name === "PostListScreen") {
            iconName = focused ? "home-sharp" : "home-outline";
            size = focused ? size + 8 : size + 2;
          } else if (route.name === "SearchScreen") {
            iconName = focused ? "search" : "ios-search-outline";
            size = focused ? size + 8 : size + 2;
          } else if (route.name === "ReelsScreen") {
            iconName = focused
              ? "caret-forward-circle"
              : "caret-forward-circle-outline";
          } else if (route.name === "ActivityScreen") {
            iconName = focused ? "ios-heart" : "ios-heart-outline";
          } else if (route.name === "ProfileScreen") {
            iconName = focused ? "ios-person-circle" : "ios-person-outline";
          }
          return <Ionic name={iconName} size={size} color={colour} />;
        },
      })}
    >
      <Tab.Screen name="PostListScreen" component={PostListScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="ReelsScreen" component={ReelsScreen} />
      <Tab.Screen name="ActivityScreen" component={ActivityScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabScreen;

export const styles = StyleSheet.create({
  tabBar: {
    height: 80,
  },
});
