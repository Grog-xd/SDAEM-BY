import {FC, ReactNode} from 'react';
import './Modal.scss'

interface ModalProps{
    children: ReactNode
}

const Modal:FC <ModalProps>= ({children}) => {
    return (
        <div data-testid={'modal'} className={'modal'}>
            <div className={'modalDialog'}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
