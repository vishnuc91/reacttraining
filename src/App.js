import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      //   <div className="header">
      //   <a href="#default" className="logo">CompanyLogo</a>
      //   <div className="header-right">
      //     <a className="active" href="/">Home</a>
      //     <a href="/about">About</a>
      //   </div>
      // </div>

      <div className="App">
        <div className="header">
        <div className="header-right">
          <a className="active" href="/">Home</a>
          <a href="/contact">Contact US</a>
          <a href="/about">About</a>
          <a href="/session">Create Session</a>
        </div>
        </div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


export default App;
