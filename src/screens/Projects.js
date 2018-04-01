import React, { Component } from 'react';

const Projects1 = (props) => {
    return (
        <div>
            <nav>
                <div className="projects">
                    MY PROJECTS
                </div>
                <div>
                    Final Project GitHub link: <a href="https://github.com/CoderCampsSeattleJava/ReactJavaSpringStart"> Coder Dudes.</a>
                </div>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6gwnw0VS1TM" frameBorder="10" allow="autoplay; encrypted-media" allowFullscreen></iframe>

                    </div>
                <div>
                    My Personal GitHub link: <a href="https://github.com/IgnacioLuciano"> Ignacio Luciano.</a> 
                    </div>
                    <div>
                    The Porfolio GitHub link: <a href="https://github.com/IgnacioLuciano/MyProfile"> My Profile Code.</a>
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