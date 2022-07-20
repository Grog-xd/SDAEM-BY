import React from 'react';
import {Link} from 'react-router-dom';

import classes from './RegistrationTextBlock.module.scss';

const RegistrationTextBlock = () => {
    return (
        <div className={classes.textBlock}>
            <h2>Пользователь обязуется:</h2>
            <ul>
                <li>предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта;</li>
                <li> добавлять фотографии объектов соответствующие действительности. Администрация сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем, если сочтет, что информация не соответствует действительности, носит оскорбительный характер, нарушает права и законные интересы других граждан либо действующее законодательство Республики Беларусь.</li>
            </ul>
            <div className={classes.toLoginSection}>
                <p>Уже есть аккаунт?</p>
                <Link to='/login'>Войдите</Link>
            </div>
        </div>
    );
};

export default RegistrationTextBlock;
