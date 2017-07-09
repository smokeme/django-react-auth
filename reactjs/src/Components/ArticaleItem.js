import React, { Component } from 'react';
import { observer } from "mobx-react";
import {Button} from 'react-bootstrap';
import $ from "jquery";
import store from '../Store.js';
import getArticales  from './Actions.js'

const ArticaleItem = observer(class ArticaleItem extends Component {
  constructor() {
    super();
    this.state = {
      formUp: false
    }
  }
  changeFormtrue(){
    this.setState({formUp: true})
  }
  changeFormfalse(){
    this.setState({formUp: false})
  }
  updateArticale(){
    var request = $.ajax({
        type: 'PUT',
        datatype: 'application/json',
        url: 'http://fawaz.online:8000/articales/' + this.props.articale.id + '/',
        headers: {
                  'Authorization': 'Token ' + localStorage.token
        },
        data: {
          "title": this.refs.title.value
                },
        success: function(res) {
          store.articales = []
          getArticales();
        }
      })
  }
  deleteArticale(){
    var request = $.ajax({
        type: 'DELETE',
        datatype: 'application/json',
        url: 'http://fawaz.online/articales/' + this.props.articale.id + '/',
        headers: {
                  'Authorization': 'Token ' + localStorage.token
        },
        success: function(res) {
          store.articales = []
          getArticales();
        }
      })
  }
  handleDelete(e){
    e.preventDefault()
    this.deleteArticale();
  }
  handleSubmit(e){
    e.preventDefault()
    var value = this.refs.title.value
    console.log(value)
    console.log(e)
    this.updateArticale();
  }
  render() {
    const editForm = (
      <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="title" ref="title"/>
        <input className="btn-primary" type="submit"/>
        <Button bsStyle="danger" type="button" onClick={this.changeFormfalse.bind(this)}>Hide</Button>
      </form>
      </div>
    )
    const noeditForm = (
      <Button bsStyle="primary" type="button" onClick={this.changeFormtrue.bind(this)}>Show</Button>
    )
    if (this.props.p % 2) {
    return (
      <li className="list-group-item list-group-item-success">
          {this.props.articale.title} {"  "}{" "}
          <br />
          {this.state.formUp ? editForm : noeditForm }
          <br />
          <form onSubmit={this.handleDelete.bind(this)}>
            <input className="btn-primary" type="submit" value="Delete!"/>
          </form>
      </li>
    );
  }
  return (
    <li className="list-group-item list-group-item-info">
        {this.props.articale.title}
        <br />
        {this.state.formUp ? editForm : noeditForm }
        <br />
        <form onSubmit={this.handleDelete.bind(this)}>
          <input className="btn-primary" type="submit" value="Delete!"/>
        </form>
    </li>
  );
  }
});

export default ArticaleItem;
