import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './navigation/navigation';

class App extends Component {
  /*APP ID: kid_r1woYIdzl APP SECRET:  e93e196d770e42d7bade0257cc09dce2 */
  render() {
    return (
      <div className="App">
          <Menu/>
      </div>
    );
  }
}

export default App;
