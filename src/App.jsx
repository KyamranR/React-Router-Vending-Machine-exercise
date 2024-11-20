import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendingMachine from "./components/VendingMachine";
import Snack1 from "./components/Snack1";
import Snack2 from "./components/Snack2";
import Snack3 from "./components/Snack3";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/snack1" element={<Snack1 />} />
          <Route path="/snack2" element={<Snack2 />} />
          <Route path="/snack3" element={<Snack3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
