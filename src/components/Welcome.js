import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/awesome-p-c.svg';

class Welcome extends Component {
    render() {
        return (
            <div className="page__wrapper">
                <header className="header__page">
                    <div className="header__container--logo">
                        <img className="header__logo" src={logo} alt="Logotipo" />
                    </div>
                </header>
                <main className="main">
                    <div className="container__main--title">
                        <h1 className="main__title">Crea tu tarjeta de visita</h1>
                        <p className="main__subtitle">Crea mejores contactos profesionales de forma fácil y cómoda.</p>
                    </div>
                    <ul className="list">
                        <li className="list__element"><i className="far fa-object-ungroup list__element--icon"></i>Diseña</li>
                        <li className="list__element"><i className="far fa-keyboard list__element--icon"></i>Rellena</li>
                        <li className="list__element"><i className="fas fa-share-alt list__element--icon"></i>Comparte</li>
                    </ul>
                    <Link to='/cardgenerator'>
                        <a className="button--start">comenzar</a>
                    </Link>
                </main>
            </div>

            );
        }
    }

export default Welcome;