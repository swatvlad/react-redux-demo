import React from "react";
import { removeItem } from "../actions.js";
import "./Card.css";
import { connect } from "react-redux";

const Card = ({ id, title, content, remove }) => {
  return (
    <div className="Card">
      <h1>{title}</h1>
      {content.split("\n").map((c) => (
        <p>{c}</p>
      ))}
      <button className="close" onClick={() => remove()}>
        X
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  return {
    remove: () => dispatch(removeItem(id))
  };
};

export default connect(null, mapDispatchToProps)(Card);
