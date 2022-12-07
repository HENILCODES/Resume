import React, { useEffect, useState } from "react";
import MessageBox from "./MessagesBox";
function ChatBox() {
  
  const [message,setMessage] = useState();

  let fetchDataToApi =async ()=>{
    let response = await fetch("https://react-app-5b8a3-default-rtdb.firebaseio.com/liveChat.json");
    let data = await response.json();
    setMessage(Object.values(data))
  }
  useEffect(()=>{
    fetchDataToApi();
  },[])
  
  return (
    <div className="chats" id="chat_s">
      { message && message.map((element,index)=>{
        return <MessageBox key={index} senderName={element.sender} senderChat={element.chat} senderTime={element.sendTime} />
      })}
      <p id="ids"></p>
    </div>
  );
}

export default ChatBox;
