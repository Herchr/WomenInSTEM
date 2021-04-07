import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Carousel from "./components/Carousel";
import { women } from "./womenObjects";

export default function App() {
  return (
    <View style={styles.container}>
      <Carousel women={women} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
