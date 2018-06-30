import React, { Component } from 'react'


class Inputform extends Component {
  render() {
    return (
      <div className="st-container">

      <div id="after_submit"></div>
      <form id="contact_form" action="#" method="POST">
        <div className="row">
          <label className="required">Your name:</label><br />
          <input id="name" className="input" name="name" type="text" size="30" /><br />
          <span id="name_validation" className="error_message"></span>
        </div>

        <br />
        <div className="row">
          <label className="required">Your email:</label><br />
          <input id="email" className="input" name="email" type="text" size="30" /><br />
          <span id="email_validation" className="error_message"></span>
        </div>

        <br />
        <div className="row">
          <label className="required">Your Credit Card Number:</label><br />
          <input id="creditcard" className="input" name="creditcard" type="text" size="30" /><br />
          <span id="cc_validation" className="error_message"></span>
        </div>
          <input id="submit_button" type="submit" value="BUY/subscribe" />
      </form>

      
      </div>
    )
  }
}

export default Inputform;
