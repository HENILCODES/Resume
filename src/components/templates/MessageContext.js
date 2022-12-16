import React, { useState } from "react";

let contextData = {
  Uname: "Guest",
  isLogin: false,
  setContexts: {},
};

const MessageContext = React.createContext(contextData);

export default MessageContext;

export function MessageContexProvider(props) {
  let [Data, setData] = useState("Guest");
  let [isLogin, setIsLogin] = useState(false);
  
  let ContextHandler = (setUName, setLog) => {
    setData(setUName);
    setIsLogin(setLog);
  };
  let valueOfContext = {
    Uname: Data,
    isLogin: isLogin,
    setContexts: ContextHandler,
  };
  return (
    <MessageContext.Provider value={valueOfContext}>
      {props.children}
    </MessageContext.Provider>
  );
}
