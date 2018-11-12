import React, { Component } from "react";

import MyAnimals from "./components/MyAnimals";
import MyCrayons from "./components/MyCrayons";

class App extends Component {
  state = {
    show: "animals"
  };

  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState({ show: "animals" })}>
          Show animals
        </button>
        <button onClick={() => this.setState({ show: "crayons" })}>
          Show crayons
        </button>
        {this.state.show === "animals" ? <MyAnimals /> : <MyCrayons />}
      </div>
    );
  }
}

export default App;
