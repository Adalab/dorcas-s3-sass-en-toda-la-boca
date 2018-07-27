import React, { Component } from 'react';
import Form from './Form';
import Preview from './Preview';

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