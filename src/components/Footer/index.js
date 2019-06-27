import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component{
  render(){
    return (
      <footer className="footer">
        <div className="footer__column footer__column-left"></div>
        <div className="footer__column"></div>
        <div className="footer__column footer__column-right"></div>
      </footer>
    )
  }
}

