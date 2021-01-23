import React, {Component} from 'react'

class PageOne extends Component{
    render(){
        return(
<div className="wrapper">
        <h1 id="club-one">{this.props.value}</h1>
    <h2 id="sub-club-one">{this.props.value}</h2>
    <ul>
    <li><link to="/aboutUs">ABOUT US{this.props.value}</link></li>
    <li><link to="/join">JOIN THE WAITLIST{this.props.value}</link></li>
    <li><link to="/contact">CONTACT{this.props.value}</link></li>
    </ul>

</div>
        )
    }
}

export default PageOne;