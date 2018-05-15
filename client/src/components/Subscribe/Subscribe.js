import React, { Component } from 'react'
import toothpaste from './toothpaste.jpg'
import soap from './soap.jpg'
import { Container, Row, Col } from 'reactstrap';


class Subscribe extends Component {
  render() {
    return (
      <div>
      <div>
      	<img src={ toothpaste } alt= {"toothpaste"} height="100" width="100" />
      	<button className="companyOne">Add to Cart </button>
      </div>

      <div>
      	<img src={ soap } alt= {"soap"} height="100" width="100" />
      	<button className="companyOne">Add to Cart </button>
      </div>

      </div>

    )
  }
}

export default Subscribe;
