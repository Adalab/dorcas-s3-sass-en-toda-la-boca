import React, { Component } from 'react';
import CardForm from './CardForm';
import Preview from './Preview';

class Main extends Component {
    render() {
        const {
            data,
            skills,
            actionToPerform,
            chargeImage,
            inputImage,
            addSkills,
            divSkills,
            classMinus,
            classPlus,
            handleResetButton,
            updateSkill,
            handleRadioColorClick,
            handleRadioFontClick,
            submit,
            url,
            twitter,
            twitterUrl,
        } = this.props;
        //console.log('this main', actionToPerform)
        // console.log('this.stateeeeee2',this.props);
        return (
            <div className="main__target">
                <Preview
                    data={data}
                    handleResetButton={handleResetButton}

                />
                <CardForm
                    classPlus={classPlus}
                    classMinus={classMinus}
                    updateSkill={updateSkill}
                    divSkills={divSkills}
                    addSkills={addSkills}
                    skills={skills}
                    data={data}
                    actionToPerform={actionToPerform}
                    chargeImage={chargeImage}
                    inputImage={inputImage}
                    handleRadioColorClick={handleRadioColorClick}
                    handleRadioFontClick={handleRadioFontClick}
                    submit={submit}
                    url={url}
                    twitter={twitter}
                    twitterUrl={twitterUrl}
                />
            </div>
        )
    }
}

export default Main;