import React from "react";
import { connect } from "react-redux";
import { addToDo } from "../../actions";
import "./AddTodo.css";

const AddTodo = (props) => {
  const sendInfo = (e, val) => {
    e.preventDefault();
    if (!val) {
      return;
    }
    props.dispatch(addToDo(val));
    e.target.userInput.value = "";
  };

  return (
    <>
      <div className="form-section">
        <form onSubmit={(e) => sendInfo(e, e.target.userInput.value)}>
          <input type="text" name="userInput" className="input" />
          <button className="action-button">ADD</button>
        </form>
      </div>
    </>
  );
};

export default connect()(AddTodo);
