import React, { Component } from 'react';

const Contact1 = (props) => {
    return (
        <div>
            <nav>
                <div className="contactme">
                    CONTACT ME!
                </div>
            </nav>
        </div>
    );
}

class Contact extends Component {
    render() {
        return (
            <div className="backgroundpic2">
                <div>
                    <Contact1 />
                </div>
            </div>
        );
    };
};

export default Contact;