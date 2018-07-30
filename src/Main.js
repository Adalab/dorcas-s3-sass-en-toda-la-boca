import React, { Component } from 'react';
import Form from './Form';
import Preview from './Preview';

class Main extends Component {
    render () {
        const {data} = this.props;
        return(
            <div className="main__target">
                <Preview data={data}/>
                <Form />
            </div>
        )
    }
}

export default Main;