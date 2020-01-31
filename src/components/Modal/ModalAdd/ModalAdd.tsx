import React from "react";
import {
  Text,
  Modal,
  View,
  Alert,
  TouchableHighlight,
  StyleSheet
} from "react-native";
import {
  useModalState,
  useModalDispatch
} from "../../../contexts/ModalContext";

export default function ModalAdd() {
  const modalState = useModalState();
  const dispatch = useModalDispatch();
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalState.addModal}
        onRequestClose={() => {
          Alert.alert("modal has been closed");
        }}
      >
        <Text>안녕 모달모달</Text>
        <TouchableHighlight
          onPress={() => {
            dispatch({ type: "TOGGLE_ADDMODAL" });
          }}
        >
          <Text>모달닫기</Text>
        </TouchableHighlight>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  }
});
