import React, {Component} from 'react'

class SecondBlaque extends Component{
    render(){
        return(
            <div className="secondBlaque">
            <h1  id="testclub">{this.props.value}</h1>
            </div>
        )
    }
}

export default SecondBlaque