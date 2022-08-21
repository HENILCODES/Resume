import React from "react";
import Textfun from "./home";
import Manu from "./Manu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculater from "./Calculater";
export default function App() {
  return (
    <>
      <Router>
        <Manu />
        <div className="my-5 py-1"></div>
        <Routes>
          <Route path="/" element={<Textfun />} />
          <Route path="/Calculater" element={<Calculater />} />
        </Routes>
      </Router>
    </>
  );
}
