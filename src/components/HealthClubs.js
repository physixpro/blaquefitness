import React,{Component} from 'react'

class Healthclubs extends Component{
    render(){
        return(
            <div className="HealthClubs">
                <h1 className="club" id="club-one">{this.props.secondblaque}</h1>
                <h2 className="health" id="pageonehealth">{this.props.secondhealth}</h2>
                 <div id="pagetwobox"><p id="paragraphone-info">
                {this.props.paragraph}</p> </div>
                  <div><button id="btn">QUESTIONNAIRE</button></div>
            
                </div>
        )
    }
}

export default Healthclubs