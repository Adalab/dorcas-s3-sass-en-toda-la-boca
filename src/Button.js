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
        return <button type="button" onClick={this.handleAddSkills} >Hola </button> 
    }
}
export default Button;