import React from "react";
import Item from "../interface/interfaces";
// import "../styles/card.scss";
import "../styles/App.scss";
import { Link } from "react-router-dom";
import { wikiData } from "../data/data";
import Card from "./card";

// interface ItemProps {
//   item: Item;
// }

const Home: React.FC = () => {
  return (
    <div className="card-container">
      {wikiData.map((item) => {
        return <Card item={item} key={item.name} />;
      })}
    </div>
  );
};

export default Home;
