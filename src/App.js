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
  let Home = ()=>{
    return(
      <>
        <div className="container text-center">
          <h3>That Website Create For String Editing.</h3>
          <h4 className="pt-2">You can also Find Multiplication table.</h4>
        </div>
      </>
    )
  }
  return (
    <>
      <Router>
        <Manu />
        <div className="my-5 pb-5"></div>
        <Routes>
          <Route path="/TextEdit" element={<Home />} />
          <Route path="/String" element={<Text />} />
          <Route path="/Calculater" element={<Calculat />} />
        </Routes>
      </Router>
    </>
  );
}
