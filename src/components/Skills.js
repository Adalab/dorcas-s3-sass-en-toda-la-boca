import React from 'react';
import SelectOptions from './SelectOptions';
import Button from './Button';

class Skills extends React.Component {
    constructor (props){
        super(props);
    }


    render (){
        const {skills,divSkills,counter}=this.props;
        const {addSkills}=this.props;
        const {classMinus, classPlus} = this.props;
        const Plus = 'Plus';
        const Minus = 'Minus';
        

        console.log('estamos en casa de loretus',this.props)
        return (
            <div>
                {divSkills.map( (index)=>{
                    if(divSkills.length === 1){
                        return (
                            <div key={index}>
                                <SelectOptions
                                    skills={skills}
                                />
                                <Button counter={counter}
                                        key={index}
                                        classButton={classPlus}
                                        divSkills={divSkills}
                                        addSkills={addSkills}                   buttonClass={Plus}                 
                                        />
                            </div>
                            
                           
                        );
                    } else if(divSkills.length === 2){
                        if(index === 1){
                            return (
                                <div key={index}>
                                    <SelectOptions
                                        skills={skills}
                                    />
                                    <Button counter={counter}
                                        key={index}
                                        classButton={classMinus}
                                        divSkills={divSkills}
                                        addSkills={addSkills}
                                        buttonClass={Minus}                 
                                    />
                                </div>
                            );
                        } else {
                            return (
                                <div key={index}>
                                    <SelectOptions
                                        skills={skills}
                                    />
                                    <Button counter={counter}
                                        key={index}
                                        classButton={classPlus}
                                        divSkills={divSkills}
                                        addSkills={addSkills}
                                        buttonClass={Plus}                 
                                    />
                                </div>
                            ); 
                        }
                    } else if (divSkills.length === 3){
                        return (
                            <div key={index}>
                                <SelectOptions
                                    skills={skills}
                                />
                                <Button counter={counter}
                                    key={index}
                                    classButton={classMinus}
                                    divSkills={divSkills}
                                    addSkills={addSkills}
                                    buttonClass={Minus}                
                                />
                            </div>
                        );
                    } 
                } )}
             </div>
        )
       
    }
}
export default Skills;