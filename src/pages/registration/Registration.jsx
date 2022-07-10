import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Modal from "../../components/modal/Modal";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import RegistrationTextBlock from "./RegistrationTextBlock/RegistrationTextBlock";
import classes from './Registration.module.scss'

const Registration = () => {

    const [modalActive, setModalActive] = useState(false)



    return (
        <main className={classes.mainRegistration}>
            {
                modalActive
                    &&
                        <Modal>
                            <p className={'modalTitle'}><b>Подтвердите регистрацию</b></p>
                            <p className={'modalBody'}>Письмо для подтверждения аккаунта отправлено почту. Перейдите по ссылке, указанной в письме. Если письма нет, то проверьте спам.</p>
                            <Link to='/login' className={'modalButton'}>Понятно</Link>
                        </Modal>
            }

            <div className={classes.registration}>
                <RegistrationForm modalHandler={e=>setModalActive(e)}/>
                <RegistrationTextBlock />
            </div>
        </main>
    );
};

export default Registration;
