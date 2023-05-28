import { View } from "react-native";

import PostListHeaderContainer from "../../components/PostListComponents/PostHeader/PostListHeaderContainer";
import PostScreen from "../../components/PostListComponents/PostList/PostScreen";

const PostListScreen = () => {
  return (
    <View>
      <PostListHeaderContainer />
      <PostScreen />
    </View>
  );
};

export default PostListScreen;
