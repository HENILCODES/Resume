import React from "react";
import Header from "./components/Header";
import InputChatBox from "./components/InputChatBox";
import MessageContext from "./components/templates/MessageContext";
import "./App.css";

function App() {

  return (
    <div className="header">
      <div className="main">
        <MessageContext.Provider value={{senderNameContext:'Henil',sendChatToContext:'s'}}>
          <Header userName="Henil" />
          <InputChatBox userName="Henil"/>
        </MessageContext.Provider>
      </div>
    </div>
  );
}

export default App;
