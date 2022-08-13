import {FC, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import axios from 'axios';

import {enter} from '../../../redux/loginPage';
import MyInput from '../../UI/myInput/myInput.tsx';
import SvgUser from '../../svg/SvgUser.tsx';
import SvgCastle from '../../svg/SvgCastle.tsx';
import SvgError from '../../svg/SvgError.tsx';
import {postLoginUrl} from '../../../server';

import {loginRedux} from '../../../types/types';

import classes from './LoginForm.module.scss';



const LoginForm:FC = () => {
    const { register, formState: {errors}, handleSubmit} = useForm()
    const {profilesArr} = useSelector((state:loginRedux) => state.login)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [saveData, setSaveData] = useState<boolean>(false)
    const [loginError, setLoginError] = useState<boolean>(false)


    function loginHandler({login, password}:{login:string, password:string}){

        postLogin(login, password)

        for(let i = 0; i<profilesArr.length; i++){
            if(profilesArr[i].name === login && profilesArr[i].password === password){
                setLoginError(false)
                dispatch(enter(profilesArr[i]))
                navigate('/news')
                if(saveData){
                    localStorage.setItem('profile', `${login} ${password}`)
                }
                break
            }
        }
        setLoginError(true)
    }

    function postLogin(login:string, password:string){
        axios.post(`/api/${postLoginUrl}`,{
            login:login,
            password:password,
        })
    }

    return (
        <form data-testid={'login-form'} className={classes.loginForm} onSubmit={handleSubmit(loginHandler)}>
            <MyInput register={register} validation={{required:true}} maxLength={30} errors={errors}  id={'login'} name={'login'} type={'login'} placeholder={'Логин'}  style={errors.login ? classes.inputBlockError :classes.inputBlock} styleIconError={classes.registerErrorIcon}>
                <SvgUser width={'20'} height={'20'} color={'#6868684C'}/>
            </MyInput>
            <MyInput register={register} validation={{required:true}} maxLength={30} errors={errors} id={'password'} name={'password'} type={'password'} placeholder={'Пароль'}  style={errors.password ? classes.inputBlockError :classes.inputBlock} styleIconError={classes.registerErrorIcon}>
                <SvgCastle width={'16'} height={'20'} color={'#6868684C'} />
            </MyInput>
            <div className={classes.rememberMeAndForgetPasswordSection}>
                <div className={classes.rememberMeBlock}>
                    <label onChange={() => setSaveData(!saveData)} className={saveData ? classes.switchActive : classes.switch}>
                        <input type='checkbox'/>
                        <div></div>
                    </label>
                    <p>Запомнить меня</p>
                </div>
                <Link to={'/404'}>Забыли пароль?</Link>
            </div>
            {loginError &&
                <div className={classes.errorBlock}>
                    <p>Пользователя не существует</p>
                    <SvgError width={'20'} height={'20'} color={'#FFFFFF7F'}/>
                </div>
            }

            <button>Войти</button>
        </form>
    );
};

export default LoginForm;
