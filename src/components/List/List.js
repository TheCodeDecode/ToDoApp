import React from "react";
import { connect } from "react-redux";
import { deleteToDo } from "../../actions";
import "./List.css";

const List = (props) => {
  return (
    <ul className="todoList">
      {props.todos.map((item, index) => (
        <li key={index}>
          {item.message}
          <button onClick={() => props.dispatch(deleteToDo(item.id))}>
            remove
          </button>
        </li>
      ))}
    </ul>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos.data,
});
export default connect(mapStateToProps)(List);
