import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';
import CardGenerator from './CardGenerator';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Welcome} />
                    <Route path='/cardgenerator' component={CardGenerator} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;