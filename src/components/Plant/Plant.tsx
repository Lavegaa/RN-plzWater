import React from "react";
import { Text } from "react-native";

export default function Plant({ children }: { children: React.ReactNode }) {
  return <Text>{children}</Text>;
}
