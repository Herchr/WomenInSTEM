import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import Carousel from "./components/Carousel";
import { women } from "./womenObjects";
import { Octicons } from "@expo/vector-icons";
import { Audio } from "expo-av";

const source = require("./assets/sound/menu.mp3");

export default function App() {
  const [mute, setMute] = useState(false);
  //const [sound, setSound] = useState();
  // async function fetchSound() {
  //   const { sound, status } = await Audio.Sound.createAsync(source, {
  //     shouldPlay: mute,
  //   });
  //   setSound(sound);
  // }
  // async function playSound(sound) {
  //   console.log("Loading Sound");
  //   //setSound(sound);
  //   console.log("Playing Sound");
  //   const { sound, status } = await Audio.Sound.createAsync(source, {
  //     shouldPlay: mute,
  //   });
  //   await sound.playAsync();
  // }

  // async function pauseSound(sound) {
  //   const { sound, status } = await Audio.Sound.createAsync(source, {
  //     shouldPlay: mute,
  //   });
  //   await sound.setIsMutedAsync(true);
  // }

  // useEffect(() => {
  //   playSound();
  // }, []);

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
      <TouchableOpacity
        onPress={() => {
          //playSound();
          console.log("touched");
        }}
      >
        <Text>Press</Text>
      </TouchableOpacity>
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
