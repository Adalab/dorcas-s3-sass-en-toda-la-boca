import React from 'react';
import Disena from './Disena';
import Rellena from './Rellena';
import Comparte from './Comparte';
import PropTypes from 'prop-types';

class CardForm extends React.Component {
    render() {
        const {
            data,
            skills,
            actionToPerform,
            chargeImage,
            inputImage,
            addSkills,
            divSkills,
            updateSkill
        } = this.props;
        //console.log('this form', actionToPerform)
        return (
            // clases sin usar en css: "main__section-form" "form"
            <div className="main__section-form">
                <form className="form" action="" method="post">
                    <Disena />
                    <Rellena
                        updateSkill={updateSkill}
                        divSkills={divSkills}
                        addSkills={addSkills}
                        skills={skills}
                        data={data}
                        actionToPerform={actionToPerform}
                        chargeImage={chargeImage}
                        inputImage={inputImage}
                    />
                    <Comparte />
                </form>
            </div>
        )
    }
}

CardForm.propTypes = {

    name: PropTypes.string,
    job: PropTypes.string,
    phone: PropTypes.number,
    email: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string

};

export default CardForm;