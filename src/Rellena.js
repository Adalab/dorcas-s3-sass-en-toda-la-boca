import React from 'react';
import './Rellena.css';


class Rellena extends React.Component {
    render() {
        return (
            <fieldset class="subsection--stuffed">
            <div class="collapsible__container" data-valor="2">
              <div class="title__section-desing-container collapsible__label">
                <div class="title__section-title">
                  <legend class="title__section-desing-title ">
                    <span>
                      <i class="far fa-keyboard section-stuffed__icon"></i>
                    </span>rellena</legend>
                </div>
                <div class="title__section-icon">
                  <i class="fas fa-chevron-down icon-chevron-up-desing icon-collapsible" data-valor="2"></i>
                </div>
              </div>
              <div class="collapsible__content">
  
                <label class="label--stuffed" for="name">Nombre completo</label>
                <input class="input--stuffed input--text local--name" data-elementos="card--name" placeholder="Ej: Sally Hill" id="complete--name"
                  type="text" name="name" value="" />
  
                <label class="label--stuffed" for="job">Puesto</label>
                <input class="input--stuffed input--text local--job" data-elementos="card--job" placeholder="Ej: Front-end unicorn" id="job"
                  type="text" name="job" value=""/>
  
                <label class="label--stuffed" for="img--profile">Imagen de perfil</label>
                <div class="div--stuffed__img">
                  <button class="input--stuffed__img " type="button">Añadir imagen</button>
                  <input class="input__img-hiddenField" name="photo" id="img--profile" type="file" required />
                  <div class="box--previmg">
                    <img class="preview" src="" alt="" />
                  </div>
                </div>
  
                <label class="label--stuffed" for="email">Email</label>
                <input class="input--stuffed input--href local--email" data-href="email" data-type="email" placeholder="Ej: sally-hill@gmail.com" id="email"
                  type="email" name="email" value="" />
  
                <label class="label--stuffed" for="phone">Teléfono</label>
                <input class="input--stuffed input--href local--phone" data-href="tlf" data-type="tlf" placeholder="Ej:555-555-555" id="tlf" type="tel" name="phone"
                  value="" />
  
                <label class="label--stuffed" for="linkedin">Linkedin</label>
                <input class="input--stuffed input--href local--linkedin" data-href="linkedin" data-type="linkedin" placeholder="Ej: sally-hill"
                  id="lkd" type="text" name="linkedin" value="" />
  
                <label class="label--stuffed" for="github">Github</label>
                <input class="input--stuffed input--href local--github" data-href="github" data-type="github" placeholder="Ej: sally-hill" id="gith" type="text"
                  name="github" value="" />
  
                <label class="label--stuffed" for="skills1">Habilidades (máximo 3)</label>
  
                <div class="label--stuffed__container-select">
  
                </div>
                <ul class="card__skills">
  
                </ul>
              </div>
            </div>
          </fieldset>

        )
    }
}

export default Rellena;