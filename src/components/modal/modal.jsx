import React from 'react';
import classes from './modal.module.scss'

const Modal = ({children}) => {
    return (
        <div className={classes.modal}>
            <div className={classes.modalDialog}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
