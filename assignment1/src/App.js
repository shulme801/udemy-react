import React, { Component } from 'react';

import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Stephen',
    nickname: 'Gilligan'
  }

  usernameChangedHandler = (event) => {
    this.setState({username:event.target.value});
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, This is assignment 1</h1>
        <div>
          <UserInput changed={this.usernameChangedHandler} currentUserName={this.state.username}>Placeholder for UserInput</UserInput>
          <UserOutput userName= { this.state.username}>Placeholder for UserOutput</UserOutput>
          <UserOutput userName= { this.state.nickname}>Placeholder for UserOutput</UserOutput>
          <UserOutput userName= { this.state.username}>Placeholder for UserOutput</UserOutput>
        </div>
      </div>
    );
  }
}

export default App;
