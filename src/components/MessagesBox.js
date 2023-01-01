import React, { useState } from "react";

function MessageBox(props) {
  let [optionActive, setOptionActive] = useState(false);

  let optionClickHandler = () => {
    setOptionActive(true);
    // console.log(optionActive);
  };
  let optionCloseHandler = ()=>{
    setOptionActive(false);
  }
  let copyHandler = ()=>{
    console.log(props.senderChat);
    optionCloseHandler();
  }
  return (
    <>
      <div className="message">
        <div className="user">
          <span>{props.senderName}</span>
          <span className="bi bi-chevron-down" onMouseEnter={optionClickHandler} onMouseLeave={optionCloseHandler}>
          {optionActive && (
            <ul className="option_message">
              <li onClick={copyHandler}>Copy</li>
            </ul>
          )}
          </span>
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
