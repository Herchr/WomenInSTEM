import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FlipCard from "react-native-flip-card";

const { height, width } = Dimensions.get("screen");
const CardInfo = (props) => {
  const { woman } = props;

  return (
    <SafeAreaView style={styles.container}>
      {/* <TouchableOpacity>
        <Ionicons name="close" size={50} color="#555" />
      </TouchableOpacity> */}
      <Text style={styles.header}>{woman.name}</Text>
      <View style={styles.scrollViewContainer}>
        <ScrollView>
          <Text style={styles.content}>{woman.content}</Text>
        </ScrollView>
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
    paddingTop: 50,
  },
  header: {
    color: "#222",
    fontSize: 30,
    fontWeight: "500",
    fontFamily: "Futura",
    marginTop: 80,
  },
  scrollViewContainer: {
    height: height * 0.6,
    marginHorizontal: width * 0.1,
    marginTop: height * 0.05,
  },
  content: {
    color: "#333",
    fontSize: 20,
    fontWeight: "400",
    fontFamily: "Futura",
  },
});
export default CardInfo;
