import React from "react";
import { QrCodeScanner } from "../components/Scan/QrCodeScanner";
import { ScanHistory } from "../components/ScanHistory/ScanHistory";

const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '20px' 
};

export const ScanPage = () => {
  return (
    <div style={pageStyle}>
 
      <QrCodeScanner />
      
      <h2>История сканирования</h2>
      <ScanHistory />
    </div>
  );
};