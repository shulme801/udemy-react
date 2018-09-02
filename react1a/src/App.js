import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Stephen', age: 65 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // DON'T DO THIS this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 66 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState ( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29},
        { name: 'Stephanie', age: 26}
      ]
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    console.log('doesShow is'+doesShow);
    this.setState({ showPersons: !doesShow });
  }

  render() {
    
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHander}>Switch Name</button> 
          { this.state.showPersons === true ?
           <div>
              <Person
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}> and I don't give a damn! /
              </Person>
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Max!!')}
                changed={this.nameChangedHandler} >My Hobbies: Racing
              </Person>
              <Person>
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} 
              </Person>
            </div> : null
        }
      </div>
    );
      // return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Hi, I\'m a React App!!!'));
  }
}

export default App;
