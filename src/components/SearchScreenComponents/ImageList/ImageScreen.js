import { View, Text, StyleSheet } from "react-native";

import { usePosts } from "../../../hooks/usePosts";

import ImageList from "./ImageList";

const ImageScreen = () => {
  const { data, isError, isLoading } = usePosts();

  return (
    <View>
      {isLoading && (
        <View style={styles.centeredContainer}>
          <Text>Loading...</Text>
        </View>
      )}
      {isError && (
        <View style={styles.centeredContainer}>
          <Text>Something went wrong</Text>
        </View>
      )}
      {!isLoading && !isError && <ImageList data={data} />}
    </View>
  );
};

export default ImageScreen;

export const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});
