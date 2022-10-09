/* categoriesmodal.tsx component style */
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  modal: {
    flex: 1,
    position: "absolute",
    bottom: 30,
    left: 15,
    right: 15,
    height: 300,
    backgroundColor: "#ffffff",
    borderRadius: 30,
    zIndex: 10,
  },
  background: {
    backgroundColor: "#00000020",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  modalHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    marginHorizontal: 25,
    marginBottom: 15,
  },
  modalLeftText: {
    color: "#808080",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#808080",
    textAlign: "center",
    right: 0,
    left: 0,
    position: "absolute",
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: "10%",
  },
  categoryElement: {
    width: "33.33%",
    alignItems: "center",
    paddingBottom: 15,
  },
  categoryIcon: {
    fontSize: 28,
  },
  categoryName: {
    fontSize: 14,
    marginTop: 5,
    maxWidth: "70%",
    color: "#808080",
    textAlign: "center",
    maxHeight: 45,
    overflow: "hidden",
  },
});

export default style;
