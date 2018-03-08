import React, { Component } from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


import './App.css';
import HomePage from './pages/HomePage'
// import ProfilePage from './pages/ProfilePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
