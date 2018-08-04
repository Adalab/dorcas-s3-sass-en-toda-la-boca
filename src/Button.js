import React from 'react';

class Button extends React.Component {
    constructor (props){
        super(props);
        this.handleAddSkills=this.handleAddSkills.bind(this);
    }

    handleAddSkills(){
        console.log('Aqui toda la logica');
    }

    render (){
        return <button className="btn-select" type="button" onClick={this.handleAddSkills} > <i className="fas fa-plus"></i> </button> 
    }
}
export default Button;