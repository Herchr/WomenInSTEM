import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Pressable,
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
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>{woman.content}</Text>
        </View>
      </ScrollView>
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
