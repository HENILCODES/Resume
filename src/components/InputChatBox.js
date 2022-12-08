import React, { memo, useState } from "react";
import ChatBox from "./ChatBox";

function InputChatBox(props) {
  const [chat, setChat] = useState({ chat: "" });
  let [sendData, setsendData] = useState({});

  let submitHandler = (event) => {
    event.preventDefault();
    if (chat.chat.length === 0) {
      return;
    }
    setsendData({
      ...chat,
      sender: props.userName,
      sendTime: new Date().toLocaleString("default"),
    });
    setChat({ chat: "" });
  };

  let inputChatHandler = (event) => {
    setChat({ chat: event.target.value });
  };

  return (
    <>
      <ChatBox datasend={sendData} />
      <div className="bottom">
        <div id="chat_in">
          <form className="form" onSubmit={submitHandler}>
            <input
              type="text"
              value={chat.chat}
              onChange={inputChatHandler}
              className="input"
              id="ChatsBox"
              autoComplete="off"
              placeholder="Type Message"
              title="Type Message"
            />
            <button className="send bi bi-send"> </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default memo(InputChatBox);
