import React from 'react';
import Colapsable from './Colapsable';
import Skills from './Skills';
import PropTypes from 'prop-types';
import sassLogo from '../images/sass_logo.svg';

class Rellena extends React.Component {

  render() {
    // console.log('props',this.props)
    const {
      data,
      skills,
      actionToPerform,
      chargeImage,
      inputImage,
      addSkills,
      divSkills,
      updateSkill,
      classMinus,
      classPlus,
    } = this.props;

    return (
      <Colapsable title='Rellena' iconClass='far fa-keyboard'>
        <div className="collapsible__content">

          <label className="label--stuffed" htmlFor="name">Nombre completo</label>
          <input className="input--stuffed input--text local--name" data-elementos="card--name" placeholder="Ej: Sally Hill" id="complete--name" type="text" name="name" value={data.name} onChange={actionToPerform.name} />

          <label className="label--stuffed" htmlFor="job">Puesto</label>
          <input className="input--stuffed input--text local--job" data-elementos="card--job" placeholder="Ej: Front-end unicorn" id="job"
            type="text" name="job" value={data.job} onChange={actionToPerform.job} />

          <label className="label--stuffed" htmlFor="img--profile">Imagen de perfil</label>
          <div className="div--stuffed__img">
            <button className="input--stuffed__img " type="button" onClick={chargeImage.click} >Añadir imagen</button>
            <input className="input__img-hiddenField" name="photo" id="img--profile" type="file" ref={inputImage} onChange={chargeImage.input} required />
            <div className="box--previmg">
              <img className="preview" src={data.photo || sassLogo} alt="preview" />
            </div>
          </div>

          <label className="label--stuffed" htmlFor="email">Email</label>
          <input className="input--stuffed input--href local--email" data-href="email" data-type="email" placeholder="Ej: sally-hill@gmail.com" id="email"
            type="email" name="email" value={data.email} onChange={actionToPerform.email} />

          <label className="label--stuffed" htmlFor="phone">Teléfono</label>
          <input className="input--stuffed input--href local--phone" data-href="tlf" data-type="tlf" placeholder="Ej:555-555-555" id="tlf" type="tel" name="phone" value={data.phone} onChange={actionToPerform.phone} />

          <label className="label--stuffed" htmlFor="linkedin">Linkedin</label>
          <input className="input--stuffed input--href local--linkedin" data-href="linkedin" data-type="linkedin" placeholder="Ej: sally-hill"
            id="lkd" type="text" name="linkedin" value={data.linkedin} onChange={actionToPerform.linkedin} />

          <label className="label--stuffed" htmlFor="github">Github</label>
          <input className="input--stuffed input--href local--github" data-href="github" data-type="github" placeholder="Ej: sally-hill" id="gith" type="text"
            name="github" value={data.github} onChange={actionToPerform.github} />

          <label className="label--stuffed" htmlFor="skills1">Habilidades (máximo 3)</label>

          <div className="label--stuffed__container-select">
            <Skills
              updateSkill={updateSkill}
              classPlus={classPlus}
              classMinus={classMinus}
              skills={skills}
              addSkills={addSkills}
              divSkills={divSkills}
            />
          </div>
          <ul className="card__skills">

          </ul>
        </div>
      </Colapsable>

    )
  }
}
Rellena.propTypes = {

  name: PropTypes.string,
  job: PropTypes.string,
  phone: PropTypes.number,
  email: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string

};

export default Rellena;