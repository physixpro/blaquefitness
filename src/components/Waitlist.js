import React, { Component } from "react";
import axios from "axios";

class Waitlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      hometown: "",
    };
  }

  sendData = () => {
    const user = {
      name: this.state.name,
      email: this.state.email,
      hometown: this.state.hometown,
    };
    axios
      .post("http://localhost:3000/createUser", user, { mode: "no-cors" })
      .then(res => console.log(res))
      .catch(error => console.log(error));
  };
  handleNameChange = event => {
    this.setState({
      name: event.target.value,
    });
    console.log("state", this.state);
  };

  handleEmailChange = event => {
    this.setState({
      email: event.target.value,
    });
    console.log(event.target.value);
  };

  handleHometownChange = event => {
    this.setState({
      hometown: event.target.value,
    });
    console.log(event.target.value);
  };

  handleSubmit = event => {
    alert(`${this.state.name} ${this.state.email} ${this.state.hometown}`);
    event.preventDefault();
  };

  render() {
    const { name, email, hometown } = this.state;
    return (
      <div className="Waitlist"><form onSubmit={this.handleSubmit}>
      <div id="waitlist-box">  <div className="mail">
          <h1 id="form-heading">{this.props.value}</h1>
          <label className="text">NAME</label>
          <input className="box-input"
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={name}
            onChange={this.handleNameChange}
          />
        </div>

        <div className="mail">
          <label className="text">EMAIL</label>
          <input className="box-input"
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={this.handleEmailChange}
          ></input>
        </div>
        {
          //Home City Field
        }
        <div className="mail">
          <label className="text">NEIGHBORHOOD (CITY,STATE)</label>
          <input className="box-input" id="hometown-box"
            type="text"
            name="hometown"
            placeholder="hometown"
            required
            value={hometown}
            onChange={this.handleHometownChange}
          ></input>
        </div>
        {
          //Submit button
        }
        <div>
          <button id="form-btn"onClick={this.sendData} type="submit">
            Submit
          </button>
        </div>
        </div>
      </form>
    
      </div>
    );
  }
}

export default Waitlist;
