import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import List from "./components/List/List";

function App() {
  return (
    <div className="container">
      <h2 className="title"> TODO APP</h2>
      <AddTodo />
      <List />
    </div>
  );
}

export default App;
