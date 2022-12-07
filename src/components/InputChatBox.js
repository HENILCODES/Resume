import React, { memo, useState } from "react";

function InputChatBox(props) {
  const [message, setMessage] = useState({
    chat: "",
    sender: "",
    sendTime: "",
  });

  let submitHandler = async (event) => {
    event.preventDefault();
    if (message.chat.length === 0) {
      return;
    }
    setMessage({ chat: "" });
    await fetch(
      "https://react-app-5b8a3-default-rtdb.firebaseio.com/liveChat.json",
      {
        method: "POST",
        body: JSON.stringify(message),
        headers: { "content-type": "application/json" },
      }
    ).catch((Error) => {
      console.log(Error.message);
    });
  };

  let inputChatHandler = (event) => {
    setMessage({
      chat: event.target.value,
      sender: props.userName,
      sendTime: new Date().toLocaleString("default"),
    });
  };

  return (
    <div className="bottom">
      <div id="chat_in">
        <form className="form" onSubmit={submitHandler}>
          <input
            type="text"
            onChange={inputChatHandler}
            className="input"
            id="ChatsBox"
            value={message.chat}
            autoComplete="off"
            placeholder="Type Message"
            title="Type Message"
          />
          <button className="send bi bi-send" name="Done">
            {" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default memo(InputChatBox);
