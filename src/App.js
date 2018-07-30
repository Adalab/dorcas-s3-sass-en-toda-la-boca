import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        palette: '',
        typography: '',
        name: 'pepe',
        job: 'drogata',
        phone: '',
        email: '',
        linkedin: '',
        github: '',
        photo: '',
        skills: []
      },
      skills: []
    };
    this.returnSkillsInjson = this.returnSkillsInjson.bind(this);
    this.catchFetch();
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
    return (
      <div className="page__wrapper">
        <Header />
        <Main data={data}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
