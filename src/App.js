import React from "react";
import Header from "./components/Header";
import ChatBox from "./components/ChatBox";
import InputChatBox from "./components/InputChatBox";
import "./App.css";
import MessageContext from "./components/templates/MessageContext";

function App() {
    let messageContextDatas = (datas)=>{
        console.log(datas);
    }
  return (
    <div className="header">
      <div className="main">
        <MessageContext.Provider value={{messageData:messageContextDatas,senderNameContext:'Henil'}}>
          <Header userName="Henil" />
          <ChatBox />
          <InputChatBox userName="Henil" />
        </MessageContext.Provider>
      </div>
    </div>
  );
}

export default App;
