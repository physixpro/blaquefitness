import React, {Component} from 'react'

class PageTwo extends Component{
    render(){
        return(
            <div className="wrapper">
        <h1 id="club-one">{this.props.value}</h1>
    <h2 id="sub-club-one">{this.props.value}</h2>
        <p id="pagetwo-info">{this.props.value}</p>
        <div id="btn-box">
        <button id="question">{this.props.value}</button>
        </div>
    </div>
        )
    }
}

export default PageTwo;