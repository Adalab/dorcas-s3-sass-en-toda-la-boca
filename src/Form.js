import React from 'react';
import Disena from './Disena';
import Rellena from './Rellena';
import Comparte from './Comparte';
import PropTypes from 'prop-types';

class Form extends React.Component {
    render() {
        return (
            // clases sin usar en css: "main__section-form" "form"
            <div className="main__section-form">
                <form className="form" action="" method="post"> 
                    <Disena/>
                    <Rellena/>
                    <Comparte/>
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