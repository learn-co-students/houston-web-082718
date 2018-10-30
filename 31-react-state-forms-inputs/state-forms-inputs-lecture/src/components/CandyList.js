import React, { Component } from "react";

class CandyList extends Component {
  render() {
    return (
      <div className="CandyList">
        <h3>Candy List</h3>
        {this.props.candyList.map(candy => {
          return (
            <div key={candy.name}>
              {candy.name} | {candy.taste} | {String(candy.pepperminty)}
            </div>
          );
        })}
      </div>
    );
  }
}

export default CandyList;
