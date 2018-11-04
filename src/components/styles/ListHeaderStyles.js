import { StyleSheet } from "react-native";

export default StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 10
  },
  headerTextContainer: {
    flex: 1,
    alignItems: "center"
  },
  headerText: {
    color: "#5e656c",
    fontSize: 11,
    fontWeight: "bold"
  },
  sortContainer: {
    paddingHorizontal: 10
  }
});
