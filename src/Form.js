import React from 'react';
import './Form.css';
import Disena from './Disena';
import Rellena from './Rellena';
import Comparte from './Comparte';


class Form extends React.Component {
    render() {
        return (
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

export default Form;