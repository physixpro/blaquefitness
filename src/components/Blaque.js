import React, { Component } from "react";

class Blaque extends Component {
  render() {
    return (
      <div className="Blaque">
        <h1 className="club" id="club-one">
          {this.props.value}
        </h1>
        <h2 className="health" id="pageonehealth">
          {this.props.health}
        </h2>
        <ul id="pageone-list">
          <li>
            <a href="#information">{this.props.about}</a>
          </li>
          <li>
            <a href="#waitlist-box">{this.props.join}</a>
          </li>
          <li>
            <a href="mailto:esorts.k990@gmail.com">{this.props.contact}</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Blaque;
