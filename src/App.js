import React, { Component } from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


import './App.css';
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
