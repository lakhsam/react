import React,{Component} from 'react'  ;// syntax ES6 
import DisplayText from './DisplayText' ;

class TextField extends Component {

    constructor(props,context){
        super(props,context);
        this.state = {
            textField : 'text field'
        };

    }
    handleChange(event){
        this.setState({
            textField : event.target.value
        });
        console.log('Change detected ...') ;
    }

    render(){
        return <div>
            <input
                 type="text"
                 placeholder="text field" 
                 value={this.state.textField}
                 onChange={this.handleChange.bind(this)}
            />
            <DisplayText text={this.state.textField}/>
        </div>
    }
}

export default TextField
