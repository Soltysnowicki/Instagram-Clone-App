import { View, StyleSheet } from "react-native";
import SearchBar from "./SearchBar/SearchBar";
import ImageList from "./ImageList/ImageList";

const SearchScreen = () => {
  return (
    <View style={styles.SearchScreen}>
      <SearchBar />
      <ImageList />
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
