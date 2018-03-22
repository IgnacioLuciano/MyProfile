import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './screens/Profile';
import About from './screens/About';
import Projects from './screens/Projects';
import Contact from './screens/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles.css';

const Routerp = () => (
    <Router>
        <div>
    <Route path='/' exact={true} component={Profile} />
    <Route path='/Profile' component={Profile} />
    <Route path='/About' component={About} />
    <Route path='/Projects' component={Projects} />
    <Route path='/Contact' component={Contact} />

 </div>
</Router>
);

ReactDOM.render(
    <Routerp />, document.getElementById('root')
);