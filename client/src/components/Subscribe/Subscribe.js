import React, { Component } from 'react'
import toothpaste from './toothpaste.jpg'
import './Subscribe.css'
import soap from './soap.jpg'
import floss from './floss.jpg'
import snacks from './Snacks.jpg'
import project from './project-man.jpg'
import { Col, Row, Container } from "../Grid";
import Cost from "../Cost/Cost"

//if button is pressed, ++ on the classname. and append to div.

class Subscribe extends Component {
  render() {
    return (
      <div>   

      <div className="float">
        <button> Team </button>
      </div>

      <div className="float">
        <Cost />
      </div>

      <div className="float">
        <button> Schedule </button>
      </div>

      <div className="float">
        <button> Risks </button>
      </div>

      <div className="float">
        <button> Procurement and vendor contracts </button>
      </div>

      <img src={ project } alt= {"project"} height="300" width="800" />

      </div>

    )
  }
}

export default Subscribe;


