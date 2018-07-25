import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './Header';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Form />
      </Fragment>
    );
  }
}

export default App;
