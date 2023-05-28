import { Text, View, Image } from "react-native";
import styles from "./PostList.style";
import { Feather } from "@expo/vector-icons";
const PostProfileBar = () => {
  return (
    <View style={styles.profileBar}>
      <Image
        style={styles.avatar}
        source={{
          uri: "https://rickandmortyapi.com/api/character/avatar/85.jpeg",
        }}
      />
      <Text style={styles.userName}>Andrzej</Text>
      <Feather
        style={styles.moreIcon}
        name="more-horizontal"
        size={24}
        color="black"
      />
    </View>
  );
};

export default PostProfileBar;
