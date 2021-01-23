import React, {Component} from 'react'

class ParagraphTwo extends Component{
    render(){
        return(
            <div>
                <p id='information'>{this.props.paragraphtwo} </p>
                    <h1 id='coming-soon'>{this.props.coming}</h1>
                    <button id='waitlist-btn'>{this.props.wait}</button>
               
            </div>
        )
    }
}

export default ParagraphTwo