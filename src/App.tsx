import React from "react";
import "./styles/reset.css";
import "./styles/App.css";
import { wikiData } from "./data/data";

function App() {
  console.log(wikiData[0]);
  return (
    <div className="App">
      <header className="App-header">
        <p>hi</p>
        <img src={wikiData[0].img} alt="hi" height={250} width={250}></img>
      </header>
    </div>
  );
}

export default App;
