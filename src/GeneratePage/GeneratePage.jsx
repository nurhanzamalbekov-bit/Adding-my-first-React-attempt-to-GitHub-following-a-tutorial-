import React from "react";
import { QrCodeGenerator } from "../components/Generate/QrCodeGenerator";
import { GenerateHistory } from "../components/GenerateHistory/GenerateHistory";

const pageStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "20px",
};

export const GeneratePage = () => {
  return (
    <div style={pageStyle}>
      <QrCodeGenerator />

      <h2>История генерирования</h2>
      <GenerateHistory />
    </div>
  );
};
