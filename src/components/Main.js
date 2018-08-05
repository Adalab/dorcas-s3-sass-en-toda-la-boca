import React, { Component } from 'react';
import Form from './Form';
import Preview from './Preview';

class Main extends Component {
    render () {
        const {data,skills,counter} = this.props;
        const {actionToPerform} = this.props;
        const {chargeImage} = this.props;
        const {inputImage} = this.props;
        const {addSkills}=this.props;
        const {divSkills}=this.props;
        const {classMinus, classPlus} = this.props;
        //console.log('this main', actionToPerform)
        return(
            <div className="main__target">
                <Preview data={data}/>
                <Form 
                    counter={counter}
                    classPlus = {classPlus}
                    classMinus={classMinus}
                    divSkills={divSkills}
                    addSkills={addSkills}
                    skills={skills}
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