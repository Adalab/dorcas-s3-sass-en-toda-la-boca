import React from 'react';
import './Form.css';
import Disena from './Disena';
import Rellena from './Rellena';


class Form extends React.Component {
    render() {
        return (
            <div className="main__section-form">
                <form className="form" action="" method="post">   
                    <Disena/>
                    <Rellena/>
                 </form>
            </div>
        )
    }
}

export default Form;