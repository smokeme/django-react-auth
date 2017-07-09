import React, {Component} from 'react';
import $ from "jquery";
import Todos from "./Todos.js";
import {Panel, Grid} from 'react-bootstrap';
import { observer } from "mobx-react";

const Api = observer(class Api extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }
  getTodos() {
    if (this.props.store.todos.length < 1) {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.props.store.todos = data;
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    })
  }
}
  componentDidMount() {
    this.getTodos();
  }
  render() {
    return (
      <Grid>
      <Panel>
        <Todos todos={this.props.store.todos}/>
      </Panel>
    </Grid>
    )
  }
});
export default Api
