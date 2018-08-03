import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';
import App from './App';
import Footer from './Footer';

class AppReal extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Welcome} />
                    <Route path='/app' component={App} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default AppReal;