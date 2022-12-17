import { Fragment, memo } from "react";
import ReactDOM from "react-dom";

function Error_Log(props) {
  let closeHandler = () => {
    props.setClose(false);
  };

  let Error = () => {
    return (
      <div className="Error_Box">
        <div className="Error_Title">
          <div className="div"></div>
          <div className="Title">Error</div>
          <div className="bi bi-x-lg" onClick={closeHandler}></div>
        </div>
        <div className="Error_Desc">
          <div className="bi bi-shield-fill-exclamation icon2"></div>
          <div className="Error">{props.Error}</div>
          <div></div>
        </div>
      </div>
    );
  };
  return (
    <Fragment>
      {ReactDOM.createPortal(<Error />, document.getElementById("Error_Log"))}
    </Fragment>
  );
}

export default memo(Error_Log);
