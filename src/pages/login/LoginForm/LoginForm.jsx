import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import axios from "axios";
import {enter} from "../../../redux/loginPage";
import MyInput from "../../../components/UI/myInput/myInput";
import SvgUser from "../../../components/svg/SvgUser";
import SvgCastle from "../../../components/svg/SvgCastle";
import SvgError from "../../../components/svg/SvgError";
import {postLoginUrl} from "../../../server";
import classes from "./LoginForm.module.scss";

const LoginForm = () => {
    const { register, formState: {errors}, handleSubmit} = useForm()
    const {profilesArr} = useSelector(state => state.login)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [saveData, setSaveData] = useState(false)
    const [loginError, setLoginError] = useState(false)


    function loginHandler({login, password}){

        postLogin(login, password)

        for(let i = 0; i<profilesArr.length; i++){
            if(profilesArr[i].name === login && profilesArr[i].password === password){
                setLoginError(false)
                dispatch(enter(profilesArr[i]))
                navigate(`/news`)
                if(saveData){
                    localStorage.setItem('profile', `${login} ${password}`)
                }
                break
            }
        }
        setLoginError(true)
    }

    function postLogin(login, password){
        axios.post(`/api/${postLoginUrl}`,{
            login:login,
            password:password
        })
    }

    return (
        <form className={classes.loginForm} onSubmit={handleSubmit(loginHandler)}>
            <MyInput register={register} validation={{required:true}} maxLength={30} errors={errors}  id={'login'} name={'login'} type={'login'} placeholder={'Логин'}  style={errors.login ? classes.inputBlockError :classes.inputBlock} styleIconError={classes.registerErrorIcon}>
                <SvgUser width={'20'} height={'20'} color={'#6868684C'}/>
            </MyInput>
            <MyInput register={register} validation={{required:true}} maxLength={30} errors={errors} id={'password'} name={'password'} type={'password'} placeholder={'Пароль'}  style={errors.password ? classes.inputBlockError :classes.inputBlock} styleIconError={classes.registerErrorIcon}>
                <SvgCastle width={'16'} height={'20'} color={'#6868684C'} />
            </MyInput>
            <div className={classes.rememberMeAndForgetPasswordSection}>
                <div className={classes.rememberMeBlock}>
                    <label onChange={() => setSaveData(!saveData)} className={saveData ? classes.switchActive : classes.switch}>
                        <input type="checkbox"/>
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
