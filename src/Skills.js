import React from 'react';
import Button from './Button';
import SelectOptions from './SelectOptions'

class Skills extends React.Component {
    constructor (props){
        super(props);
    }

   

    render (){
        return 
        <div>
            <SelectOptions />
            <Button />
        </div>
    }
}
export default Skills;