import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/navigation/Navigation';
import observer from './services/Observer'

class App extends Component {
  constructor(props){
    super(props);
    this.state = { loggedIn: false, username: '' };
    this.onSessionUpdate = this.onSessionUpdate.bind(this);
  }
  componentDidMount() {
    observer.onSessionUpdate = this.onSessionUpdate
    this.onSessionUpdate();
  }

  onSessionUpdate() {
    let name = sessionStorage.getItem("username");
    if (name) {
      this.setState({ loggedIn: true, username: sessionStorage.getItem("username") });
    } else {
      this.setState({ loggedIn: false, username: '' });
    }
  }
  render() {
    return (
      <div className="App">
          <Menu/>
      </div>
    );
  }
}

export default App;
