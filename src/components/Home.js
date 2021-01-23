import React, { Component } from "react";
import Blaque from "./Blaque";
import Healthclubs from "./HealthClubs";
import ParagraphTwo from "./ParagraphTwo";
import { Link } from "react-router-dom";
import Background from "../landing.png";
import SecondBackground from "../landing-2.png";
import ParagraphOne from "./ParagraphOne";
import Waitlist from "./Waitlist";
import ThirdBackground from "../landing-2.png";
import FourthBackground from "../landing.png";




class Home extends Component {
  render() {
    return (
      <div>
        <img src={Background} alt="landingpage" className="bg-img" />
        <Blaque id="club-one" value="BLAQUE" />
        <Healthclubs id="sub-club-one" value="HEALTH CLUBS" />
        <ul>
          <li>
            <Link to="/aboutUs">ABOUT US{this.props.value}</Link>
          </li>
          <li>
            <Link to="/join">JOIN THE WAITLIST{this.props.join}</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT{this.props.contact}</Link>
          </li>
        </ul>

        <div>
          <img src={SecondBackground} alt="landingpage" className="bg-img-2" />
          <Blaque value="BLAQUE" />
          <Healthclubs value="HEALTH CLUBS" />
          
            <Waitlist />

            

         
          </div>
        </div>
    );
  }
}
export default Home;
