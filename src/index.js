import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route} from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App';
import Home from './components/homePage';
import About from './components/about';
import Session from './components/session'
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App}/>,
      <Route path="/contact" component={Home}/>,
      <Route path="/about" component={About}/>
      <Route name="addSession" path="/session" component={Session}/>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
