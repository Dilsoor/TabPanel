import React from "react";
import "./TabItem.css";

function TabItem(props) {
  const { title } = props;
  return (
    <>
      <div className={`tabItem`}>
        <p>{title}</p>
      </div>
    </>
  );
}

export default TabItem;
