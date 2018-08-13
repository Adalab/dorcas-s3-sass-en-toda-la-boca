import React from 'react';
import SelectOptions from './SelectOptions';
import Button from './Button';

class Skills extends React.Component {

    render() {
        const {
            skills,
            divSkills,
            addSkills,
            classMinus,
            classPlus
        } = this.props;

        return (
            <div>
                {divSkills.map((index) => {
                    return (
                        <div key={index}>
                            <SelectOptions
                                skills={skills}
                            />
                            <Button addSkills={addSkills}
                                classButton={classPlus} />
                        </div>);
                })}
            </div>
        )

    }
}
export default Skills;