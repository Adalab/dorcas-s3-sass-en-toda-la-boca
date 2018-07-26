import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Preview from './Preview';

class Main extends Component {
    render () {
        return(
            <div className="main">
                <Form />
                <Preview />
            </div>
        )
    }
}

export default Main;