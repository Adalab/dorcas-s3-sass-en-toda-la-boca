import React from 'react';
import Colapsable from './Colapsable';

class Comparte extends React.Component {
  constructor(props) {
    super(props);

    this.handleShareCardButton = this.handleShareCardButton.bind(this);
  }

  handleShareCardButton() {
    console.log('comparte tarjeta');
  }

  render() {
    const {handleCreateCardButton}=this.props;
    return (
      <Colapsable title='Comparte' iconClass='fas fa-share-alt'>
        <div className="collapsible__content">
          <div className="form2__button--container">
            <button className="form2__button" id="btn-submit" type="button" name="button" onClick={handleCreateCardButton}>
              <i className="far fa-address-card button--icon"></i>
              <span>CREAR TARJETA</span>
            </button>
          </div>
          <div className="container__twitter">
            <div className="container__twitter--title">
            </div>
            <p className="response"></p>
            <div className="container__btn-twitter">
              <button className="btn-twitter" onClick={this.handleShareCardButton}>
                <i className="fab fa-twitter"></i> <a className="url-twitter link-twitter" href="" target="_blank">Compartir en twitter</a>
              </button>
            </div>
          </div>
        </div>
      </Colapsable>
    )
  }
}

export default Comparte;