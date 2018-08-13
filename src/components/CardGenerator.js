import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import PropTypes from 'prop-types';

class CardGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        palette: 1,
        typography: 1,
        name: '',
        job: '',
        phone: '',
        email: '',
        linkedin: '',
        github: '',
        photo: '',
        skills: ['CSS', 'html', 'JS'],
      },
      skills: [],
      countSkills: 1,
      divSkills: [1],
      classPlus: 'fas fa-plus',
      classMinus: 'fas fa-minus',
      url: '',
      twitter: '',
    };
    this.returnSkillsInjson = this.returnSkillsInjson.bind(this);
    this.handleRadioColorClick = this.handleRadioColorClick.bind(this);
    this.handleRadioFontClick = this.handleRadioFontClick.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleJobChange = this.handleJobChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleTelChange = this.handleTelChange.bind(this);
    this.handleLinkedinChange = this.handleLinkedinChange.bind(this);
    this.handleGithubChange = this.handleGithubChange.bind(this);
    this.fileInput = React.createRef();
    this.handleClickInput = this.handleClickInput.bind(this);
    this.handleInputFile = this.handleInputFile.bind(this);
    this.handleSkills = this.handleSkills.bind(this);
    this.handleAddSkills = this.handleAddSkills.bind(this);
    //this.handleUpdateSkill = this.handleUpdateSkill.bind(this);
    this.handleRemoveSkills = this.handleRemoveSkills.bind(this);
    this.handleResetButton = this.handleResetButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTwitter = this.handleTwitter.bind(this);
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')

      .then(function (response) {
        return response.json();
      }
      )
      .then(this.returnSkillsInjson);
  }

  componentWillMount() {
    if (localStorage.getItem('data')) {
      this.setState({
        data: JSON.parse(localStorage.getItem('data')),
      })
    } else {
      console.log('Bienvenido');
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('data', JSON.stringify(nextState.data));
  }

  handleResetButton() {
    console.log('reset tarjeta');
    localStorage.clear()
    this.setState({
      data: {
        email: "",
        github: "",
        job: "",
        linkedin: "",
        name: "",
        palette: "1",
        phone: "",
        photo: "",
        typography: "2",
        skills: ['skill-1', 'skill-2', 'skill-3'],
      }
    })
  }

  handleRadioColorClick(event) {
    if (event.target.value === '1') {
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          palette: 1
        }
      }))
    } else if (event.target.value === '2') {
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          palette: 2
        }
      }))
    } else if (event.target.value === '3') {
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          palette: 3
        }
      }))
    } else if (event.target.value === '4') {
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          palette: 4
        }
      }))
    }
  }

  handleRadioFontClick(event) {
    if (event.target.value === '1') {
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          typography: 1
        }
      }))
    } else if (event.target.value === '2') {
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          typography: 2
        }
      }))
    } else if (event.target.value === '3') {
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          typography: 3
        }
      }))
    } else if (event.target.value === '4') {
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          typography: 4
        }
      }))
    }
  }

  handleNameChange(event) {
    console.log('this event', event.target.value);

    this.setState({
      data: {
        ...this.state.data,
        name: event.target.value,
      }
    })
  }

  handleJobChange(event) {
    this.setState({
      data: {
        ...this.state.data,
        job: event.target.value,
      }
    })
  }

  handleEmailChange(event) {
    this.setState({
      data: {
        ...this.state.data,
        email: event.target.value,
      }
    })
  }

  handleTelChange(event) {
    this.setState({
      data: {
        ...this.state.data,
        phone: event.target.value,
      }
    })
  }

  handleLinkedinChange(event) {
    this.setState({
      data: {
        ...this.state.data,
        linkedin: event.target.value,
      }
    })
  }

  handleGithubChange(event) {
    this.setState({
      data: {
        ...this.state.data,
        github: event.target.value,
      }
    })
  }

  handleActions() {
    const actionToPerform = {
      name: this.handleNameChange,
      job: this.handleJobChange,
      email: this.handleEmailChange,
      phone: this.handleTelChange,
      linkedin: this.handleLinkedinChange,
      github: this.handleGithubChange,
    }
    return actionToPerform;
  }

  handleClickInput(event) {
    console.log('image input', this.fileInput)
    this.fileInput.current.click()
  }

  handleInputFile(event) {
    const fr = new FileReader();

    const loadImage = () => {
      this.setState({
        data: {
          ...this.state.data,
          photo: fr.result,
        }
      });
    }

    console.log(event.target.files[0])
    fr.addEventListener('load', loadImage);
    fr.readAsDataURL(event.target.files[0]);
  }

  handleImage() {
    const chargeImage = {
      input: this.handleInputFile,
      click: this.handleClickInput,
    }
    return chargeImage;
  }

  returnSkillsInjson(json) {
    // console.log(json.skills);
    this.setState({
      skills: json.skills,
    })
  }

  handleSkills(isAdd, index) {
    if (isAdd) this.handleAddSkills();
    if (!isAdd) this.handleRemoveSkills(index);
    console.log('divSkills cuando añade o quita', this.state.divSkills)
    console.log('isAdd', isAdd);
    console.log('index en cardgenerator', index);
  }

  handleAddSkills() {
    if (this.state.divSkills.length < 3) {
      this.setState({
        countSkills: this.state.countSkills + 1,
        divSkills: [...this.state.divSkills, this.state.countSkills],
      })
    }
  }

  handleRemoveSkills(indexRest) {
    console.log('antes de restar', this.state.countSkills)
    this.setState({
      countSkills: this.state.countSkills - 1,
      divSkills: this.state.divSkills.splice(indexRest, 2),
    }, () => console.log('después de restar', this.state.countSkills))
    console.log('quito', indexRest)
  }

  // handleUpdateSkill(event) {
  //   // console.log('index de update', index);
  //   console.log('event value', event);
  //   console.log('skills', this.state.data.skills);
    
  //   this.setState({
  //     data: {
  //       ...this.state.data,
  //       skills: event.target.value,
  //     }
  //   })
  // }

  handleTwitter(event) {
    const twitterURL = this.state.url
    this.setState({
      twitter: `https://twitter.com/intent/tweet?url=${twitterURL}&text=Acabo%20de%20crear%20mi%20tarjeta%20con%20Font%20Awesome%20de%20Sass%20en%20toda%20la%20boca!&hashtags=WomenInTech`
    })
    console.log('twitter', twitterURL)
  }

  handleSubmit(event) {
    console.log('tarjeta creada');
    console.log('data', this);
    event.preventDefault();
    const jason = this.state.data;
    console.log("json", jason)
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(jason),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(function (resp) {
        return resp.json();
      })

      .then((result) => {
        const cardURL = result.cardURL
        this.setState({ url: cardURL }, () => console.log('esta la url?', this.state))
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    // console.log('estado de las skills cuando se renderiza', this.state.divSkills);
    const {
      data,
      skills,
      divSkills,
    } = this.state;
    //console.log('skills???',skills);
    //console.log('this app', this.handleActions)
    // console.log('this.stateeeeee1', this.state);
    return (
      <div className="page__wrapper">
        <Header />
        <Main
          data={data}
          skills={skills}
          addSkills={this.handleSkills}
          divSkills={divSkills}
          updateSkill={this.handleUpdateSkill}
          actionToPerform={this.handleActions()}
          chargeImage={this.handleImage()}
          inputImage={this.fileInput}
          handleRadioColorClick={this.handleRadioColorClick}
          handleRadioFontClick={this.handleRadioFontClick}
          handleResetButton={this.handleResetButton}
          submit={this.handleSubmit}
          url={this.state.url}
          twitter={this.handleTwitter}
          twitterUrl={this.state.twitter}
        />
      </div>
    );
  }
}

CardGenerator.propTypes = {

  name: PropTypes.string,
  job: PropTypes.string,
  phone: PropTypes.number,
  email: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string

};

export default CardGenerator;
