import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import Carousel from "./components/Carousel";
import { women } from "./womenObjects";
import { Audio } from 'expo-av';

const source = require('./assets/sound/menu.mp3');

export default function App() {
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
      <Carousel women={women} />
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
