import React, { useState } from "react";
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
import { Audio } from 'expo-av';

const source = require('./assets/sound/menu.mp3');

export default function App() {
  const [mute, setMute] = useState(false);
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       source
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);
  
 
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
      <Button title="Play Sound" onPress={playSound} />
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
