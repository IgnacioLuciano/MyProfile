import React, { Component } from 'react';
import { Grid, Row, Col, ListGroupItem, ListGroup, Button } from 'react-bootstrap';

const Profile1 = (props) => {
    return (
        <Grid>
            <Col xs={10} md={10}>
                <Row>
                    <ListGroup>
                        <ListGroupItem>
                            <div>TEST</div>
                        </ListGroupItem>
                    </ListGroup>
                </Row>
            </Col>
        </Grid>
    );
}


const Profile2 = (props) => {
    return (
        <div>
            TEST2
            </div>
    );
}

class Profile extends Component {
    render() {
        return (
            <div>
                <Profile1 />
                <Profile2 />
            </div>
        );
    };
};

export default Profile;