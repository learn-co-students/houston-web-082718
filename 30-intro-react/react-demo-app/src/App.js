import React, { Component } from "react";
import "./App.css";

import { TodoList, fun } from "./components/TodoList";

class App extends Component {
  render() {
    const bananaPeel = [{ task: "do the dishes" }, { task: "learn react" }];
    const something = "banana";

    return (
      <div className="App">
        <h1>Demo React App RELOAD - {fun}</h1>
        <TodoList bananaStem={bananaPeel} something={something} />
      </div>
    );
  }
}

export default App;
