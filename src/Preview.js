import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

class Preview extends React.Component {
    render() {
        console.log(this.props);
        const {name,job} = this.props.data;
      return (
        <div className="main__section-card">
            <section className="section--top">
                <div className="section--top-position-center">
                    <div className="section--top--btn">
                        <button className="button js-button-reset" type="button" name="button">
                            <i className="far fa-trash-alt button__icon"></i>
                            <span>RESET</span>
                        </button>
                    </div>
                    <div className="section--top__card primary-palette">
                        <span className="card__title font__style-font1 localcard--name" id="card--name">
                            {name}
                        </span>
                        <span className="card__subtitle" id="card--job">
                            {job}
                        </span>
                        <img className="photo" src="https://picsum.photos/240/200" alt="foto"/>
                        <ul className="card__media">
                            <a className="localcard--phone" id="tlf" href="" target="_blank">
                                <li className="card__media--icon">
                                    <i className="fas fa-mobile-alt icon-card-color"></i>
                                </li>
                            </a>
                            <a className="localcard--email" id="email" href="" target="_blank">
                                <li className="card__media--icon">
                                    <i className="far fa-envelope icon-card-color"></i>
                                </li>
                            </a>
                            <a className="localcard--linkedin" id="linkedin" href="" target="_blank">
                                <li className="card__media--icon">
                                    <i className="fab fa-linkedin-in icon-card-color"></i>
                                </li>
                            </a>
                            <a className="localcard--github" id="github" href="" target="_blank">
                                <li className="card__media--icon">
                                    <i className="fab fa-github-alt icon-card-color"></i>
                                </li>
                            </a>
                        </ul>

                        <hr className="line"/>
    
                        <ul className="card__skills">
                            <li className="card__skills--icon">
                                <span className="icon__text">HTML</span>
                            </li>
                            <li className="card__skills--icon">
                                <span className="icon__text">CSS</span>
                            </li>
                            <li className="card__skills--icon">
                                <span className="icon__text">GULP</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
      );
    }
  }

export default Preview;