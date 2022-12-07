import React from "react";

function DateMessageBox(props) {
  let ss = new Date();
  return <span> {ss.toLocaleString("default")}</span>;
}

export default DateMessageBox;
