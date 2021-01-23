import React, {Component} from 'react'

class ParagraphOne extends Component{
    render(){
        return(
            
            <p id="paragraphone-info">
                {this.props.paragraph}
                  <div><button id="btn">QUESTIONNAIRE</button></div>
            </p>
            
        )
    }
}

export default ParagraphOne