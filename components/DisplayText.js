import React,{Component} from 'react' // syntax ES6 

class DisplayText extends Component {

    handleClick(){
        this.props.deleteLetter() ;
        console.log('Button clicked ... ') ;
    }


    render(){
        return(
            <div>
                <div>Updated text is :  {this.props.text}</div>
                <button 
                    onClick={this.handleClick.bind(this)}>
                    Delete
                </button>
            </div>
        )
    }
}
export default DisplayText
