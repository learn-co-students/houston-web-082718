import React, { Component } from "react";

import withAuth from "./withAuth";

class MyAnimals extends Component {
  render() {
    return (
      <ul>
        <li>bear</li>
        <li>badger</li>
        <li>balloon</li>
      </ul>
    );
  }
}

export default withAuth(MyAnimals, "Log in to see My ANImaAls");
