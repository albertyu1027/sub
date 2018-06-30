import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inputform from './components/Input/Inputform'
import Subscribe from './components/Subscribe/Subscribe'
import project from './components/Subscribe/project-man.jpg'
import { Col, Row, Container } from "./components/Grid";

class App extends Component {
  render() {
    return (

      <div className="App">
        <div className="App-header">
          <img src={ project } className="App-logo" alt="logo" />
            <h2>Manage your Projects </h2>
              </div>

                <div className="App-input">
                    <Inputform /> 
                </div>
                
                
                <div className="App-input">
                    <Subscribe /> 
                </div>
               
   
              </div>
    );
  }
}

export default App;
