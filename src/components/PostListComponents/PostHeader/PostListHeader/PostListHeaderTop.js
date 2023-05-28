import { View, Text } from "react-native";
import styles from "../PostListHeader.style";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";


const PostListHeaderTop = () => {
  

  return (
    <View style={styles.postListHeaderTop}>
      <Text style={styles.instagramLogo}>Instagram</Text>
      <View style={styles.iconContainer}>
        <Feather name="message-circle" size={24} color="black" />
        <SimpleLineIcons name="paper-plane" size={24} color="black" />
        <Fontisto name="favorite" size={24} color="black" />
      </View>
    </View>
  );
};

export default PostListHeaderTop;
