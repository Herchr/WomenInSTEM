import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableHighlight,
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
import FlipCard from "./FlipCard/FlipCard";

const { height, width } = Dimensions.get("screen");

const Carousel = (props) => {
  const { women } = props;

  const [showCardInfo, setShowCardInfo] = useState(false);
  const [expandOut, setExpandOut] = useState(false);
  const scrollX = useSharedValue(0);
  const expand = useSharedValue(0);
  const backHeight = useDerivedValue(() => {
    return interpolate(expand.value, [0, 1], [422, height], Extrapolate.CLAMP);
  });
  const backWidth = useDerivedValue(() => {
    return interpolate(expand.value, [0, 1], [273, width], Extrapolate.CLAMP);
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  useEffect(() => {
    if (expandOut) {
      expand.value = withTiming(
        1,
        {
          easing: Easing.ease,
        },
        (finish) => {
          !finish ? (expand.value = 0) : null;
        }
      );
    } else {
      expand.value = withTiming(
        0,
        {
          easing: Easing.ease,
        },
        (finish) => {
          !finish ? (expand.value = 0) : null;
        }
      );
    }
  }, [expandOut]);
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
                flipHorizontal={true}
                flipVertical={false}
                friction={18}
                expandOut={expandOut}
                setExpandOut={setExpandOut}
                clickable={!showCardInfo}
                onFlipStart={() => {
                  if (showCardInfo == false) {
                    expand.value = 0;
                  }
                  setShowCardInfo(!showCardInfo);
                  // expand.value =
                  //   expand.value == 1
                  //     ? 0
                  //     : withTiming(
                  //         1,
                  //         {
                  //           duration: 600,
                  //           easing: Easing.ease,
                  //         },
                  //         (finish) => {
                  //           !finish ? (expand.value = 0) : null;
                  //         }
                  //       );
                }}
                alignHeight
                alignWidth
              >
                <View style={{}}>
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
                      { overflow: "hidden", position: "absolute" },
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
