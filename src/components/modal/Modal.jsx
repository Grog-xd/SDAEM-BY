import React from 'react';
import './Modal.scss'

const Modal = ({children}) => {
    return (
        <div className={'modal'}>
            <div className={'modalDialog'}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
