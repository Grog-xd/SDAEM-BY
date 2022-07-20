import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import axios from 'axios';

import {registerUser} from '../../../redux/loginPage';
import MyInput from '../../../components/UI/myInput/myInput';
import SvgUser from '../../../components/svg/SvgUser';
import SvgEmail from '../../../components/svg/SvgEmail';
import SvgCastle from '../../../components/svg/SvgCastle';
import SvgError from '../../../components/svg/SvgError';
import {postRegisterUrl} from '../../../server';

import classes from './RegistrationForm.module.scss';

const RegistrationForm = ({modalHandler}) => {

    const { register, formState: {errors}, handleSubmit} = useForm()
    const {profilesArr} = useSelector(state=> state.login)
    const dispatch = useDispatch()
    const [messageError, setMessageError] = useState('')

    const [loginError, setLoginError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState('')


    function registrationHandler(data){
        let registerError = false
        setLoginError(false)
        setEmailError(false)
        setPasswordError(false)

        postRegistration(data)

        for(let i = 0; i<profilesArr.length; i++){
            if(profilesArr[i].name === data.login){
                registerError = true
                setLoginError(true)
                setMessageError('Логин занят')
            }
            if(profilesArr[i].email === data.email){
                registerError = true
                setEmailError(true)
                setMessageError('Почта занята')
            }
            if(data.password !== data.repeatPassword){
                registerError = true
                setPasswordError(true)
                setMessageError('Пароли не совпадают')
            }
        }
        if(!registerError){
            registration(data)
        }
    }

    function postRegistration(data){
        axios.post(`/api/${postRegisterUrl}`, data)
    }

    function registration({login, email, password}){
        modalHandler(true)
        const user = {name: `${login}`, avatar:'', phone:'', city:'', email: `${email}`, password: `${password}`, viber: '', whatsUpp:''}
        dispatch(registerUser(user))
    }

    return (
        <form onSubmit={handleSubmit(registrationHandler)}>
            <h1 className={classes.registrationTitle}>Регистрация</h1>
            <MyInput register={register} validation={{required:true}} errors={errors} styleIconError={classes.registerErrorIcon} id={'login'} name={'login'} type={'text'} placeholder={'Логин'}   style={errors.login || loginError ? classes.inputBlockError : classes.inputBlock} maxLength={20}>
                <SvgUser width={'20'} height={'20'} color={'#6868684C'}/>
            </MyInput>
            <MyInput register={register} validation={{pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, required:true}} errors={errors} styleIconError={classes.registerErrorIcon} id={'email'} name={'email'} type={'email'} placeholder={'Электронная почта'}   style={errors.email || emailError ? classes.inputBlockError : classes.inputBlock} maxLength={20}>
                <SvgEmail width={'18'} height={'20'} color={'#6868684C'}/>
            </MyInput>
            <MyInput register={register} validation={{required:true, minLength:5}} errors={errors} styleIconError={classes.registerErrorIcon} id={'password'} name={'password'} type={'password'} placeholder={'Пароль'}   style={errors.password || passwordError ? classes.inputBlockError : classes.inputBlock} maxLength={20}>
                <SvgCastle width={'16'} height={'20'} color={'#6868684C'}/>
            </MyInput>
            <MyInput register={register} validation={{required:true, minLength:5}} errors={errors} styleIconError={classes.registerErrorIcon} id={'repeatPassword'} name={'repeatPassword'} type={'password'} placeholder={'Повторите пароль'} style={errors.repeatPassword || passwordError ? classes.inputBlockError : classes.inputBlock} maxLength={20}>
                <SvgCastle width={'16'} height={'20'} color={'#6868684C'}/>
            </MyInput>
            {
                messageError
                &&
                <div className={classes.errorBlock}>
                    <p>{messageError}</p>
                    <SvgError width={'20'} height={'20'} color={'#FFFFFF7F'}/>
                </div>
            }
            <button>Зарегистрироваться</button>
        </form>
    );
};

export default RegistrationForm;
