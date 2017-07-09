import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    return (
      <li className="ProjectItem">
        <strong>{this.props.project.title}</strong>: {this.props.project.category} By: {this.props.project.username} <a href={"#" + this.props.project.id} onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</a>
      </li>
    );
  }
}

export default ProjectItem;
