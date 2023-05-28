import { View, StyleSheet } from "react-native";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import MainNavigation from "./src/navigations/MainNavigation";
import { useFonts } from "expo-font";
const queryClient = new QueryClient();

export default function App() {
  const [loaded] = useFonts({
    Lobster: require("./assets/fonts/Lobster-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.rootContainer}>
      <QueryClientProvider client={queryClient}>
        <MainNavigation />
      </QueryClientProvider>
    </View>
  );
}

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
