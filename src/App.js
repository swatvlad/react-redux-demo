import React from "react";
import "./App.css";
import FancyInput from "./FancyInput/FancyInput";
import Card from "./Card/Card";
import { useSelector } from "react-redux";

const App = () => {
  const state = useSelector((state) => state);
  const tempList = [...state.list];
  const listItems = tempList.map((card) => {
    if (card.id === -1) {
      state.key++;
      card.id = state.key;
    }
    return <Card key={card.id} {...card} />;
  });
  return (
    <div className="App">
      <FancyInput />
      <div className="cardContainer">{listItems}</div>
    </div>
  );
};

export default App;
