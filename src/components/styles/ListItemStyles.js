import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    borderRadius: 3,
    backgroundColor: "#f5f5f7",
    width: width - 19,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 0.6
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  dataContainer: {
    paddingVertical: 5,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  dataTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  symbolContainer: {
    borderRightColor: "rgba(220,8,86,.3)",
    borderRightWidth: 0.5
  },
  symbolText: {
    fontSize: 13,
    color: "#188fff",
    fontWeight: "bold"
  },
  companyNameText: {
    color: "#5e656c",
    fontSize: 10,
    marginHorizontal: 4
  },
  priceText: {
    fontWeight: "700"
  },
  deleteButton: {
    padding: 8
  }
});
