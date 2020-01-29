import React from "react";
import { Text } from "react-native";

interface PlantProps {
  children: React.ReactNode;
}

export default function Plant({ children }: PlantProps) {
  return <Text>{children}</Text>;
}
