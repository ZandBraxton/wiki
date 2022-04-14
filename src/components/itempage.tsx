import React from "react";
import { useLocation } from "react-router-dom";
import Item from "../interface/interfaces";
import "../styles/itempage.scss";

// interface Props {
//   state: Item[]
// }

const Itempage: React.FC = () => {
  const { state }: any = useLocation();
  return (
    <div className="page-container">
      <div className="main-container">
        <h1>{state.item.name}</h1>
      </div>
      <div className="profile-bar">
        <h2 className="name">{state.item.name}</h2>
        <img
          src={state.item.img}
          alt={state.item.name}
          height={250}
          width={250}
        ></img>
        <h3 className="section">Personal</h3>
        <div className="piece">
          <p>Current Status</p>
          <p>{state.item.status}</p>
        </div>
        <div className="piece">
          <p>Age</p>
          <p>{state.item.age}</p>
        </div>
        <div className="piece">
          <p>Birthdate</p>
          <p>{state.item.date_of_birth}</p>
        </div>
        <div className="piece">
          <p>Date Joined</p>
          <p>{state.item.date_joined}</p>
        </div>
        <h3 className="section">Professional Status</h3>
        <div className="piece">
          <p>Occupation</p>
          <p>{state.item.occupation}</p>
        </div>
        <div className="piece">
          <p>Power Ranking</p>
          <p>{state.item.power_ranking}</p>
        </div>
        <div className="piece">
          <p>Known Abilities</p>
          <p>
            {state.item.known_abilities.map((item: string) => {
              return <span>{item}</span>;
            })}
          </p>
        </div>
        <div className="piece"></div>
        <div className="piece"></div>
      </div>
    </div>
  );
};

export default Itempage;
