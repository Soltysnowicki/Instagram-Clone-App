import { FlatList, Text, Image, View } from "react-native";

import styles from "./PostList.style";
import PostProfileBar from "./PostProfileBar";
import InteractionBar from "./InteractionBar";

const ListItemComponent = ({ title, url }) => (
  <View style={styles.listItemContainer}>
    <PostProfileBar />
    <Image style={styles.mainPic} source={{ uri: url }} />
    <InteractionBar />
    <Text style={styles.font}>100 likes</Text>
    <Text style={styles.font}>
      <Text>Andrzej </Text>
      {title}
    </Text>
  </View>
);

const PostList = ({ data = [] }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return <ListItemComponent title={item.title} url={item.url} />;
      }}
    />
  );
};

export default PostList;
