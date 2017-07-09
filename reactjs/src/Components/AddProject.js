import React, { Component } from 'react';
import uuid from "uuid";
import {Button, FormControl} from 'react-bootstrap';
import { observer } from "mobx-react";
import auth from './auth.js';
const AddProject = observer(class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    }
  }
  static defaultProps = {
    categories: ["Web Design", "Web Development", "Mobile App"]
  }
  checkDuplicate(title){
    let result = false;
    this.props.store.projects.map(project => {
      if (title === project.title){
        result =  true;
      }
    })
    return result;
  }
  handleSubmit(e){
    e.preventDefault();
    if(this.refs.title.value === ""){
      alert('Title is required');
    } else {
      if (!this.checkDuplicate(this.refs.title.value)){
      this.setState({newProject:{
        id:uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value,
        username: this.props.store.username
      }}, function(){
        this.props.addProject(this.state.newProject);
      });

    } else {
       alert('Title is duplicated'); }
    }

  }
  render() {
    let categoryOptions = this.props.categories.map(category => {
        return <option key={category} value={category}>{category}</option>

    });
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <lable>Title</lable><br />
              <input className="form-control" type="text" ref="title" />
          </div>
          <br />
          <div className="form-group">
            <lable>Category</lable><br />
              <select className="form-control form-control-lg" ref="category">
                {categoryOptions}
              </select>
          </div>
          <br />
          {this.props.store.authenticated ? <Button bsStyle="primary" type="submit" >Submit</Button> :  <Button bsStyle="danger" type="submit" disabled>Submit</Button> }
        </form>
        <br />
      </div>
    );
  }
});

export default AddProject;
