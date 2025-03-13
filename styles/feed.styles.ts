import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  postContainer: {
    marginBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 14,
    fontWeight: "bold",
  },
  postImage: {
    width: "100%",
    height: 400,
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 10,
    gap: 12,
  },
  likes: {
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  caption: {
    paddingHorizontal: 10,
  },
  comments: {
    paddingHorizontal: 10,
    color: "gray",
  },
  bookmark: {
    marginLeft: "auto",
  },
});
