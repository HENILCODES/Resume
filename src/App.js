import React, { useState } from "react";

import "./App.css";

function App() {
  const [mun, setN] = useState("1");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {mun} </h1>
        <input type="number" id="Num" />
          <button type="button" onClick={() => setN(document.querySelector("#Num").value)}>Click</button>
        {/* <button onClick={() => useN("N + 1")}> */}
      </header>
    </div>
  );
}
// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My favorite color is {color}!</h1>
//       <button type="button" onClick={() => setColor("blue")}>
//         Blue
//       </button>
//       <button type="button" onClick={() => setColor("red")}>
//         Red
//       </button>
//       <button type="button" onClick={() => setColor("pink")}>
//         Pink
//       </button>
//       <button type="button" onClick={() => setColor("green")}>
//         Green
//       </button>
//     </>
//   );
// }

export default App;
