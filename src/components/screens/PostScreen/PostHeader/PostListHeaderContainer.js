import { View, Image } from "react-native";
import styles from "./PostListHeader.style";
import PostListHeaderTop from "./PostListHeader/PostListHeaderTop";
import StoriesList from "./StoriesList/StoriesList";

const PostListHeaderContainer = () => {
  return (
    <View style={styles.postListHeader}>
      <PostListHeaderTop />
      <StoriesList />
    </View>
  );
};

export default PostListHeaderContainer;
