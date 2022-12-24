import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import MessageBox from "./components/MessagesBox";
import InputChatBox from "./components/InputChatBox";

function App() {
  let [apiData, getMessageApi] = useState(false);
  let [stopSpiner, setStopSpiner] = useState(false);

  let dataSendHandler = async (ChatData) => {
    await fetch(
      "https://henil-2bfd8-default-rtdb.firebaseio.com/liveChat.json",
      {
        method: "POST",
        body: JSON.stringify(ChatData),
        headers: { "content-type": "application/json" },
      }
    ).catch((Error) => {
      alert(Error.message);
    });

    dataGetHandler();
  };

  let dataGetHandler = async () => {
    setStopSpiner(true);
    let response = await fetch(
      "https://henil-2bfd8-default-rtdb.firebaseio.com/liveChat.json"
    ).catch((erro) => {
      alert(erro.message);
    });
    let data = await response.json();
    getMessageApi(Object.values(data).reverse());
    setStopSpiner(false);
  };
  useEffect(() => {
    dataGetHandler();
  }, []);
  return (
    <div className="header">
      <div className="main">
        <Header reFetch={dataGetHandler} />
        <div className="chats" id="chat_s">
          {stopSpiner && (
            <div className="spiner">
              <div className="spin"></div>
              <div className="spin"></div>
              <div className="spin"></div>
            </div>
          )}

          {apiData &&
            !stopSpiner &&
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
      </div>
      <div className="footer">
        <div className="data">
          {" "}
          &copy;2022 <a href="https://henil.rf.gd"> Henil Code</a>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
