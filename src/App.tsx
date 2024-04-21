import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getTodos } from "./utils/get-todos";
import { ToDoList } from "./components/ToDoList";
import { Toast } from "./components/Toast";
import { ToDoInterface } from "./todo.interface";

function App() {
  return (
    <div className="App">
      <header>
        <title>Elliot Byrne - Todo list project</title>
      </header>

      <body>
        <ToDoList />
        <Toast />
      </body>
    </div>
  );
}

export default App;
