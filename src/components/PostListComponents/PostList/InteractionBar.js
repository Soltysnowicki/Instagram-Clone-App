import { View } from "react-native";
import styles from "./PostList.style";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
const InteractionBar = () => {
  return (
    <View style={styles.InteractionBar}>
      <SimpleLineIcons name="heart" size={24} color="black" />
      <Feather name="message-circle" size={24} color="black" />
      <SimpleLineIcons name="paper-plane" size={24} color="black" />
      <Fontisto style={styles.FavIcon} name="favorite" size={24} color="black" />
    </View>
  );
};

export default InteractionBar;
