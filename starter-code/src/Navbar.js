import React, { Component } from 'react';
import CoolButton from './CoolButton';

import 'bulma/css/bulma.css';

class Navbar extends Component {
  render() {
    return (
      <div className ="Navbar">
      <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="150" height="15" />
      </a>
    

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        Home
      </a>

      <a className="navbar-item">
        Documentation
      </a>

   
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
        <button class="button is-rounded my-class is-danger is-small">Login</button>
        <button class="button is-small is-success">Log Out</button> 
        </div>
      </div>
    </div>
</nav>
  </div>
    )
  }
}

export default Navbar

//  <button class="button is-rounded my-class is-danger is-small">Button 1</button>
{/* <button class="button is-small is-success">Button 2</button> */}