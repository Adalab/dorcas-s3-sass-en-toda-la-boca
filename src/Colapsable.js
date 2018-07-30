import React from 'react';

class Colapsable extends React.Component {
    render() {
        return (
            <fieldset className="container__colors-fonts subsection--stuffed form2--stuffed">
               
                    {this.props.children}
               
            </fieldset>
        )
    }
}

export default Colapsable;