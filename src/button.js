import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
    }

export Board;