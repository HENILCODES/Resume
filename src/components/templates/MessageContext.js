import React, { useState } from "react";

let contextData = {
  Uname: "Guest",
  isLogin: false,
  Logout: {},
  setContexts: {},
  Title: "",
};

const MessageContext = React.createContext(contextData);

export default MessageContext;

export function MessageContexProvider(props) {
  let [Data, setData] = useState("Guest");
  let [isLogin, setIsLogin] = useState(false);

  let ContextHandler = (setUName) => {
    setData(setUName);
    setIsLogin(true);
  };
  let setLogout = () => {
    setData("Guest");
    setIsLogin(false);
  };
  let valueOfContext = {
    Uname: Data,
    isLogin: isLogin,
    Logout: setLogout,
    setContexts: ContextHandler,
    Title: "Chat Site",
  };
  return (
    <MessageContext.Provider value={valueOfContext}>
      {props.children}
    </MessageContext.Provider>
  );
}
