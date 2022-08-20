import React, { useState } from "react";

export default function Text() {
  const [Text, setText] = useState("");
  let Textlength = Text.length;

  return (
    <div className="pt-5 w-75 m-auto">
      <div className="form-floating my-5">
        <textarea
          className="form-control border border-info bg-info text-wrap bg-opacity-10 rounded-end"
          placeholder="Type Word"
          style={{ height: "300px" }}
          id="floatingTextarea"
          //   value={Text}
          onChange={() => {
            setText(document.getElementById('floatingTextarea').value);
          }}
        ></textarea>
        <label htmlFor="floatingTextarea2" className="fw-normal">
          Enter Text
        </label>
        <div className="group mt-2 opacity-50 fs-5">
          <div className="d-flex flex-wrap">
            <div className="mx-3">
              {" "}
              Character :{" "}
              <span className="badge rounded-5 bg-dark">0</span>
            </div>
            <div className="mx-3">
              {" "}
              Word : <span className="badge rounded-4 bg-dark">25 </span>
            </div>
            <div className="mx-3">
              {" "}
              Length :{" "}
              <span className="badge rounded-5 bg-dark">{Textlength} </span>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        <div className="m-2">
          <button type="button gap-3" className="btn btn-primary">
            UpperCase
          </button>
        </div>
        <div className="m-2">
          <button type="button gap-3" className="btn btn-primary">
            LowerCase
          </button>
        </div>
        <div className="m-2">
          <button type="button gap-3" className="btn btn-primary">
            Capitlize
          </button>
        </div>
      </div>
    </div>
  );
}
