import React, { Component } from 'react';

import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, This is assignment 1</h1>
        <UserInput>Placeholder for UserInput</UserInput>
        <p><UserOutput>Placeholder for UserOutput</UserOutput></p>
        <p><UserOutput>Placeholder for UserOutput</UserOutput></p>
        <p><UserOutput>Placeholder for UserOutput</UserOutput></p>
      </div>
    );
  }
}

export default App;
