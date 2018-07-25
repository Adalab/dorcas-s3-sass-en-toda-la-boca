import React, { Component, Fragment } from 'react';
import './App.css';
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
      </Fragment>
      
    );
  }
}

export default App;
