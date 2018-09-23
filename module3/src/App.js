import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons: [
      { name: 'Stephen', age: 65 },
      { name: 'Gloria', age: 'Forever Young!' },
      { name: 'Manu', age: 29 }
    ],
    otherState: 'some other value'
  }
  
  switchNameHandler = (newName) => {
    //console.log('Was Clicked');
    // Don't do this: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 65 },
        { name: "Manu", age: 30 },
        { name: "Gloria", age: "Forever Young!" }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Stephen', age: 65 },
        { name: event.target.value, age: 39},
        { name: 'Gloria', age: "Forever Young!" }
      ]
    });
  }
  
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
            style={style}
            onClick={() => {
              this.switchNameHandler("Stephen!");
            } }
          >Switch Name
      
        </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, "Stephen!!")} 
        changed={this.nameChangedHandler}>
          My Hobbies: Racing
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>
          My Hobbies: Growing Many Many Plants
        </Person>
      </div>;
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, Does This Work Now?'));
  }
}

export default App;
