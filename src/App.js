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
        name: 'pepe',
        job: 'drogata',
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

App.propTypes = {

  name:PropTypes.string,
  job: PropTypes.string,
  phone: PropTypes.number,
  email: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string

};

export default App;
