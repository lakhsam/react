import React,{Component} from 'react'  ;// syntax ES6 
import DisplayText from './DisplayText' ;
import actions from '../redux/actions' ;

class TextField extends Component {

    constructor(props,context){
        super(props,context);
        this.state = {
            textField : 'text field'
        } ;
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.dispatch(actions.addText(this.state.textField)) ;
    }

    deleteLetter(){
        var textField = this.state.textField ;
        this.setState({
            textField : textField.substring(0,textField.length-1)
        })
    }
    handleChange(event){
        this.setState({
            textField : event.target.value
        });
        console.log('Change detected ...') ;
    };

    render(){
        return <div>
            <input
                 type="text"
                 placeholder="add text " 
                 value={this.state.textField}
                 onChange={this.handleChange.bind(this)}
            />
            <button 
                onClick={this.handleSubmit.bind(this)}>
                Delete
            </button>
        </div>
    } ;
}

export default TextField
