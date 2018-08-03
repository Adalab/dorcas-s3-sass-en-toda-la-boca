import React, { Component } from 'react';
import Form from './Form';
import Preview from './Preview';

class Main extends Component {
    render () {
        const {data} = this.props;
        const {actionToPerform} = this.props;
        const {chargeImage} = this.props;
        const {inputImage} = this.props;
        //console.log('this main', actionToPerform)
        return(
            <div className="main__target">
                <Preview data={data}/>
                <Form  
                    data={data} 
                    actionToPerform = {actionToPerform} 
                    chargeImage = {chargeImage}
                    inputImage = {inputImage} 
                />
            </div>
        )
    }
}

export default Main;