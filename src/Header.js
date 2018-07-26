import React from 'react';
import './Header.css';
import logo from './images/awesome-p-c.svg';

class Header extends React.Component {
    render() {
        return (
            <header className="header--tarjeta">
                <img className="header__logo--tarjeta" src={logo} alt="Logotipo" />
            </header>
        );
    }
}

export default Header;