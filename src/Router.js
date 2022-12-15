import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

export default function Router() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/login" element={"S"} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
