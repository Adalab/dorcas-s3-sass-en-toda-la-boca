import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/awesome-p-c.svg';

class Welcome extends Component {
    render() {
        return (
            <div class="page__wrapper">
                <header class="header__page">
                    <div class="header__container--logo">
                        <img class="header__logo" src={logo} alt="Logotipo" />
                    </div>
                </header>
                <main class="main">
                    <div class="container__main--title">
                        <h1 class="main__title">Crea tu tarjeta de visita</h1>
                        <p class="main__subtitle">Crea mejores contactos profesionales de forma fácil y cómoda.</p>
                    </div>
                    <ul class="list">
                        <li class="list__element"><i class="far fa-object-ungroup list__element--icon"></i>Diseña</li>
                        <li class="list__element"><i class="far fa-keyboard list__element--icon"></i>Rellena</li>
                        <li class="list__element"><i class="fas fa-share-alt list__element--icon"></i>Comparte</li>
                    </ul>
                    <Link to='/app'>
                        <a href="tarjeta.html" class="button--start">comenzar</a>
                    </Link>
                </main>
            </div>

            );
        }
    }

export default Welcome;