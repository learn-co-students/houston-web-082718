import React, { Component } from "react";

class TodoList extends Component {
  render() {
    const { bananaStem, something } = this.props;

    return (
      <div className="TodoList">
        <h2>Todo List - {something}</h2>

        {bananaStem.map(function(item) {
          return <p key={item.task}>{item.task}</p>;
        })}
      </div>
    );
  }
}

const fun = "yay";

export { TodoList, fun };
