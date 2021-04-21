import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Carousel from "./components/Carousel";
import { women } from "./womenObjects";
import { Octicons } from "@expo/vector-icons";

export default function App() {
  const [mute, setMute] = useState(false);
  return (
    <View style={styles.container}>
      {mute ? (
        <TouchableOpacity
          style={styles.muteIcon}
          onPress={() => {
            setMute(!mute);
          }}
        >
          <Octicons name="mute" size={40} color="#111" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.muteIcon}
          onPress={() => {
            setMute(!mute);
          }}
        >
          <Octicons name="unmute" size={40} color="#111" />
        </TouchableOpacity>
      )}

      <Carousel women={women} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  muteIcon: {
    position: "absolute",
    zIndex: 5,
    right: 25,
    top: 50,
  },
});
