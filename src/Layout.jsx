import { Navgigation } from "./components/Navigation/Navgigation";
import { Routes, Route } from "react-router-dom";
import { GeneratePage } from "./GeneratePage/GeneratePage";
import { ScanPage } from "./ScanPage/ScanPage"; 
const Layout = () => {

  return (
    <div>
      <Navgigation />

      <Routes>
        <Route path="/generate" element={<GeneratePage />}/>
        <Route path="/scan" element={<ScanPage/>} />
      </Routes>
    </div>
  );
};

export { Layout };
