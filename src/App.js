import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        palette: 1,
        typography: 4,
        name: '',
        job: '',
        phone: '',
        email: '',
        linkedin: '',
        github: '',
        photo: '',
        skills: ['CSS', 'html', 'JS']
      },
      skills: []
    };
    this.returnSkillsInjson = this.returnSkillsInjson.bind(this);
    this.catchFetch();
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleJobChange = this.handleJobChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleTelChange = this.handleTelChange.bind(this);
    this.handleLinkedinChange = this.handleLinkedinChange.bind(this);
    this.handleGithubChange = this.handleGithubChange.bind(this);
    this.fileInput = React.createRef();
    this.handleClickInput = this.handleClickInput.bind(this);
    this.handleInputFile = this.handleInputFile.bind(this);
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
        email: event.target.value
      }
    })
  }

  handleTelChange (event) {
    this.setState({
      data: {
        ...this.state.data,
        tel: event.target.value
      }
    })
  }

  handleLinkedinChange (event) {
    this.setState({
      data: {
        ...this.state.data,
        linkedin: event.target.value
      }
    })
  }

  handleGithubChange (event) {
    this.setState({
      data: {
        ...this.state.data,
        github: event.target.value
      }
    })
  }

  handleActions () {
    const actionToPerform = {
      name : this.handleNameChange,
      job: this.handleJobChange,
      email: this.handleEmailChange,
      tel: this.handleTelChange,
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
            photo: fr.result
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

  catchFetch () {
    fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
      .then(function (response) {
        return response.json();
      }    
    )
    .then(this.returnSkillsInjson);
     
  }
 
  returnSkillsInjson(json){
    console.log(json.skills);
    this.setState({
      skills: json.skills
    })
  }
  
  render() {
    const {data} = this.state;
    //console.log('this app', this.handleActions)
    return (
      <div className="page__wrapper">
        <Header />
        <Main 
          data={data} 
          actionToPerform = {this.handleActions()} 
          chargeImage = {this.handleImage()} 
          inputImage = {this.fileInput} />
        <Footer/>
      </div>
    );
  }
}

export default App;
