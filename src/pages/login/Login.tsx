import {FC} from 'react';
import {Link} from 'react-router-dom';

import LoginForm from '../../components/loginComponents/LoginForm/LoginForm.tsx';

import classes from './Login.module.scss'


const Login:FC = () => {
    return (
        <main className={classes.mainLogin}>
            <div className={classes.login}>
                <h1>Авторизация</h1>
                <p className={classes.description}>Авторизируйтесь, чтобы начать
                    публиковать свои объявления</p>


                <LoginForm />



                <div className={classes.toRegisterSection}>
                    <p>Еще нет аккаунта?</p>
                    <Link to='/registration'>Создайте акканут</Link>
                </div>
            </div>
        </main>
    );
};

export default Login;
