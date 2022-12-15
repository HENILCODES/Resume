import React, { memo } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="top">
      <div className="top1">
        <span>
          <a href="#ids" className="logo">
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
        >
          {" "}
        </a>
        <a className="bi bi-arrow-clockwise" href="/" id="ref">
          {" "}
        </a>
        <form className="log_Form">
          <Link type="submit" to="/login" className="login_log">
            Log out
          </Link>
        </form>
      </div>
    </div>
  );
}

export default memo(Header);
