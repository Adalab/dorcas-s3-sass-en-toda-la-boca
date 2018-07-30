import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        skills: []
      }
    this.catchFetch()
  }

  catchFetch () {
    fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
      .then(function (response) {
        return response.json();
      }    
    )
    .then(function (json){
      this.setState({
        skills: json.skills
        
      }
        )
      console.log(this.setState);
    }
   )
  }
 

  render() {
    return (
      <div className="page__wrapper">
        <Header />
        <Main />
        <Footer/>
      </div>
    );
  }
}

export default App;
