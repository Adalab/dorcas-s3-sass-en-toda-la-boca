import React from 'react';

class Button extends React.Component {
    constructor (props){
        super(props);
        // this.printButton=this.printButton.bind(this);
    }

    // handleAddSkills(){
    //     console.log('Aqui toda la logica');
    // }

    // printButton (){
    //     // const {counter}= this.props;
    //     const {classPlus,classMinus} = this.props;
    //     // const plus = classPlus;
    //     // const minus = classMinus;
    //     return plus;
    // }

    render (){
        const {addSkills}=this.props;
        const {classButton} = this.props;
        const {divSkills} = this.props;
        const {buttonClass} = this.props;

        
        // if(divSkills.length === 1){
        //     return (
        //         <button className="btn-select" type="button" onClick={addSkills} >      <i className={classPlus}></i> 
        //       </button>
        //     );
        // } else  if(divSkills.length === 2) {
        //     return (
        //         alert('nada')
        //     );
        
        return (
            <button className={`btn-select ${buttonClass}`} type="button" onClick={addSkills} ><i className={classButton}></i> </button>
        );
    }
}

export default Button;