import React, { useState } from "react";
import {
  Text,
  TextInput,
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
import { usePlantDispatch } from "../../../contexts/PlantContext";

export default function ModalAdd() {
  const modalState = useModalState();
  const modalDispatch = useModalDispatch();
  const plantDispatch = usePlantDispatch();
  const [name, setName] = useState("");
  const [inputDay, setInputDay] = useState("");
  const [day, setDay] = useState(0);
  const handleInput = inputDay => {
    setDay(parseInt(inputDay));
    setInputDay(inputDay);
  };
  const handleSubmit = () => {
    plantDispatch({ type: "CREATE", name: name, waterDay: day });
    modalDispatch({ type: "TOGGLE_ADDMODAL" });
    setDay(0);
    setInputDay("");
    setName("");
  };
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
        <Text>식물 등록</Text>
        <Text>식물 이름</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="식물 이름을 입력해 주세요."
          onChangeText={name => setName(name)}
          value={name}
        />
        <Text>식물 물주는 날</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="식물 물주는 날을 입력해 주세요."
          onChangeText={inputDay => handleInput(inputDay)}
          value={inputDay}
        />
        <TouchableHighlight onPress={handleSubmit}>
          <Text>등록</Text>
        </TouchableHighlight>
        <Text>
          {name},{day}
        </Text>
        <TouchableHighlight
          onPress={() => {
            modalDispatch({ type: "TOGGLE_ADDMODAL" });
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
