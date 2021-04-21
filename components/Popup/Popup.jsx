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
    <View style={{ justifyContent: "flex-end" }}>
      <Modal
        isVisible={showModal}
        onBackdropPress={() => {
          setShowModal(false);
        }}
        animationIn="zoomIn"
        animationOut="zoomOut"
      >
        <View style={styles.modal}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              borderWidth: 2,
            }}
          >
            <Image
              source={props.img}
              style={{ height: 100, width: 100, borderWidth: 2 }}
            />
            <Text style={{ borderWidth: 2, flex: 1 }}>{props.title}</Text>
          </View>
          <View style={{ flex: 3 }}>
            <Text>{props.popupContent}</Text>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          console.log("pressed link");
          setShowModal(true);
        }}
        style={{ top: 3 }}
      >
        <Text style={{ color: "blue", fontSize: 20, fontWeight: "500" }}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    height: height * 0.5,
    width: width * 0.8,
    backgroundColor: "white",
    borderRadius: 20,
    alignSelf: "center",
    borderWidth: 2,
  },
});
export default Popup;
