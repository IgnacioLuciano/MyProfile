import React, { Component } from 'react';
import { Grid, Row, Col, ListGroupItem, ListGroup, Button } from 'react-bootstrap';
import diceicon from './images/diceicon.png';
import linkedinicon from './images/linkedinicon.png';
import indeedicon from './images/indeedicon.png';
import zipicon from './images/zipicon.jpg';
import Ign3 from './images/Ign3.jpg';
import Center from 'react-center';
import Zoom from 'react-reveal/Zoom';

const Profile1 = (props) => {
    return (
        <Grid className='backgroundpic1'>
            <Col xs={10} md={10}>
                <Row>
                    <ListGroup>
                        <div>
                            <h2>Welcome to my Porfolio</h2>
                        </div>
                        <ListGroupItem><a href='http://ziprecruiter.com/'><img type="image" title="ZipRecruiter" src={zipicon} width={40} height={40} align='right' /></a></ListGroupItem>
                        <ListGroupItem><a href='https://www.linkedin.com/'><img type="image" title='LinkedIn' src={linkedinicon} width={40} height={40} align='right' /></a></ListGroupItem>
                        <ListGroupItem><a href='https://www.indeed.com/'><img type="image" title='indeed' src={indeedicon} width={40} height={40} align='right' /></a></ListGroupItem>
                        <ListGroupItem><a href='https://dice.com/'><img type="image" title='Dice.com' src={diceicon} width={40} height={40} align='right' /></a></ListGroupItem>
                    </ListGroup>
                </Row>
            </Col>
        </Grid>
    );
}

const Profile2 = (props) => {
    return (
        <div className='backgroundpic2'>
            <Center>
                <h2>Ignacio Luciano</h2>
                <img className='Ign3' type="image" title="Ignacio Luciano" src={Ign3} />
            </Center>
        </div>
    );
}

class Profile extends Component {
    render() {
        return (
            <div >
                <Profile1 />
                <Profile2 />
            </div>
        );
    };
};

export default Profile;