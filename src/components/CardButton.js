import React from 'react';

class CardButton extends React.Component {

    isAddOperation() {
        const
            classPlus = 'fas fa-plus',
            { buttonClass } = this.props;

        return buttonClass === classPlus;
    }

    render() {
        const {
            addSkills,
            buttonClass,
            buttonIndex,
        } = this.props;
        return (
            <button className="btn-select" type="button"
                onClick={() => addSkills(this.isAddOperation(),buttonIndex)} >
                <i className={buttonClass}></i>
            </button>
        );
    }
}

export default CardButton;