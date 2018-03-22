import React, { Component } from 'react';
import { Grid, Row, Col, ListGroupItem, ListGroup, Button } from 'react-bootstrap';
import diceicon from './images/diceicon.png';
import linkedinicon from './images/linkedinicon.png';
import indeedicon from './images/indeedicon.jpg';
import zipicon from './images/zipicon.jpg';
import Ign3 from './images/Ign3.jpg';
import Center from 'react-center';
import Zoom from 'react-reveal/Zoom';
import ResponsiveContainer from "react-responsive-widget";

const Profile1 = (props) => {
    return (
        <ResponsiveContainer>
            <div className='backgroundpic1'>
                            <div className="listgroup">
                        <a href='http://ziprecruiter.com/'><img type="image" title="ZipRecruiter" src={zipicon} width={40} height={40} align='right' /></a>
                        <a href='https://www.linkedin.com/'><img type="image" title='LinkedIn' src={linkedinicon} width={40} height={40} align='right' /></a>
                        <a href='https://www.indeed.com/'><img type="image" title='indeed' src={indeedicon} width={40} height={40} align='right' /></a>
                        <a href='https://dice.com/'><img type="image" title='Dice.com' src={diceicon} width={40} height={40} align='right' /></a>
                    </div>
                           </div>
        </ResponsiveContainer>
    );
}

const Profile2 = (props) => {
    return (
        <ResponsiveContainer>
            <Center>
            <div className='myName'>
                {/* <Center> */}
                Ignacio Luciano
                    <img className='Ign3' type="image" title="Ignacio Luciano" src={Ign3} />
                {/* </Center> */}
            </div>
            </Center>
        </ResponsiveContainer>
    );
}

const Profile3 = (props) => {
    return (
        <div>
            <nav>
                <div className="menu">
                    <ul>
                        <li><a>EMPTY</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

const Profile4 = (props) => {
    return (
        <ResponsiveContainer className="menu1">
            <Center>
                <div className="listgroup1">
                    <Button bsStyle="light" href="/About">About</Button>
                    <Button bsStyle="light" href="/Projects">Projects</Button>
                    <Button bsStyle="light" href="/Contact">Contact</Button>
                </div>
            </Center>
        </ResponsiveContainer>
    );
}

class Profile extends Component {
    render() {
        return (
            <div>
                <div>
                    <Profile4 />
                    <div className="backgroundpic2">
                        <Profile2 />
                        <Profile3 />
                        <Profile1 />
                    </div>
                </div>
            </div>
        );
    };
};

export default Profile;