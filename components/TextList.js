import React,{Component} from 'react'  ;// syntax ES6 

class TextList extends Component {
   render() {
    return (
      <ul>
        {
          this.props.texts.map((text) => {
            return <li key={text.id}>{text.text}</li>
          })
        }

      </ul>
    )
  }
}

export default TextList
