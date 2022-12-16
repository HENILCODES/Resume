import React, { memo, useContext } from "react";
import { Link } from "react-router-dom";
import MessageContext from "./templates/MessageContext";

function Header(props) {
  let ctx = useContext(MessageContext);

  return (
    <div className="top">
      <div className="top1">
        <span>
          <a href="#ids" className="logo">
            Web Chat
          </a>
        </span>
        <h3 className="live_User">
          Welcome <span className="live_U"> {ctx.Uname}</span>
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
        <p
          className={`bi bi-arrow-clockwise ${props.DataGet}`}
          onClick={props.reFetch}
          id="ref"
        >
          {" "}
        </p>
        <form className="log_Form">
          {ctx.isLogin ? (
            <Link type="submit" className="login_log">
              Log out
            </Link>
          ) : (
            <Link to="/login" className="login_log">
              Log in 
            </Link>
          )}
        </form>
      </div>
    </div>
  );
}

export default memo(Header);
