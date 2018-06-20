import React, { Component } from 'react';
import './App.css';
import RegisterOrLogin from './components/registerOrLogin/registerOrLogin';
import Contacts from "./components/contacts/contacts";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <RegisterOrLogin />
        <div className="row">
            <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
