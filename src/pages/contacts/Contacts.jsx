import React, {useState} from 'react';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Modal from '../../components/modal/Modal';

import ContactsTextBlock from './ContactsTextBlock/ContactsTextBlock';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsSocialBlock from './ContactsSocialBlock/ContactsSocialBlock';
import classes from './Contacts.module.scss'

const Contacts = () => {

    const [modalActive, setModalActive] = useState(false)

    return (
        <React.Fragment>
            <Header />
            <main className={classes.contacts}>
                {modalActive
                    &&
                        <Modal>
                            <p className={'modalTitle'}><b>Ваше письмо отправлено!</b></p>
                            <p className={'modalBody'}>Какое-то сообщение о том, что письмо отправлено, какое-то сообщение, что письмо отправлено.</p>
                            <button onClick={()=> setModalActive(!modalActive)} className={'modalButton'}>Закрыть окно</button>
                        </Modal>
                }
                <div className={classes.container}>
                    <ContactsTextBlock />
                    <ContactsForm modalActive={modalActive} handler={e=>setModalActive(e)}/>
                    <ContactsSocialBlock />
                </div>
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default Contacts;
