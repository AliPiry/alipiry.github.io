import React, { Component } from 'react';
import './App.css';
import Ionicon from 'react-ionicons'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <Ionicon
            className="App-logo"
            icon="logo-github"
            fontSize="75px"
            onClick={() => window.open('https://github.com/alipiry', '_blank')}
            color="white"
          />
          <Ionicon
            className="App-logo"
            icon="logo-instagram"
            fontSize="75px"
            onClick={() => window.open('https://instagram.com/alipiryy', '_blank')}
            color="white"
          />
          <Ionicon
            className="App-logo"
            icon="logo-twitter"
            fontSize="75px"
            onClick={() => window.open('https://twitter.com/alipiry', '_blank')}
            color="white"
          />
        </div>
      </div>
    );
  }
}