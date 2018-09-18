import React, { Component } from 'react';
import firebase from 'firebase';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  authGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(res=>console.log(res.user.email))
    .catch(e=>(console.log(e.code)))
  }
  render() {
    return (
      //jsx definido por react - 
      //React.createElement(div.{className:'App'},{
      //  React.create....
      //}
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Social Network</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.authGoogle}>Google</button>
        </p>
      </div>
    );
  }
}


export default App;
