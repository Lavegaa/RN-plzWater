import React from "react";
import { Text, TouchableHighlight, View, StyleSheet } from "react-native";
import { useModalDispatch } from "../../../contexts/ModalContext";

export default function ButtonAdd() {
  const dispatch = useModalDispatch();
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => {
          dispatch({ type: "TOGGLE_ADDMODAL" });
        }}
      >
        <Text>모달 열기</Text>
      </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  }
});
