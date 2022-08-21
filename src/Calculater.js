import React from "react";
export default function Calculater() {
  let calculate = () => {
    let NumberIS = document.getElementById("Number").value;
    for (let i = 1; i <= 10; i++) {
      document.getElementById("AnswerIs").innerHTML += printTable(NumberIS, i);
    }
  };
  let printTable = (N, i) => {
    return `<tr>
    <td>${N}</td>
    <th>x</th>
    <td> ${i} </td>
    <th>=</th>
    <td> ${N*i} </td>
  </tr>`;
  };
  return (
    <div className="container">
      <div className="w-75 m-auto">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control border border-info"
            placeholder="Enter Number"
            onClick={()=>{document.getElementById("AnswerIs").innerHTML=""}}
            id="Number"
          />
          <button className="btn btn-primary" onClick={calculate}>
            Find
          </button>
        </div>
        <div className="w-50 m-auto pt-5">
          <table
            id="AnswerIs"
            className="fs-5 table table-hover font-monospace"
          >
          </table>
        </div>
      </div>
    </div>
  );
}
