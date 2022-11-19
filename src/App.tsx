import React from "react";
import logo from "./logo.svg";
import "./App.scss";

const todos = [
  {
    id: 1,
    text: "This is a todo",
    isDone: false,
  },
  {
    id: 2,
    text: "This is a todo two",
    isDone: false,
  },
  {
    id: 3,
    text: "This is a todo three",
    isDone: false,
  },
  {
    id: 4,
    text: "This is a todo four",
    isDone: false,
  },
  {
    id: 5,
    text: "This is a todo five",
    isDone: false,
  },
  {
    id: 6,
    text: "This is a todo six",
    isDone: false,
  },
  {
    id: 7,
    text: "This is a todo seven",
    isDone: false,
  },
  {
    id: 8,
    text: "This is a todo eight",
    isDone: false,
  },
  {
    id: 9,
    text: "This is a todo nine",
    isDone: false,
  },
  {
    id: 10,
    text: "This is a todo ten",
    isDone: false,
  },
];

function App() {
  return (
    <div className="App">
      <div className="todoWrapper">
        <h1>Todo List</h1>
        <section className="header">
          <input type="text" placeholder="Enter todo.." />
          <button>Add New Todo</button>
        </section>
        <section className="todos">
          {todos.map((todo) => (
            <div className="singleTodo">
              <h2>{todo.text}</h2>
              <button className="delete">Delete</button>
              <button className="done">Done</button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
