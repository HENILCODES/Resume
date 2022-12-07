import React from "react";
import MessageBox from "./MessagesBox"
function ChatBox() {
  return (
    <div className="chats" id="chat_s">
      <MessageBox senderName="Henil" senderChat="Hello" senderTime="12:00 am" />
    </div>
  );
}

export default ChatBox
