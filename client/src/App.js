import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inputform from './components/Input/Inputform'
import Subscribe from './components/Subscribe/Subscribe'

class App extends Component {
  render() {
    return (

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <h2>Subscription Base</h2>
              </div>

                <Inputform /> 
                <Subscribe /> 
         

              </div>

    );
  }
}

export default App;
