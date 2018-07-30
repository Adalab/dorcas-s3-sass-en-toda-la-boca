import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';


class App extends Component {

  
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
