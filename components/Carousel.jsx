import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import Card from "./Card";
import CardInfo from "./CardInfo";
import Animated, {
  useSharedValue,
  useDerivedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
  Extrapolate,
  withTiming,
  Easing,
} from "react-native-reanimated";
import FlipCard from "react-native-flip-card";

const { height, width } = Dimensions.get("screen");

const Carousel = (props) => {
  const { women } = props;

  const [showCardInfo, setShowCardInfo] = useState(false);
  console.log(showCardInfo);
  const scrollX = useSharedValue(0);
  const expand = useSharedValue(0);
  const backHeight = useDerivedValue(() => {
    return interpolate(expand.value, [0, 1], [height * 0.5, height]);
  });
  const backWidth = useDerivedValue(() => {
    return interpolate(expand.value, [0, 1], [width * 0.7, width]);
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      console.log(event.contentOffset.x);
      scrollX.value = event.contentOffset.x;
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.bgContainer}>
        {women.map((woman, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const bgOpacity = useDerivedValue(() => {
            return interpolate(
              scrollX.value,
              inputRange,
              [0, 1, 0],
              Extrapolate.CLAMP
            );
          });
          return (
            <Animated.Image
              key={index}
              source={woman.illustration}
              blurRadius={45}
              style={[
                useAnimatedStyle(() => {
                  return { opacity: bgOpacity.value };
                }),
                StyleSheet.absoluteFillObject,
                styles.illustration,
              ]}
            />
          );
        })}
      </View>
      <Animated.ScrollView
        pagingEnabled
        horizontal
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        scrollEnabled={!showCardInfo}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {women.map((woman, index) => {
          return (
            <View key={index}>
              <FlipCard
                style={styles.flipCard}
                friction={10}
                flipHorizontal={true}
                flipVertical={false}
                clickable={true}
                onFlipStart={(isFlipEnd) => {
                  setShowCardInfo(!showCardInfo);
                  expand.value =
                    expand.value == 1
                      ? withTiming(0, { duration: 500 })
                      : withTiming(1, { duration: 500 });
                }}
                onFlipEnd={() => {}}
                alignHeight
                alignWidth
                useNativeDriver={true}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                  }}
                >
                  <Card woman={woman} />
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                  }}
                >
                  <Animated.View
                    style={[
                      useAnimatedStyle(() => {
                        return {
                          height: backHeight.value,
                          width: backWidth.value,
                        };
                      }),
                    ]}
                  >
                    <CardInfo woman={woman} />
                  </Animated.View>
                </View>
              </FlipCard>
            </View>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
  },
  bgContainer: StyleSheet.absoluteFillObject,
  illustration: {
    height: height,
    width: width * 1.5,
    resizeMode: "stretch",
  },
  flipCard: {},

  cardBack: {
    borderRadius: 20,
    backgroundColor: "#fff",
    opacity: 0.2,
    zIndex: -3,
  },
});

export default Carousel;
