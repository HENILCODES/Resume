import React, { useState } from "react";

export default function Textfun() {

  const [Text, setText] = useState("");
  
  // handel textarea
  const textareaClick = (event) => {
    setText(event.target.value);
  }

  //Count Lenght
  let TextLength = Text.length;

  //Count Word
  let WordCount = Text.split(/\s+/).filter((n)=>{return n.length!== 0}).length;

  // Count Character
  let CharacteCount = Text.length;

  // Upppercase
  let upperCase = ()=>{
    let toUpper = Text.toUpperCase();
    setText(toUpper);
  }

  // lowercase
  let lowerCase = ()=>{
    let toLower = Text.toLowerCase();
    setText(toLower);
  }
  
  // capitlize
  let TitleCase = ()=>{
    let toSplit= Text.split(/\s+/);
    let strin = toSplit.map((n)=>{
      return n.charAt(0).toUpperCase() + n.slice(1);
    })
    let realCapital = strin.join(" ");
    setText(realCapital);
  }


  // sentence Case
  let sentenceCase = ()=>{
    let toSplit= Text.split('.');
    let strin = toSplit.map((n)=>{
      return n.charAt(0).toUpperCase() + n.slice(1);
    })
    let sentence = strin.join(".");
    setText(sentence);
  }


  // Copy Text
  let copyText = ()=>{
    navigator.clipboard.writeText(Text);
  }

  // removeSpace
  let removeSpace = ()=>{
    let t = Text.split(/[ ]+/); 
    setText(t.join(" "));
  }

  return (
    <div className="w-75 m-auto">
      <div className="my-5">
        <textarea
          className="form-control border border-info bg-info text-wrap bg-opacity-10 rounded-end"
          placeholder="Type Word Hear ....."
          style={{ height: "300px" }}
          id="Textarea"
          value={Text}
          onChange={textareaClick}
        ></textarea>
        
        <div className="group mt-2 opacity-50 fs-5">
          <div className="d-flex flex-wrap">
            <div className="mx-3">
              {" "}
              Character {" "}
              <span className="badge rounded-5 bg-dark">{CharacteCount}</span>
            </div>
            <div className="mx-3">
              {" "}
              Word <span className="badge rounded-4 bg-dark">{WordCount} </span>
            </div>
            <div className="mx-3">
              {" "}
              Length {" "}
              <span className="badge rounded-5 bg-dark">{TextLength} </span>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap container">
        <div className="m-2">
          <button type="button gap-3" className="btn btn-primary" onClick={TitleCase}>
            Tital Case
          </button>
        </div>
        <div className="m-2">
          <button type="button gap-3" className="btn btn-primary" onClick={upperCase}>
            UpperCase
          </button>
        </div>
        <div className="m-2">
          <button type="button gap-3" className="btn btn-primary" onClick={lowerCase}>
            LowerCase
          </button>
        </div>
        <div className="m-2">
          <button type="button gap-3" className="btn btn-primary" onClick={sentenceCase}>
            Sentence Case
          </button>
        </div>
        <div className="m-2">
          <button type="button gap-3" className="btn btn-primary" onClick={copyText}>
            Copy
          </button>
        </div>
        <div className="m-2">
          <button type="button gap-3" className="btn btn-primary" onClick={removeSpace}>
            Remove Space
          </button>
        </div>
        <div className="m-2">
          <button type="button gap-3" className="btn btn-danger" onClick={()=>{setText('')}}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
