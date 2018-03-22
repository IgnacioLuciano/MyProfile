import React, { Component } from 'react';

const Projects1 = (props) => {
    return (
        <div>
            <nav>
                <div className="projects">
                    MY PROJECTS
                </div>
            </nav>
        </div>
    );
}

class Projects extends Component {
    render() {
        return (
            <div className="backgroundpic2">
                <div>
                    <Projects1 />
                </div>
            </div>
        );
    };
};

export default Projects;