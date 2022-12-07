import React from "react";
import DateMessageBox from './templates/DateMessageBox'
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
        <DateMessageBox date={props.senderTime}/>
      </div>
    </div>
  );
}

export default MessageBox