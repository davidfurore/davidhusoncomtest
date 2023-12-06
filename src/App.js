import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import SoleaPage from "./pages/soleapage";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="solea" element={<SoleaPage />} />
      </Routes>
    </BrowserRouter>
  );
}
