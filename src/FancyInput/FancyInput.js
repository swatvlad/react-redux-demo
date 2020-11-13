import React from "react";
import "./FancyInput.css";
import { useSelector } from "react-redux";
import { addItem, CHANGED } from "../actions";
import { connect } from "react-redux";

const FancyInput = ({ changed, add }) => {
  const addComponent = useSelector((state) => state.addComponent);
  return (
    <div className="FancyInput">
      <label>Title</label>
      <input
        className="input"
        type="text"
        onChange={(event) => changed(event, "title")}
        value={addComponent.title}
      />
      <label>Content</label>
      <textarea
        className="input"
        type="text"
        onChange={(event) => changed(event, "content")}
        value={addComponent.content}
      ></textarea>
      <button onClick={() => add()}>Add Todo</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch(addItem()),
    changed: (event, target) =>
      dispatch({
        type: CHANGED,
        payload: { event, target },
      }),
  };
};

export default connect(null, mapDispatchToProps)(FancyInput);
