import React from 'react';
import Colapsable from './Colapsable';

class Rellena extends React.Component {
    render() {
        return (
            <Colapsable>
            <div className="collapsible__container collapsible--visible" data-valor="2">
              <div className="title__section-desing-container collapsible__label">
                <div className="title__section-title">
                  <legend className="title__section-desing-title ">
                    <span>
                      <i className="far fa-keyboard section-stuffed__icon"></i>
                    </span>rellena</legend>
                </div>
                <div className="title__section-icon">
                  <i className="fas fa-chevron-down icon-chevron-up-desing icon-collapsible" data-valor="2"></i>
                </div>
              </div>
              <div className="collapsible__content">
  
                <label className="label--stuffed" for="name">Nombre completo</label>
                <input className="input--stuffed input--text local--name" data-elementos="card--name" placeholder="Ej: Sally Hill" id="complete--name"
                  type="text" name="name" value="" />
  
                <label className="label--stuffed" for="job">Puesto</label>
                <input className="input--stuffed input--text local--job" data-elementos="card--job" placeholder="Ej: Front-end unicorn" id="job"
                  type="text" name="job" value=""/>
  
                <label className="label--stuffed" for="img--profile">Imagen de perfil</label>
                <div className="div--stuffed__img">
                  <button className="input--stuffed__img " type="button">Añadir imagen</button>
                  <input className="input__img-hiddenField" name="photo" id="img--profile" type="file" required />
                  <div className="box--previmg">
                    <img className="preview" src="" alt="" />
                  </div>
                </div>
  
                <label className="label--stuffed" for="email">Email</label>
                <input className="input--stuffed input--href local--email" data-href="email" data-type="email" placeholder="Ej: sally-hill@gmail.com" id="email"
                  type="email" name="email" value="" />
  
                <label className="label--stuffed" for="phone">Teléfono</label>
                <input className="input--stuffed input--href local--phone" data-href="tlf" data-type="tlf" placeholder="Ej:555-555-555" id="tlf" type="tel" name="phone"
                  value="" />
  
                <label className="label--stuffed" for="linkedin">Linkedin</label>
                <input className="input--stuffed input--href local--linkedin" data-href="linkedin" data-type="linkedin" placeholder="Ej: sally-hill"
                  id="lkd" type="text" name="linkedin" value="" />
  
                <label className="label--stuffed" for="github">Github</label>
                <input className="input--stuffed input--href local--github" data-href="github" data-type="github" placeholder="Ej: sally-hill" id="gith" type="text"
                  name="github" value="" />
  
                <label className="label--stuffed" for="skills1">Habilidades (máximo 3)</label>
  
                <div className="label--stuffed__container-select">
  
                </div>
                <ul className="card__skills">
  
                </ul>
              </div>
            </div>
          </Colapsable>

        )
    }
}

export default Rellena;