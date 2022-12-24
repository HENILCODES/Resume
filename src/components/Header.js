import React, { memo, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MessageContext from "./templates/MessageContext";

function Header(props) {
  let navigate = useNavigate();

  let ctx = useContext(MessageContext);
  let LogoutHandler = () => {
    ctx.Logout();
    navigate("/login");
  };
  return (
    <div className="top">
      <div className="top1">
        <span>
          <span className="logo">{ctx.Title}</span>
        </span>
        <h3 className="live_User">
          Welcome <span className="live_U"> {ctx.Uname}</span>
        </h3>
      </div>
      <div className="top2">
        <a
          href="whatsapp://send?text=Join With me on https://chat-henilcode.netlify.app/ Chatting Site."
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
        {ctx.isLogin ? (
          <Link
            type="submit"
            to="/login"
            className="login_log"
            onClick={LogoutHandler}
          >
            Log out
          </Link>
        ) : (
          <Link to="/login" className="login_log">
            Log in
          </Link>
        )}
      </div>
    </div>
  );
}

export default memo(Header);
