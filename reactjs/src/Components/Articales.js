import React, { Component } from 'react';
import ArticaleItem from './ArticaleItem';
import { observer } from "mobx-react";

const Articales = observer(class Articales extends Component {
  render() {
    let articaleItem;
    var p = 0;
    if (this.props.articales){
      articaleItem = this.props.articales.map(articale => {
        p = p+1;

        return (
          <ArticaleItem key={articale.title} articale={articale} p={p} />
        )
      })
    }
    return (
      <div className="App">
      <h3>Articale List</h3>
        {articaleItem}
      </div>
    );
  }
});

export default Articales;
