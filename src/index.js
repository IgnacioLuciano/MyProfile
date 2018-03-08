import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './screens/Profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles.css';

const Routerp = () => (
    <Router>
        <div>
    <Route path='/' exact={true} component={Profile} />
    <Route path='/Profile' component={Profile} />
</div>
</Router>
);

ReactDOM.render(
    <Routerp />, document.getElementById('root')
);