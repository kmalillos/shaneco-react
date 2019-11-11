import React, { Component } from 'react';
import NavTop from "./NavTop";
import NavBar from "./NavBar";
import "./Nav.css";

class Nav extends Component {
    render() {
      return (
          <>
            <NavTop />
            <NavBar />
          </>
      );
    }
};

export default Nav;
