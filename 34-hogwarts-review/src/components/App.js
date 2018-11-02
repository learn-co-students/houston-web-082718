import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import PigPen from './PigPen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <PigPen />
      </div>
    );
  }
}

export default App;
