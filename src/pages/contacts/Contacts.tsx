import {FC, useState, Fragment} from 'react';

import Header from '../../components/header/Header.tsx';
import Footer from '../../components/footer/Footer.tsx';
import Modal from '../../components/modal/Modal.tsx';

import ContactsTextBlock from '../../components/contactsComponents/ContactsTextBlock/ContactsTextBlock.tsx';
import ContactsForm from '../../components/contactsComponents/ContactsForm/ContactsForm.tsx';
import ContactsSocialBlock from '../../components/contactsComponents/ContactsSocialBlock/ContactsSocialBlock.tsx';

import classes from './Contacts.module.scss'

const Contacts:FC = () => {

    const [modalActive, setModalActive] = useState<boolean>(false)

    return (
        <Fragment>
            <Header />
            <main className={classes.contacts}>
                {modalActive
                    &&
                        <Modal>
                            <p className={'modalTitle'}><b>Ваше письмо отправлено!</b></p>
                            <p className={'modalBody'}>Какое-то сообщение о том, что письмо отправлено, какое-то сообщение, что письмо отправлено.</p>
                            <button data-testid={'close-modal-btn'} onClick={()=> setModalActive(!modalActive)} className={'modalButton'}>Закрыть окно</button>
                        </Modal>
                }
                <div className={classes.container}>
                    <ContactsTextBlock />
                    <ContactsForm modalActive={modalActive} handler={e=>setModalActive(e)}/>
                    <ContactsSocialBlock />
                </div>
            </main>
            <Footer />
        </Fragment>
    );
};

export default Contacts;
