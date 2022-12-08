import React, { useEffect, useState } from "react";
import MessageBox from "./MessagesBox";
function ChatBox(props) {
  const [message, setMessage] = useState();

  let fetchDataToApi = async () => {
    console.log("Feycj");
    let response = await fetch(
      "https://react-app-5b8a3-default-rtdb.firebaseio.com/liveChat.json"
    );
    let data = await response.json();
    setMessage(Object.values(data));
  };

  useEffect(() => {
    fetchDataToApi();
  }, [props.datasend]);

  return (
    <div className="chats" id="chat_s">
      {message &&
        message.map((element, index) => {
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
  );
}

export default ChatBox;
