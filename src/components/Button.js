import React from 'react';

class Button extends React.Component {
    constructor (props){
        super(props);
        // this.handleAddSkills=this.handleAddSkills.bind(this);
    }

    // handleAddSkills(){
    //     console.log('Aqui toda la logica');
    // }

    render (){
        const {addSkills}=this.props;
        const {classButton} = this.props;
        return (
            <button className="btn-select" type="button" onClick={addSkills} >      <i className={classButton}></i> 
          </button>
        );
    }
}
export default Button;