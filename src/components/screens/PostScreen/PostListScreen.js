import { View } from "react-native";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import PostListHeaderContainer from "./PostHeader/PostListHeaderContainer";
import PostScreen from "./PostList/PostScreen";


const queryClient = new QueryClient();
const PostListScreen = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <View>
        <PostListHeaderContainer />
        <PostScreen />

      </View>
    </QueryClientProvider>
  );
};

export default PostListScreen;
