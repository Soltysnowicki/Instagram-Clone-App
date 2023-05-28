import { View, StyleSheet } from "react-native";
import SearchBar from "../../components/SearchScreenComponents/SearchBar/SearchBar";

import ImageScreen from "../../components/SearchScreenComponents/ImageList/ImageScreen";

const SearchScreen = () => {
  return (
    <View style={styles.SearchScreen}>
      <SearchBar />
      <ImageScreen />
    </View>
  );
};

export default SearchScreen;

export const styles = StyleSheet.create({
  SearchScreen: {
    flex: 1,
    marginTop: 30,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
