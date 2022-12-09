import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import MessageBox from "./components/MessagesBox";
import InputChatBox from "./components/InputChatBox";
import MessageContext from "./components/templates/MessageContext";

function App() {
  let [apiData, getMessageApi] = useState(false);
  let dataSendHandler = async (ChatData) => {
    console.log("data Send start");
    await fetch(
      "https://henil-2bfd8-default-rtdb.firebaseio.com/liveChat.json",
      {
        method: "POST",
        body: JSON.stringify(ChatData),
        headers: { "content-type": "application/json" },
      }
    ).catch((Error) => {
      console.log(Error.message);
    });

    console.log("data Send end", ChatData);
    dataGetHandler();
  };

  let dataGetHandler = async () => {
    console.log("get");
    let response = await fetch(
      "https://henil-2bfd8-default-rtdb.firebaseio.com/liveChat.json"
    );
    let data = await response.json();
    getMessageApi(Object.values(data).reverse());
    console.log("end get");
  };
useEffect(()=>{
  dataGetHandler();
},[])
  return (
    <div className="header">
      <div className="main">
        <MessageContext.Provider
          value={{ senderNameContext: "Henil", sendChatToContext: "s" }}
        >
          <Header userName="Henil" />
          <div className="chats" id="chat_s">
            {apiData &&
              apiData.map((element, index) => {
                return (
                  <MessageBox
                    key={index}
                    senderName={element.sender}
                    senderChat={element.chat}
                    senderTime={element.sendTime}
                  />
                );
              })}
          </div>
          <InputChatBox userName="Henil" setsendData={dataSendHandler} />
        </MessageContext.Provider>
      </div>
    </div>
  );
}

export default App;
