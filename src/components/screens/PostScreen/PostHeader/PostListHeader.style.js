import { StyleSheet } from "react-native";

export default StyleSheet.create({
  postListHeader: {
    marginTop: 30,
    width: "100%",
  },
  postListHeaderTop: {
    flexDirection: "row",
    gap: 10,
    height: 40,
    alignItems: "center",
  },
  instagramLogo: {
    fontSize: 30,
    fontWeight: 500,
    fontFamily: "Lobster",
    marginLeft: 10,
  },
  iconContainer: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
    gap: 20,
    alignItems: "center",
    marginRight: 10,
  },
});
