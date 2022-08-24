import React from "react";
import Textfun from "./home";
import Manu from "./Manu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculater from "./Calculater";
export default function App() {
  let Text = ()=>{
    return(
      <>
      <Manu Home="active"/>
      <Textfun/>
      </>
    )
  }
  let Calculat = ()=>{
    return(
      <>
      <Manu Calculate="active"/>
      <Calculater/>
      </>
    )
  }
  return (
    <>
      <Router>
        <Manu />
        <div className="my-5 py-1"></div>
        <Routes>
          <Route path="/" element={<Text />} />
          <Route path="/Calculater" element={<Calculat />} />
        </Routes>
      </Router>
    </>
  );
}
