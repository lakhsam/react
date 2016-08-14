import React,{Component} from 'react' // syntax ES6 
import TextField from './TextField'
import TextList from './TextList'
import { connect } from 'react-redux'

class App extends Component {
    render(){
        return(
            <div>
                <h1>Hello   !! world from react js</h1>
                <TextField dispatch={this.props.dispatch} />
                <TextList  texts={this.props.texts}/>
            </div>
        )
    }
}

// export default App

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)
