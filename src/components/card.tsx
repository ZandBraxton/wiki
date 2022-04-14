import React from "react";
import Item from "../interface/interfaces";
import "../styles/card.scss";
import { Link, useLocation } from "react-router-dom";

interface ItemProps {
  item: Item;
}

const Card: React.FC<ItemProps> = ({ item }: ItemProps) => {
  return (
    <div className="card">
      <Link
        style={{ textDecoration: "none" }}
        to={`/wiki/${item.name}`}
        state={{ item }}
      >
        <img src={item.img} alt={item.name} height={250} width={250} />
        <div className="container">
          <h4>
            <b>{item.name}</b>
          </h4>
        </div>
      </Link>
    </div>
  );
};

export default Card;
