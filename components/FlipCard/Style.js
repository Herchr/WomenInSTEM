import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");
export default StyleSheet.create({
  flipCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  face: {
    height: height * 0.5,
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },

  back: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
