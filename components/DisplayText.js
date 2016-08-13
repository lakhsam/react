import React,{Component} from 'react' // syntax ES6 

class DisplayText extends Component {
    render(){
        return(
            <div>Updated text is :  {this.props.text}</div>
        )
    }
}
export default DisplayText
