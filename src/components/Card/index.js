import React, { Component } from 'react'
// import './card.css'

export default class Card extends Component{
  constructor(props){
    super(props)
    this.state = {
      language: 'javascript',
      snippet: 'function first(){\n\tconsole.log("Hello World!")\n}'
    }
  }
  render(){
    return(
      <code className={'language-' + this.state.language}>
        <pre>
          {this.state.snippet}
        </pre>
      </code>
    )
  }

}