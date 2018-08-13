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
            handleRadioColorClick,
            handleRadioFontClick,
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
                    handleRadioColorClick= {handleRadioColorClick}
                    handleRadioFontClick= {handleRadioFontClick}
                />
            </div>
        )
    }
}

export default Main;