import React, { Component } from 'react';
import {Navbar , Nav , NavItem ,Button} from 'react-bootstrap';
import {Grid,Panel} from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom'
import {LinkContainer} from "react-router-bootstrap";
import Home from './Components/Home.js';
import Api from './Components/Api.js';
import { observer } from "mobx-react";
import auth from './Components/auth.js';
import Articale from './Components/Articale.js';
const App = observer(class App extends Component {
  handleSubmit(e) {
        e.preventDefault()

        var username = this.refs.username.value
        var pass = this.refs.pass.value
        auth.login(username, pass)
    }
  componentDidMount(){
    auth.firstLoad()
  }
  handleLogout(){
    auth.logout()
  }
  render() {
    const styles = {
      mynav: {
        position: 'fixed',
        width: '100%',
        left: 0,
        top: 0,
        zIndex: 100,
        borderTop: 20,
      }
  }
  const loginForm = (
    <form onSubmit={this.handleSubmit.bind(this)}>
      <input type="text" placeholder="username" ref="username"/>
      <input type="password" placeholder="password" ref="pass"/>
      <input type="submit"/>
    </form>
  )
  const logoutForm = (
    <Button bsStyle="primary" type="button" onClick={this.handleLogout} >Logout</Button>
  )
    const navbar = (
      <div style={styles.mynav}>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">My Project</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer exact to="/">
          <NavItem >Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/api">
          <NavItem >Api</NavItem>
          </LinkContainer>
          <LinkContainer to="/articales">
          <NavItem >Articales</NavItem>
          </LinkContainer>
        </Nav>
    </Navbar>
  </div>
    )
    return (
      <BrowserRouter>
      <Grid>
        {navbar}
        <div style={{paddingTop: '5%'}}>
        <Grid>
        <Panel>
        {this.props.store.authenticated ? <strong>Welcome {this.props.store.username} -- {this.props.store.email}! {" "}{logoutForm}</strong> : loginForm }
      </Panel>
      </Grid>
        <Route exact path="/" render={()=><Home store={this.props.store}/>} />
        <Route path="/Api" render={()=><Api store={this.props.store} />} />
        <Route path="/articales" render={()=><Articale store={this.props.store} />} />
        </div>
      </Grid>
      </BrowserRouter>
    );
  }
});

export default App;
