import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  homeEmptyContainer: {
    bottom: 40,
    flex: 1,
    justifyContent: "flex-end"
  },
  homeEmptyView: {
    alignItems: "center"
  },
  textView: {
    marginVertical: 15
  },
  imageCircularView: {
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: "rgba(180, 180, 180, 0.10)",
    alignItems: "center",
    justifyContent: "center"
  },
  notesImage: {
    flex: 1,
    width: 75,
    height: 75,
    resizeMode: "contain"
  },
  textEmpty: {
    fontSize: 15,
    color: "rgba(0, 0, 0 ,0.4)",
    fontWeight: "600"
  },
  arrowView: {
    left: 40
  },
  arrowImage: {
    resizeMode: "contain"
  },
  headerStyle: {
    backgroundColor: "#6495ed"
  },
  listContainer: {
    marginTop: 20,
    paddingTop: 1,
    paddingHorizontal: 10,
    flex: 1
  }
});

export default styles;
