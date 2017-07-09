import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { observer } from "mobx-react";

const Todos = observer(class Todos extends Component {
  render() {
    let todoItem;
    var p = 0;
    if (this.props.todos){
      todoItem = this.props.todos.map(todo => {
        p = p+1;

        return (
          <TodoItem key={todo.id} todo={todo} p={p} />
        )
      })
    }
    return (
      <div className="App">
      <h3>Todo List</h3>
        {todoItem}
      </div>
    );
  }
});

export default Todos;
