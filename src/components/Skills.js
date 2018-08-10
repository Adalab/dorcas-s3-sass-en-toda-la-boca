import React from 'react';
import SelectOptions from './SelectOptions';
import Button from './Button';

class Skills extends React.Component {
    constructor (props){
        super(props);
    }


    render (){
        const {skills,divSkills}=this.props;
        const {addSkills}=this.props;
        const {classMinus, classPlus} = this.props;

        return (
            <div>
                {divSkills.map( (valor, i)=>{
                    return (
                        <div key={i}>
                            <SelectOptions
                                skills={skills}
                            />
                            <Button addSkills={addSkills} 
                                    classButton={classPlus}/>
                        </div>);
                } )}
             </div>
        )
       
    }
}
export default Skills;