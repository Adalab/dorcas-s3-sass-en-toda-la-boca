import React, { Component } from 'react';
import Form from './Form';
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
                <Form
                    classPlus={classPlus}
                    classMinus={classMinus}
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