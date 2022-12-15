import React, { memo, useContext, useState } from "react";
import MessageContext from "./templates/MessageContext";

function InputChatBox(props) {
  const [chat, setChat] = useState({ chat: "" });
 let ctx = useContext(MessageContext);
  let submitHandler = (event) => {
    event.preventDefault();
    if (chat.chat.length === 0) {
      return;
    }
    props.setsendData({
      ...chat,
      sender: ctx.Uname,
      sendTime: new Date().toLocaleString("default"),
    });
    setChat({ chat: "" });
  };

  let inputChatHandler = (event) => {
    setChat({ chat: event.target.value });
  };

  return (
    <div className="bottom">
      <div id="chat_in">
        <form className="form" onSubmit={submitHandler}>
          <input
            type="text"
            value={chat.chat}
            onChange={inputChatHandler}
            className="Chatinput"
            id="ChatsBox"
            autoComplete="off"
            placeholder="Type Message"
            title="Type Message"
          />
          <button className="send bi bi-send"> </button>
        </form>
      </div>
    </div>
  );
}

export default memo(InputChatBox);
