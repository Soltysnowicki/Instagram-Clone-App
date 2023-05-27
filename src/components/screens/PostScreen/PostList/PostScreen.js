import { View, Text, StyleSheet } from "react-native";

import { usePosts } from "../../../hooks/usePosts";
import PostList from "./PostList";

const Posts = () => {
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
      {!isLoading && !isError && <PostList data={data} />}
    </View>
  );
};

export default Posts;

export const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});
