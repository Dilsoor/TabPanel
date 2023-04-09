import React, { useState } from "react";
import "./Tabpanel.css";
import TabItem from "../TabItem/TabItem";

function Tabpanel({ tabData }) {
  const [active, setActive] = useState(1);
  const setActiveTab = (id) => {
    setActive(id);
  };
  return (
    <div className="container tabComponent">
      <div className="tabNavigation">
        <a
          href="#"
          className={`${active == 1 && "active"}`}
          onClick={() => setActiveTab(1)}
        >
          Home
        </a>
        <a
          href="#"
          className={`${active == 2 && "active"}`}
          onClick={() => setActiveTab(2)}
        >
          About
        </a>
        <a
          href="#"
          className={`${active == 3 && "active"}`}
          onClick={() => setActiveTab(3)}
        >
          Contact
        </a>
      </div>
      <div className="tabPanel">
        {tabData.map((el) => {
          if (el.id == active) {
            return <TabItem key={el.id} title={el.title} />;
          }
        })}
      </div>
    </div>
  );
}

export default Tabpanel;
