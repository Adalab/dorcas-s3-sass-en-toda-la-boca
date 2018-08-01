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
    console.log('data', this)
    const {handleNameChange} = this;
    return (
      <div className="page__wrapper">
        <Header />
        <Main data={data} actionToPerform = {handleNameChange} />
        <Footer/>
      </div>
    );
  }
}

export default App;
