import React, { Component } from 'react';
import CardForm from './CardForm';
import Preview from './Preview';

class Main extends Component {
    render () {
        const {
            data,
            skills,
            actionToPerform,
            chargeImage,
            inputImage,
            addSkills,
            divSkills,
        } = this.props;
        //console.log('this main', actionToPerform)
        return(
            <div className="main__target">
                <Preview data={data}/>
                <CardForm 
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