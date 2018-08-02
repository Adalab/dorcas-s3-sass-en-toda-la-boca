import React from 'react';
import Disena from './Disena';
import Rellena from './Rellena';
import Comparte from './Comparte';


class Form extends React.Component {
    render() {
        const {data} = this.props;
        const {actionToPerform} = this.props;
        const {chargeImage} = this.props;
        //console.log('this form', actionToPerform)
        return (
            // clases sin usar en css: "main__section-form" "form"
            <div className="main__section-form">
                <form className="form" action="" method="post"> 
                    <Disena/>
                    <Rellena data={data} actionToPerform = {actionToPerform} chargeImage = {chargeImage} />
                    <Comparte/>
                 </form>
            </div>
        )
    }
}

export default Form;