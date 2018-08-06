import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PropTypes from 'prop-types';

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
        skills: ['CSS', 'html', 'JS'],
      },
      skills: [],
      countSkills: 2,
      divSkills:[1],
      classPlus:'fas fa-plus',
      classMinus:'fas fa-minus',
    };
    console.log('mierda publica',this.state.divSkills);

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
    this.handleAddSkills = this.handleAddSkills.bind(this);
    this.handleRemoveSkills = this.handleRemoveSkills.bind(this);

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

  catchFetch () {
    fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
      .then(function (response) {
        return response.json();
      }    
    )
    .then(this.returnSkillsInjson);
     
  }
 
  returnSkillsInjson(json){
    this.setState({
      skills: json.skills,
    })
  }

  handleRemoveSkills=(event)=>{
    console.log(this.state.countSkills)
    console.log('Esto llega a removeskills');
    console.dir( event.target.parentElement);
    if (this.state.countSkills>2){
    const k = event.currentTarget.parentElement;
    k.parentElement.removeChild(k); 
    }
    }//elimino el DIV con el select y el botton.


  handleAddSkills(event){
    // console.log('aqui tenemos divskills.length',this.state.divSkills.length);
    // console.log('event.target',event.target);
    

    if (event.target.classList.contains ('fa-minus')){ //averiguar  como meterlo todo en un IF
      this.setState({
        countSkills: this.state.countSkills -1,
      },this.handleRemoveSkills(event));
      ()=>console.log('actualizado2',this.state.divSkills)
    }
     if (event.target.classList.contains ('Minus')){ //averiguar  como meterlo todo en un IF
        
        this.setState({
          countSkills: this.state.countSkills -1,
        },this.handleRemoveSkills(event));
        ()=>console.log('actualizado2',this.state.divSkills)
      }

    if(this.state.divSkills.length < 3){
     
      console.log('holaholahola',this.state.countSkills)
      this.setState({
        countSkills: this.state.countSkills + 1,
        divSkills: [...this.state.divSkills, this.state.countSkills],
      },()=>console.log('actualizado',this.state.divSkills))
    } 
   
  }
  
  // handleRemoveSkills = itemToRemove => {
  //   this.setState({
  //     skills: this.state.pokemons.filter(item => item !== itemToRemove),
  //   });
  // };

  render() {
    
    const {data, skills} = this.state;
    // console.log('aqui???',skills);
    //console.log('this app', this.handleActions)
    return (
      <div className="page__wrapper">
        <Header />
        <Main 
          counter= {this.state.countSkills}
          classPlus={this.state.classPlus}
          classMinus={this.state.classMinus}
          data={data}
          skills={skills}
          addSkills={this.handleAddSkills}
          divSkills={this.state.divSkills}
          actionToPerform = {this.handleActions()} 
          chargeImage = {this.handleImage()} 
          inputImage = {this.fileInput} />
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {

  name:PropTypes.string,
  job: PropTypes.string,
  phone: PropTypes.number,
  email: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string

};

export default App;
