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
      divSkills:[1],
      classPlus:'fas fa-plus',
      classMinus:'fas fa-minus',
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
    this.handleAddSkills = this.handleAddSkills.bind(this);
    this.handleResetButton = this.handleResetButton.bind(this);

  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
    
      .then(function (response) {
        return response.json();
      }
      )
      .then(this.returnSkillsInjson);
  }

  handleResetButton(event) {
    console.log('reset tarjeta');
    this.setState({
        data:{
            email: "",
            github: "",
            job: "",
            linkedin: "",
            name: "",
            palette: "1",
            phone: "",
            photo: "",
            typography: "2",
            skills: ['HTML','git'],
        }
    })
  }

  handleRadioColorClick(event){
    if(event.target.value === '1'){
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          palette: 1
        }
      }))
    } else if(event.target.value === '2'){
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          palette: 2
        }
      }))
    } else if(event.target.value === '3'){
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          palette: 3
        }
      }))
    } else if(event.target.value === '4'){
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          palette: 4
        }
      }))
    }
  }

  handleRadioFontClick(event){
    if(event.target.value === '1'){
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          typography: 1
        }
      }))
    } else if(event.target.value === '2'){
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          typography: 2
        }
      }))
    } else if(event.target.value === '3'){
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          typography: 3
        }
      }))
    } else if(event.target.value === '4'){
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          typography: 4
        }
      }))
    }
  }

  handleNameChange (event) {
    console.log('this event', event.target.value);
    
    this.setState({
      data: {
        ...this.state.data,
        name: event.target.value,
      }
    })
  }

  handleJobChange (event) {
    this.setState({
      data: {
        ...this.state.data,
        job: event.target.value,
      }
    })
  }

  handleEmailChange (event) {
    this.setState({
      data: {
        ...this.state.data,
        email: event.target.value,
      }
    })
  }

  handleTelChange (event) {
    this.setState({
      data: {
        ...this.state.data,
        phone: event.target.value,
      }
    })
  }

  handleLinkedinChange (event) {
    this.setState({
      data: {
        ...this.state.data,
        linkedin: event.target.value,
      }
    })
  }

  handleGithubChange (event) {
    this.setState({
      data: {
        ...this.state.data,
        github: event.target.value,
      }
    })
  }

  handleActions () {
    const actionToPerform = {
      name : this.handleNameChange,
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

  handleInputFile (event) {
    const fr = new FileReader();

    const loadImage = () => {
        this.setState ({
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

  handleImage () {
    const chargeImage = {
      input: this.handleInputFile,
      click: this.handleClickInput,
    }
    return chargeImage;
  }

  returnSkillsInjson(json) {
    console.log(json.skills);
    this.setState({
      skills: json.skills,
    })
  }

  handleAddSkills(event){
    console.log('if class === + haz esto:');
    if(this.state.divSkills.length < 3){
      this.setState({
        countSkills: this.state.countSkills + 1,
        divSkills: [...this.state.divSkills, this.state.countSkills],
      })
    } else {
      alert('Ey no puedes poner mas de 3 habilidades!!');
    }
    console.log('else haz esto: this.setState');
  }
  
  render() {
    
    const {data, skills} = this.state;
    // console.log('aqui???',skills);
    //console.log('this app', this.handleActions)
    console.log('this.stateeeeee1',this.state);
    return (
      <div className="page__wrapper">
        <Header />
        <Main 
          classPlus={this.state.classPlus}
          classMinus={this.state.classMinus}
          data={data}
          skills={skills}
          addSkills={this.handleAddSkills}
          divSkills={this.state.divSkills}
          actionToPerform = {this.handleActions()} 
          chargeImage = {this.handleImage()} 
          inputImage = {this.fileInput}
          handleRadioColorClick= {this.handleRadioColorClick} 
          handleRadioFontClick= {this.handleRadioFontClick} 
          />
      </div>
    );
  }
}

CardGenerator.propTypes = {

  name:PropTypes.string,
  job: PropTypes.string,
  phone: PropTypes.number,
  email: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string

};

export default CardGenerator;
