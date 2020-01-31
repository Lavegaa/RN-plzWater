import React from "react";
import PlantTemplate from "../../components/PlantTemplate";
import { PlantContextProvider } from "../../contexts/PlantContext";
import { ModalContextProVider } from "../../contexts/ModalContext";
export default function MainPage() {
  return (
    <ModalContextProVider>
      <PlantContextProvider>
        <PlantTemplate />
      </PlantContextProvider>
    </ModalContextProVider>
  );
}
