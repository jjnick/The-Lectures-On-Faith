import React from 'react'

class Modal extends React.Component {
    render () {
        return (
            <div className="modal">
                <div className="modal-content">
                    <h1>My Modal Content</h1>
                    <p>
                        Here is the text that will go
                    </p>
                </div>
                <a href="#0" className="modal-close">Close</a>
            </div>
        );
    }
};

export default Modal;