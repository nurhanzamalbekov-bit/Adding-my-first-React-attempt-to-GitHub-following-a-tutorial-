import { QrCodeGenerator } from "./components/Generate/QrCodeGenerator";
import { QrCodeScanner } from "./components/Scan/QrCodeScanner";
import { Navgigation } from "./components/Navigation/Navgigation";
import { Routes, Route } from "react-router-dom";
import { GenerateHistory } from "./components/GenerateHistory/GenerateHistory";
import { ScanHistory } from "./components/ScanHistory/ScanHistory";
const Layout = () => {

  return (
    <div>
      <Navgigation />

      <Routes>
        <Route path="/generate" element={<QrCodeGenerator />} />
        <Route path="/scan" element={<QrCodeScanner />} />
        <Route path="/scanHistory" element={<ScanHistory/>} />
        <Route path="/generateHistory" element={<GenerateHistory/>} />
      </Routes>
    </div>
  );
};

export { Layout };
