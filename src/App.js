import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';



class App extends Component {
  constructor(props){
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
      }
    };
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
