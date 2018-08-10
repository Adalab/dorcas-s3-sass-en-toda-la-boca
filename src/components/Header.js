import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/awesome-p-c.svg';

class Header extends React.Component {
    render() {
        return (
            <header className="header--tarjeta">
                <Link to='/'>
                    <img className="header__logo--tarjeta" src={logo} alt="Logotipo" />
                </Link>
            </header>
        );
    }
}

export default Header;