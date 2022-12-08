import React, { useEffect, useState } from "react";
import MessageBox from "./MessagesBox";
function ChatBox(props) {
  const [message, setMessage] = useState();

  let sendDataToApi = async (datas)=>{
    await fetch(
      "https://henil-2bfd8-default-rtdb.firebaseio.com/liveChat.json",
      {
        method: "POST",
        body: JSON.stringify(datas),
        headers: { "content-type": "application/json" },
      }
      ).catch((Error) => {
        console.log(Error.message);
      });
      console.log("send");
  }

  let fetchDataToApi = async () => {
    console.log("get");
    let response = await fetch(
      "https://henil-2bfd8-default-rtdb.firebaseio.com/liveChat.json"
      );
      let data = await response.json();
      setMessage(Object.values(data));
      console.log("end get");
  };
  console.log("ChatBox");
  useEffect(() => {
    sendDataToApi(props.datasend);
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

export default React.memo(ChatBox);
