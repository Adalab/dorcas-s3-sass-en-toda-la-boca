import React, { Component } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Form from './Form';
import Preview from './Preview';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Form />
        <Preview/>
        <Footer/>
      </Fragment>
      
    );
  }
}

export default App;
