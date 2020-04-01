import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    console.log(this.context);
    return (
      <nav>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Content</li>
        </ul>
      </nav>
    );
  }
}
