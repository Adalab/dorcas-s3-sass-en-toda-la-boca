import React from 'react';
import './Form.css';
import Disena from './Disena';


class Form extends React.Component {
    render() {
        return (
            <div className="main__section-form">
                <form className="form" action="" method="post">   
                    <Disena/>
                 </form>
            </div>

        )
    }
}

export default Form;