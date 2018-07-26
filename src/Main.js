import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Preview from './Preview';
import './Main.css';

class Main extends Component {
    render () {
        return(
            <div className="main__target">
                <Preview />
                <Form />
            </div>
        )
    }
}

export default Main;