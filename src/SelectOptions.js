import React from 'react';


class SelectOptions extends React.Component {
    render(){
        const {skills} = this.props;
        return(
            <select className="skills--stuffed" name="" id="">
                {skills.map(function(skill,index){
                    return(<option value="" key={index}>{skill}</option>);
                })}
            </select>
        );
    }
}

export default SelectOptions;