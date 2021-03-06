import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import PropTypes from 'prop-types';
import sassLogo from '../images/sass_logo.svg';


const paletteClasses= {
    '1': "primary-palette",
    '2': "secondary-palette",
    '3': "tertiary-palette",
    '4': "hearts-palette"
}
  
const typographies ={
    '1': 'font__style-font1',
    '2': 'font__style-font2',
    '3': 'font__style-font3',
    '4': 'font__style-font4'
}

class Preview extends React.Component {
    
    render() {
        // console.log('quiero ver estas this props de preview:',this.props);
        const { 
            palette, 
            typography,
            name, 
            job, 
            phone, 
            email, 
            linkedin, 
            github, 
            photo, 
            skills
        } = this.props.data;
        const {handleResetButton}=this.props; 
        console.log('paletica',palette);
        return (
            <div className="main__section-card">
                <section className="section--top">
                    <div className="section--top-position-center">
                        <div className="section--top--btn">
                            <button className="button js-button-reset" type="button" name="button" onClick={handleResetButton}>
                                <i className="far fa-trash-alt button__icon"></i>
                                <span>RESET</span>
                            </button>
                        </div>
                        <div className={`section--top__card ${paletteClasses[palette]}`}>
                            <span className={`card__title ${typographies[typography]} localcard--name`} id="card--name">
                                {name || 'Nombre Completo'}
                            </span>
                            <span className={`card__subtitle ${typographies[typography]}`} id="card--job">
                                {job || 'Web Developer'}
                            </span>
                            <img className="photo" src={photo || sassLogo} alt="foto" />
                            <ul className="card__media">
                                <a className="localcard--phone" id="tlf" href={`tel:${phone}`}   target="_blank">
                                    <li className="card__media--icon">
                                        <i className="fas fa-mobile-alt icon-card-color"></i>
                                    </li>
                                </a>
                                <a className="localcard--email" id="email" href={`mailto:${email}`}  target="_blank">
                                    <li className="card__media--icon">
                                        <i className="far fa-envelope icon-card-color"></i>
                                    </li>
                                </a>
                                <a className="localcard--linkedin" id="linkedin" href={` https://es.linkedin.com/in/: ${linkedin}`}   target="_blank">
                                    <li className="card__media--icon">
                                        <i className="fab fa-linkedin-in icon-card-color"></i>
                                    </li>
                                </a>
                                <a className="localcard--github" id="github" href={` https://github.com/: ${github}`} target="_blank">
                                    <li className="card__media--icon">
                                        <i className="fab fa-github-alt icon-card-color"></i>
                                    </li>
                                </a>
                            </ul>

                            <hr className="line" />

                            <ul className="card__skills">
                                <li className="card__skills--icon">
                                    <span className={`icon__text ${typographies[typography]} `}>{skills[0]}</span>
                                </li>
                                <li className="card__skills--icon">
                                    <span className={`icon__text ${typographies[typography]} `}>{skills[1]}</span>
                                </li>
                                <li className="card__skills--icon">
                                    <span className={`icon__text ${typographies[typography]} `}>{skills[2]} </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

Preview.propTypes = {

    name:PropTypes.string,
    job: PropTypes.string,
    phone: PropTypes.number,
    email: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string
  
  };

export default Preview;