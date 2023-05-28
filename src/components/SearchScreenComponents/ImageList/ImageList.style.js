import { StyleSheet, Dimensions } from "react-native";

const win = Dimensions.get("window");
export default StyleSheet.create({
  mainPic: {
    height: 120,
    width: win.width / 3.05,
    marginBottom: 2,
  },
  listItemContainer: {
    flex: 1,
  },
});
