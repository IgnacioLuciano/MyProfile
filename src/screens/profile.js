import React, { Component } from 'react';
import { Grid, Row, Col, ListGroupItem, ListGroup, Button } from 'react-bootstrap';
import diceicon from './images/diceicon.png';
import linkedinicon from './images/linkedinicon.png';
import indeedicon from './images/indeedicon.jpg';
import zipicon from './images/zipicon.jpg';
import backgroundfoto from './images/backgroundfoto.jpg';
import Center from 'react-center';
import Zoom from 'react-reveal/Zoom';
import ResponsiveContainer from "react-responsive-widget";

const Profile1 = (props) => {
    return (
        <ResponsiveContainer>
            <div>
                <div className="listgroup">
                    <a href='http://ziprecruiter.com/'><img type="image" title="ZipRecruiter" src={zipicon} width={30} height={30} align='right' /></a>
                    <a href='https://www.linkedin.com/'><img type="image" title='LinkedIn' src={linkedinicon} width={30} height={30} align='right' /></a>
                    <a href='https://www.indeed.com/'><img type="image" title='indeed' src={indeedicon} width={30} height={30} align='right' /></a>
                    <a href='https://dice.com/'><img type="image" title='Dice.com' src={diceicon} width={30} height={30} align='right' /></a>
                </div>
            </div>
        </ResponsiveContainer>
    );
}

const Profile2 = (props) => {
    return (
        <ResponsiveContainer>
            <Center>

            </Center>
        </ResponsiveContainer>
    );
}

const Profile3 = (props) => {
    return (
        <div>
            <nav>
                <div className="menu">
                    <div className="theback">
                    <Center> <ul>
                            <li><a>Who am I</a>
                                <p>You can call me Nacho, born and raised in a small city in
                                <a href="https://wikitravel.org/en/Argentina"> Argentina </a>
                                    called
                                <a href="https://en.wikipedia.org/wiki/Gualeguaych%C3%BA,_Entre_R%C3%ADosa"> Gualeguaychu </a></p></li>
                            <li><a>What am I doing here</a>
                                <p>I build websites with
                                    <a href="https://reactjs.org/React.js"> React.js,</a>
                                    <a href="https://en.wikipedia.org/wiki/HTML"> HTML,</a>
                                    <a href="https://en.wikipedia.org/wiki/JavaScript"> JavaScript,</a>
                                    <a href="https://en.wikipedia.org/wiki/Java_(programming_language)s"> Java, </a>
                                    <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets"> CSS... </a>
                                    I also use
                                    <a href='https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)'> Bootstrap, </a>
                                    or
                                    <a href='https://en.wikipedia.org/wiki/Material_Design'> Material UI</a>
                                    ...</p></li>
                            <li><a>Where do I want to go next</a>
                                <p> I would like to become a successful Web Developer in a short
                            period of time</p>
                            </li>
                        </ul> </Center>
                    </div>
                </div>
            </nav>
        </div >
    );
}

const Profile4 = (props) => {
    return (
        <ResponsiveContainer>
            <div>
                <Button bsStyle="light" href="/About"> About </Button>
                <Button bsStyle="light" href="/Projects"> Projects </Button>
                <Button bsStyle="light" href="/Contact"> Contact </Button>
            </div>
        </ResponsiveContainer>
    );
}

class Profile extends Component {
    render() {
        return (
            <div className="backgroundpic2">
                <Profile4 />
                <Profile2 />
                <Profile3 />
                <Profile1 />
            </div>
        );
    };
};

export default Profile;