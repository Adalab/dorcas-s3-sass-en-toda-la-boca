import React from 'react';
import PropTypes from 'prop-types';

class Colapsable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: '',
            arrow: 'down',
        }
        
        this.handleColapsable = this.handleColapsable.bind(this);
    }

    handleColapsable() {
        this.setState((prevState) => ({
            visible: (prevState.visible === '') ? 'collapsible--visible' : ''
        }));
        this.setState((prevState) => ({
            arrow: (prevState.arrow === 'down') ? 'up' : 'down'
        }));
    }

    render() {
        return (
            <fieldset className="container__colors-fonts subsection--stuffed form2--stuffed">
                <div className={`collapsible__container ${this.state.visible}`} >
                    <div onClick={this.handleColapsable} className="title__section-desing-container collapsible__label">
                        <div className="title__section-title">
                            <legend className="title__section-desing-title ">
                                <span>
                                    <i className={`${this.props.iconClass} icon-ungroup-desing`}></i>
                                </span>{this.props.title}</legend>
                        </div>
                        <div className="title__section-icon">
                            <i className={`fas fa-chevron-${this.state.arrow} icon-chevron-down-desing icon-collapsible`} data-valor="1"></i>
                        </div>
                    </div>
                    {this.props.children}
                </div>
            </fieldset>
        )
    }
}

Colapsable.propTypes = {

    iconClass:PropTypes.string,
    title: PropTypes.string,
  
  };

export default Colapsable;