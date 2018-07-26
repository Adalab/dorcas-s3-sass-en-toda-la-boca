import React, { Component } from 'react';
import './Footer.css';
import logoAdalab from './images/logo-adalab.png';
import logoQueens from './images/logo-queens.png';


class Footer extends Component {
  render() {
    return (
        <footer className="footer">  
            <span className="footer__span">Awesome profile-cards @2018</span>
            <a href="http://adalab.es/" className="button-adalab">  </a>
                <img src={logoAdalab} alt="enlace adalab" className="button--adalab__img"/> 
                <img src={logoQueens} alt="logo queens of hearts" className="logo-hearts__img"/>
        </footer>
    );
  }
}

export default Footer;