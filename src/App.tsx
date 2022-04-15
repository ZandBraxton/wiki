import React from "react";
import { Helmet } from "react-helmet";
import "./styles/reset.scss";
import "./styles/App.scss";
import { wikiData } from "./data/data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Card from "./components/card";
import Itempage from "./components/itempage";
import Home from "./components/home";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Helmet>
            <title>HGG Wiki</title>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Helmet>
        </header>
        <Routes>
          <Route path="/wiki" element={<Home />} />
          <Route path="/wiki/:id" element={<Itempage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
