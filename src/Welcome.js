import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

class Welcome extends Component {
    render() {
        return (
            <div className='Welcome-container'>
                <button className='Welcome-button'>
                    <Link to='/app'>Inicio</Link>
                </button>
            </div>
        );
    }
}

export default Welcome;