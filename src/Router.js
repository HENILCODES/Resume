import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Login";
export default function Router() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} exact />
          <Route path="/login" element={<Login />} exact/>
          <Route path="/*" element={<h1>404 Page Not Found</h1>} exact />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
