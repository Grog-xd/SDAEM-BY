import {FC, useState} from 'react';
import {Link} from 'react-router-dom';

import Modal from '../../components/modal/Modal.tsx';

import RegistrationForm from '../../components/registrationComponents/RegistrationForm/RegistrationForm.tsx';
import RegistrationTextBlock from '../../components/registrationComponents/RegistrationTextBlock/RegistrationTextBlock.tsx';

import classes from './Registration.module.scss'

const Registration:FC = () => {

    const [modalActive, setModalActive] = useState<boolean>(false)



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
