import React, { memo } from "react";

function Header(props) {
  return (
    <div className="top">
      <div className="top1">
        <span>
          <a href="https://henil.rf.gd/Live_Chat/" className="logo">
            Web Chat
          </a>
        </span>
        <h3 className="live_User">
          Welcome <span className="live_U"> {props.userName}</span>
        </h3>
      </div>
      <div className="top2">
        <a
          href="whatsapp://send?text=Join With Me for Live Chatting Come Fast."
          className="invite_a bi bi-whatsapp"
          title="Send To What's app"
        > </a>
        <a className="bi bi-arrow-clockwise" href="index.php" id="ref"> </a>
        <form  method="post" className="log_Form">
          <button name="Log_Out" type="submit" className="login_log">
            Log out
          </button>
        </form>
      </div>
    </div>
  );
}

export default memo(Header);
