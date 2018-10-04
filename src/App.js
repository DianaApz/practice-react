import React, { Component } from 'react';
// import firebase from 'firebase';
// import FirstClass from './components/firstClass';
import logo from './logo.svg';
import './App.css';
import { task } from './file.json';
console.log(task);

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome</h1>
        </header>
        <div className="App-intro">
         {/* <FirstClass tittle="prueba"/> */}
        </div>
      </div>
    );
  }
}


export default App;
