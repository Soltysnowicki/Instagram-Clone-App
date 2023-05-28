import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainPic: {
    width: "100%",
    height: 400,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  listItemContainer: {
    margin: 8,
  },
  font: {
    color: "black",
  },
  headerContainer: {
    backgroundColor: "white",
  },
  profileBar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  userName: {
    marginLeft: 10,
    marginRight: 200,
  },
  InteractionBar: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
  },
  logo: {
    padding: 10,
  },
  postListHeader: {
    width: "100%",
    flexDirection: "row",
  },
  FavIcon: {
    position: "absolute",
    right: 0,
  },
  moreIcon: {
    position: "absolute",
    right: 0,
  },
});
