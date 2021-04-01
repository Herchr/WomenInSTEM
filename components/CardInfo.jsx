import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

const CardInfo = (props) => {
  const { woman } = props;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{woman.name}</Text>
      <Text style={styles.content}>{woman.content}</Text>
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
  content: {
    color: "#222",
    fontSize: 20,
    fontWeight: "400",
    paddingHorizontal: 50,
    paddingTop: 30,
  },
});
export default CardInfo;
