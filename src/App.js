import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import SoleaPage from "./pages/soleapage";
import ComoElVientoPage from "./pages/comoelvientopage";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="solea" element={<SoleaPage />} />
        <Route path="comoelviento" element={<ComoElVientoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
