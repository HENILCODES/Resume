import React, { useState } from "react";

let contextData = {
  Uname: "Guest",
  setName: {},
};

const MessageContext = React.createContext(contextData);

export default MessageContext;

export function MessageContexProvider(props) {
  let [Data, setData] = useState("Guest");

  let NameHandler = (d) => {
    setData(d);
  };
  let valueOfContext = {
    Uname: Data,
    setName: NameHandler,
  };
  return (
    <MessageContext.Provider value={valueOfContext}>
      {props.children}
    </MessageContext.Provider>
  );
}
