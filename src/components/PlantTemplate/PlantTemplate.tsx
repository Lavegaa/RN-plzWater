import React from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";
import Plant from "../Plant";
import { usePlantState } from "../../contexts/PlantContext";
import ModalAdd from "../Modal/ModalAdd";
import ButtonAdd from "../Button/ButtonAdd";

export default function PlantTemplate() {
  const plantState = usePlantState();
  return (
    <View style={styles.container}>
      <FlatList
        data={plantState}
        renderItem={({ item }) => (
          <Plant>
            {item.id}: {item.name}
          </Plant>
        )}
      />
      <ButtonAdd />
      <ModalAdd />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
