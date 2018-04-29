import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name: 'Stephen', age: 65 },
      { name: 'Nicki',  age:  42 },
      { name: 'Gloria',   age: 73 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // console.log('Was Clicked');
    // Don't do this:   this.state.persons[0].name = 'Steve';
  this.setState( {
      persons: [
        { name: 'Steve', age: 65 },
        { name: 'Nicki',  age:  42 },
        { name: 'Gloria',   age: 72 },
        { name: 'Methuselah', age: 198}
      ]
    }
    )
  }

  render() {
    return(
       <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Dogs</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'I\'ve been rendered!!'));
  }
}

export default App;
