import React, {Component} from 'react';
import $ from "jquery";
import Articales from "./Articales.js";
import {Panel, Grid} from 'react-bootstrap';
import { observer } from "mobx-react";
import AddArticale from './AddArticale.js';
import getArticales  from './Actions.js'
const Articale = observer(class Articale extends Component {
  constructor() {
    super();
    this.state = {
      articales: []
    }
  }
  componentDidMount() {
    getArticales();
  }
  render() {
    return (
      <Grid>
      <Panel>
        <AddArticale articales={this.props.store.articales} username={this.props.store.username} store={this.props.store}/>
        <Articales articales={this.props.store.articales} />
      </Panel>
    </Grid>
    )
  }
});
export default Articale
