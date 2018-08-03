import React from 'react';
import Colapsable from './Colapsable'

class Disena extends React.Component {
    render() {
        return (
            <Colapsable>
            <div className="collapsible__container" data-valor="1" >
              <div className="title__section-desing-container collapsible__label">
                <div className="title__section-title">
                  <legend className="title__section-desing-title ">
                    <span>
                      <i className="far fa-object-ungroup icon-ungroup-desing"></i>
                    </span> diseña</legend>
                </div>
                <div className="title__section-icon">
                  <i className="fas fa-chevron-up icon-chevron-up-desing icon-collapsible" data-valor="1"></i>
                </div>
              </div>
              
              <div className="collapsible__content">
                <div className="form__container-radio">
                  <div className="label__design">
                    <label className="label-block" htmlFor="">colores</label>
                  </div>
                  <div className="input__design">
                    <label className="block first-block" htmlFor="paleta-primary">
                      <input className="radio-colors select-style" type="radio" value="1" id="paleta-primary" name="palette"/>
                      <span className="checkmark"></span>
                      <div className="radio__options">
                        <label htmlFor="paleta-primary" className="color color__paleta-primary1"></label>
                        <label htmlFor="paleta-primary" className="color color__paleta-primary2"></label>
                        <label htmlFor="paleta-primary" className="color color__paleta-primary3"></label>
                      </div>
                    </label>
  
                    <label className="block" htmlFor="paleta-secondary">
                      <input className="radio-colors select-style" type="radio" value="2" id="paleta-secondary" name="palette"/>
                      <span className="checkmark"></span>
                      <div className="radio__options">
                        <label htmlFor="paleta-secondary" className="color color__paleta-secondary1"></label>
                        <label htmlFor="paleta-secondary" className="color color__paleta-secondary2"></label>
                        <label htmlFor="paleta-secondary" className="color color__paleta-secondary3"></label>
                      </div>
                    </label>
                    <label className="block" htmlFor="paleta-tertiary">
                      <input className="radio-colors select-style" type="radio" value="3" id="paleta-tertiary" name="palette"/>
                      <span className="checkmark"></span>
                      <div className="radio__options">
                        <label htmlFor="paleta-tertiary" className="color color__paleta-tertiary1"></label>
                        <label htmlFor="paleta-tertiary" className="color color__paleta-tertiary2"></label>
                        <label htmlFor="paleta-tertiary" className="color color__paleta-tertiary3"></label>
                      </div>
                    </label>
                    <label className="block" htmlFor="paleta-hearts">
                      <input className="radio-colors select-style" type="radio" value="4" id="paleta-hearts" name="palette"/>
                      <span className="checkmark"></span>
                      <div className="radio__options">
                        <label htmlFor="paleta-hearts" className="color color__paleta-hearts1"></label>
                        <label htmlFor="paleta-hearts" className="color color__paleta-hearts2"></label>
                        <label htmlFor="paleta-hearts" className="color color__paleta-hearts3"></label>
                      </div>
                    </label>
  
                  </div>
                </div>
                
  
                <div className="form__container-radio top-container-radiofont">
                  <div className="label__design">
                    <label className="label-block" htmlFor="">fuentes</label>
                  </div>
                  <div className="input__design">
                    <label className="block first-block" htmlFor="style-fonts1">
                      <input className="radio-fonts select-style" type="radio" value="1" id="style-fonts1" name="typography" />
                      <span className="checkmark"></span>
                      <div className="radio__options">
                        <label htmlFor="style-fonts" className="font__style-font1">ubuntu</label>
                      </div>
                    </label>
                    <label className="block" htmlFor="style-fonts2">
                      <input className="radio-fonts select-style" type="radio" value="2" id="style-fonts2" name="typography" />
                      <span className="checkmark"></span>
                      <div className="radio__options">
                        <label htmlFor="style-fonts2" className="font__style-font2">comic sans</label>
                      </div>
                    </label>
                    <label className="block" htmlFor="style-fonts3">
                      <input className="radio-fonts select-style" type="radio" value="3" id="style-fonts3" name="typography" />
                      <span className="checkmark"></span>
                      <div className="radio__options">
                        <label htmlFor="style-fonts3" className="font__style-font3">montserrat</label>
                      </div>
                    </label>
                    <label className="block" htmlFor="style-fonts4">
                      <input className="radio-fonts select-style" type="radio" value="4" id="style-fonts4" name="typography"/>
                      <span className="checkmark"></span>
                      <div className="radio__options">
                        <label htmlFor="style-fonts4" className="font__style-font4">pacifico</label>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </Colapsable>
        )
    }
}

export default Disena;

