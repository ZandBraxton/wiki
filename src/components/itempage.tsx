import React from "react";
import { useLocation } from "react-router-dom";
import Item from "../interface/interfaces";
import "../styles/itempage.scss";

const Itempage: React.FC = () => {
  const { state }: any = useLocation();
  return (
    <div className="page-container">
      <div className="main-container">
        <div className="hero">
          <h1 className="title">{state.item.name}</h1>
          <i className="top-quote">"{state.item.top_quote}"</i>
        </div>
        <div className="main-wrapper">
          <div className="content-container">
            <section className="bio">
              {state.item.bio.map((item: any) => {
                return <p>{item}</p>;
              })}
            </section>
            <section className="article">
              <h2>Story</h2>
              <hr></hr>
              <p>
                <i>No content added.</i>
              </p>
            </section>
            <section className="article">
              <h2>Quotes</h2>
              <hr></hr>
              {state.item.quotes.map((item: any) => {
                return <p className="quote">"{item}"</p>;
              })}
            </section>
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
              <p>{state.item.known_abilities}</p>
            </div>
            <div className="piece">
              <p>Likes</p>
              <p>{state.item.likes}</p>
            </div>
            <div className="piece">
              <p>Dislikes</p>
              <p>{state.item.dislikes}</p>
            </div>
            <h3 className="section">Relations</h3>
            <div className="piece">
              <p>Affiliations</p>
              <p>{state.item.affiliations}</p>
            </div>
            <div className="piece">
              <p>Relationships</p>
              <div>
                {state.item.related.map((item: any) => {
                  return (
                    <span>
                      {item.name} ({item.status})
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itempage;
