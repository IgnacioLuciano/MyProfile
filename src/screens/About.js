import React, { Component } from 'react';

const About1 = (props) => {
    return (
        <div>
            <nav>
                <div className="about">
                    ABOUT ME
                </div>
            </nav>
        </div>
    );
}

class About extends Component {
    render() {
        return (
            <div className="backgroundpic2">
                <div>
                    <About1 />
                </div>
            </div>
        );
    };
};

export default About;