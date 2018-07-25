
import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
  render() {
    return (
        <footer class="footer">
            <span class="footer__span">Awesome profile-cards @2018</span>
            <a href="http://adalab.es/" target="_blank" class="button-adalab">
                <img src="images/logo-adalab.png" alt="enlace adalab" class="button--adalab__img">
            </a>
            <img src="images/logo-queens.png" alt="logo queens of hearts" class="logo-hearts__img">
        </footer>
        
    );
  }
}

export default Footer;