import React from 'react';
import Colapsable from './Colapsable';

class Comparte extends React.Component {
  constructor(props) {
    super(props);

    this.handleCreateCardButton = this.handleCreateCardButton.bind(this);
    this.handleShareCardButton = this.handleShareCardButton.bind(this);
  }

  handleCreateCardButton() {
    console.log('tarjeta creada');
  }

  handleShareCardButton() {
    console.log('comparte tarjeta');
  }

  render() {
    return (
      <Colapsable>
        <div className="collapsible__container collapsible--visible" data-valor="3">
          <div className="title__section-desing-container collapsible__label">
            <div className="title__section-title">
              <legend className="title__section-desing-title ">
                <span>
                  <i className="fas fa-share-alt form2__title--icon"></i>
                </span>comparte</legend>
            </div>
            <div className="title__section-icon">
              <i className="fas fa-chevron-down icon-chevron-up-desing icon-collapsible" data-valor="3"></i>
            </div>
          </div>
          <div className="collapsible__content">
            <div className="form2__button--container">
              <button className="form2__button" id="btn-submit" type="button" name="button" onClick={this.handleCreateCardButton}>
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
        </div>
      </Colapsable>
    )
  }
}

export default Comparte;