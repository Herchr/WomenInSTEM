import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import Modal from "react-native-modal";

const { height, width } = Dimensions.get("screen");
const Popup = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={{}}>
      <Modal
        isVisible={showModal}
        onBackdropPress={() => {
          setShowModal(false);
        }}
        animationIn="zoomIn"
        animationOut="zoomOut"
        animationInTiming={500}
        animationOutTiming={500}
      >
        <View style={styles.modal}>
          <View style={styles.topSection}>
            <Image source={props.img} style={styles.img} />
            <View style={styles.titleContainer}>
              <Text
                style={[styles.text, styles.titleText]}
                adjustsFontSizeToFit={true}
                numberOfLines={1}
              >
                {props.title}
              </Text>
            </View>
          </View>
          <View
            style={{
              borderWidth: StyleSheet.hairlineWidth,
              width: width * 0.8,
              alignSelf: "center",
            }}
          />
          <View style={styles.content}>
            <Text style={styles.text}>{props.content}</Text>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          setShowModal(true);
        }}
        style={{ top: 3 }}
      >
        <Text
          style={{
            color: "blue",
            fontSize: 20,
            fontWeight: "400",
            fontFamily: "Futura",
          }}
        >
          {props.linkText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    //height: height * 0.5,
    //width: width * 0.8,
    flex: -1,
    backgroundColor: "white",
    borderRadius: 20,
    alignSelf: "center",
  },
  content: {
    flex: -1,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  img: {
    height: 120,
    width: 120,
    left: 15,
  },
  text: { color: "#333", fontSize: 24, fontFamily: "Futura" },

  topSection: {
    flex: -1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 10,
  },
  titleContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  titleText: {
    fontWeight: "700",
    fontSize: 35,
    flex: -1,
  },
});
export default Popup;
