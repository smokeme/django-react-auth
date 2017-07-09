import React, { Component } from 'react';
import uuid from "uuid";
import {Button, FormControl} from 'react-bootstrap';
import { observer } from "mobx-react";
import auth from './auth.js';
import $ from "jquery";
import store from '../Store.js';
import getArticales  from './Actions.js'

const AddArticale = observer(class AddArticale extends Component {
  constructor() {
    super();
    this.state = {
      newArticale: {}
    }
  }

  postArticale(articale){
    var request = $.ajax({
        type: 'POST',
        datatype: 'application/json',
        url: 'http://127.0.0.1:8000/articales/',
        headers: {
                  'Authorization': 'Token ' + localStorage.token
        },
        data: {
          "title": articale
                },
        success: function(res) {
          store.articales = []
          getArticales();
        }
      })
  }
  handleSubmit(e){
    e.preventDefault();
    if(this.refs.title.value === ""){
      alert('Title is required');
    } else {
        this.postArticale(this.refs.title.value);
  }
}
  render() {
    return (
      <div>
        <h3>Add Articale</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <lable>Title</lable><br />
              <input className="form-control" type="text" ref="title" />
          </div>
          <br />
          {this.props.store.authenticated ? <Button bsStyle="primary" type="submit" >Submit</Button> :  <Button bsStyle="danger" type="submit" disabled>Submit</Button> }
        </form>
        <br />
      </div>
    );
  }
});

export default AddArticale;
