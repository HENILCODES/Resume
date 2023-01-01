import React, { useState } from "react";

function MessageBox(props) {
  let [copyActive, setCopyActive] = useState(false);
  let copyHandler = () => {
    navigator.clipboard.writeText(props.senderChat);
    setCopyActive(true);
  };
  let copyDeactive = () => {
    setCopyActive(false);
  };
  let classIcon = copyActive ? "bi bi-check2-all" : "bi bi-clipboard2-plus";

  return (
    <>
      <div className="message" onMouseLeave={copyDeactive}>
        <div className="user">
          <span>{props.senderName}</span>
          <i
            className={`${classIcon} optionsIcon`}
            onClick={copyHandler}
            
          ></i>
        </div>
        <div className="userchat">
          <span> {props.senderChat} </span>
        </div>
        <div className="time">
          <span>{props.senderTime}</span>
        </div>
      </div>
    </>
  );
}

export default MessageBox;
