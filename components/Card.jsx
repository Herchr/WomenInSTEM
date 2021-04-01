import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const Card = (props) => {
  const { woman } = props;
  return (
    <View style={styles.container}>
      <View style={styles.shadow}>
        <Image
          style={styles.cardStyle}
          source={woman.illustration}
          resizeMode={"stretch"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  cardStyle: {
    height: height * 0.5,
    width: width * 0.7,
    borderRadius: 20,
  },
  shadow: {
    shadowColor: "#000",
    shadowRadius: 20,
    shadowOpacity: 0.6,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
});
export default Card;
