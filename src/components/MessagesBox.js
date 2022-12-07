import React from "react";

function MessageBox(props) {
 
  return (
    <div className="message">
      <div className="user">
        <span>{props.senderName}</span>
      </div>
      <div className="userchat">
        <span> {props.senderChat} </span>
      </div>
      <div className="time">
        <span>{props.senderTime}</span>
      </div>
    </div>
  );
}

export default MessageBox;
