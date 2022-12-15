import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import UserLoG from "./UserLoG";
export default function Router() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} exact />
          <Route path="/login" element={<UserLoG Login={true} />} exact/>
          <Route path="/signup" element={<UserLoG Login={false} />} exact/>
          <Route path="/*" element={<h1>404 Page Not Found</h1>} exact />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
