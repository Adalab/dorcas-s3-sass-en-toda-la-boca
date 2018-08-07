import React, { Component } from 'react';
import Form from './Form';
import Preview from './Preview';

class Main extends Component {
    render () {
        const {data,skills} = this.props;
        const {actionToPerform} = this.props;
        const {chargeImage} = this.props;
        const {inputImage} = this.props;
        const {addSkills}=this.props;
        const {divSkills}=this.props;
        const {classMinus, classPlus} = this.props;
        const {handleRadioColorClick} = this.props;
        //console.log('this main', actionToPerform)
        console.log('this.stateeeeee2',this.props);
        return(
            <div className="main__target">
                <Preview data={data}/>
                <Form 
                    classPlus = {classPlus}
                    classMinus={classMinus}
                    divSkills={divSkills}
                    addSkills={addSkills}
                    skills={skills}
                    data={data} 
                    actionToPerform = {actionToPerform} 
                    chargeImage = {chargeImage}
                    inputImage = {inputImage}
                    handleRadioColorClick= {handleRadioColorClick} 
                />
            </div>
        )
    }
}

export default Main;