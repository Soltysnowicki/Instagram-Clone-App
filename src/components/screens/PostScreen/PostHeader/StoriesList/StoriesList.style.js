import { StyleSheet } from "react-native";

export default StyleSheet.create({
  stories: {
    paddingVertical: 20,
  },
  storiesContainer: {
    flexDirection: "column",
    paddingHorizontal: 8,
    position: "relative",
  },
  yourStoryElement: {
    position: "absolute",
    bottom: 15,
    right: 10,
    zIndex: 1,
  },
  storyElement: {
    width: 68,
    height: 68,
    backgroundColor: "white",
    borderWidth: 1.8,
    borderRadius: 100,
    borderColor: "#c13584",
    justifyContent: "center",
    alignItems: "center",
  },
  storyImage: {
    resizeMode: "cover",
    width: "92%",
    height: "92%",
    borderRadius: 100,
    backgroundColor: "orange",
  },
 storyText: {
    textAlign: "center",
    fontSize: 10,
 }
});
