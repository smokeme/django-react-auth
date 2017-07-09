import React, { Component } from 'react';
import {Checkbox} from 'react-bootstrap';
import { observer } from "mobx-react";

const TodoItem = observer(class TodoItem extends Component {
  handleChange(){
    this.props.todo.completed = !this.props.todo.completed;
  }
  render() {
    let value = this.props.todo.completed;
    if (this.props.p % 2) {
    return (
      <li className="list-group-item list-group-item-success">
          {this.props.todo.title} {"  "}{" "}
          <Checkbox checked={value} inline onChange={this.handleChange.bind(this)} >Done</Checkbox>
      </li>
    );
  }
  return (
    <li className="list-group-item list-group-item-info">
        {this.props.todo.title} {"  "}{" "}
        <Checkbox checked={value} inline value={this.props.todo.completed} onChange={this.handleChange.bind(this)} >Done</Checkbox>
    </li>
  );
  }
});

export default TodoItem;
