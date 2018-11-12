import React, { Component } from "react";

import withAuth from "./withAuth";

class MyCrayons extends Component {
  render() {
    return (
      <ul>
        <li>red</li>
        <li>green</li>
        <li>yellow</li>
      </ul>
    );
  }
}

export default withAuth(MyCrayons, "lOg iN to zee me craYOns");
