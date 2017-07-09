import React, { Component } from 'react';
import Projects from './Projects.js'
import AddProject from './AddProject.js'
import {Panel,Grid} from 'react-bootstrap';
import uuid from "uuid";
import { observer } from "mobx-react";

const Home = observer(class Home extends Component {


  handleAddProject(project){
    let projects = this.props.store.projects;
    projects.push(project);
    this.props.store.project = projects;
  }
  handleDeleteProject(id){
    let projects = this.props.store.projects;
    let index = projects.findIndex(project => project.id === id);
    projects.splice(index, 1);
    this.props.store.project = projects;
  }

  render() {
    return (
      <Grid>
      <Panel>
      <AddProject store={this.props.store} addProject={this.handleAddProject.bind(this)} />
      </Panel>
      <Panel>
      <Projects projects={this.props.store.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      </Panel>
    </Grid>
    );
  }
});
export default Home
