import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  text,
  StyleSheet,
  Dimensions,
} from "react-native";

const { height, width } = Dimensions.get("screen");
const CardInfo = (props) => {
  const { woman } = props;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{woman.name}</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>{woman.content}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 20,
    alignItems: "center",
  },
  header: {
    color: "#222",
    fontSize: 32,
    fontWeight: "400",
    marginTop: 50,
  },
  contentContainer: {
    marginHorizontal: width * 0.1,
    marginTop: height * 0.1,
  },
  content: {
    color: "#222",
    fontSize: 20,
    fontWeight: "400",
    //borderWidth: 5,
  },
});
export default CardInfo;
