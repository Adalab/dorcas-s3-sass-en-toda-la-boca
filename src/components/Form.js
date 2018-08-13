import React from 'react';
import Disena from './Disena';
import Rellena from './Rellena';
import Comparte from './Comparte';
import PropTypes from 'prop-types';

class Form extends React.Component {
    render() {
        const {data,skills} = this.props;
        const {actionToPerform} = this.props;
        const {chargeImage} = this.props;
        const {inputImage} = this.props;
        const {addSkills} = this.props;
        const {divSkills} = this.props;
        const {classMinus, classPlus} = this.props;
        const {handleRadioColorClick, handleRadioFontClick,submit, url} = this.props;
        //console.log('this form', actionToPerform)
        return (
            // clases sin usar en css: "main__section-form" "form"
            <div className="main__section-form">
                <form className="form" action="" method="post"> 
                    <Disena
                        handleRadioColorClick= {handleRadioColorClick}
                        handleRadioFontClick= {handleRadioFontClick} 
                        data={data} 
                    />
                    <Rellena 
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
                    <Comparte
                        submit ={submit}
                        url={url}
                        />
                 </form>
            </div>
        )
    }
}

Form.propTypes = {

    name:PropTypes.string,
    job: PropTypes.string,
    phone: PropTypes.number,
    email: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string
  
  };

export default Form;