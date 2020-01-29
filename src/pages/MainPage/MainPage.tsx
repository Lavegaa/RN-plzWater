import React from "react";
import PlantTemplate from "../../components/PlantTemplate";
import { PlantContextProvider } from "../../contexts/PlantContext";
export default function MainPage() {
  return (
    <PlantContextProvider>
      <PlantTemplate />
    </PlantContextProvider>
  );
}
