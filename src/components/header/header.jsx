import React, {useState} from 'react';
import classes from './header.module.scss'
import {Link, NavLink} from "react-router-dom";
import logo from '../../assets/img/logo.png'
import {useDispatch, useSelector} from "react-redux";
import ProfileCard from "../profileCard/profileCard";
import {setBookMarkActive} from "../../redux/toolkitSlice";
import HeaderSelect from "./headerSelect/headerSelect";


const Header = () => {
    const isAuth = useSelector(state => state.toolkit.isAuth)
    const profile = useSelector(state => state.toolkit.profile)
    const bookMarkActive = useSelector(state => state.toolkit.bookMarkActive)

    const dispatch = useDispatch()

    const [profileActive, setProfileActive] = useState(false)


    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <div className={classes.pageNavigation}>
                    <ul>
                        <li>
                            <NavLink className={classes.pageNavigationItem} to="/">Главная</NavLink>
                        </li>
                        <li>
                            <NavLink className={classes.pageNavigationItem} to="/news">Новости</NavLink>
                        </li>
                        <li>
                            <NavLink className={classes.pageNavigationItem} to="/404">Размещение и тарифы</NavLink>
                        </li>
                        <li>
                            <svg  width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.43806 1.74419C6.7055 0.627907 5.4962 0 4.13573 0C2.7869 0 1.5776 0.627907 0.821781 1.74419C0.0659671 2.83721 -0.108452 4.23256 0.356665 5.45349C0.484572 5.77907 0.682246 6.11628 0.93806 6.4186L3.87992 9.88372C3.94969 9.95349 4.01946 10 4.12411 10C4.22876 10 4.29853 9.95349 4.36829 9.88372L7.32178 6.4186C7.5776 6.11628 7.7869 5.7907 7.90318 5.45349C8.36829 4.23256 8.19387 2.83721 7.43806 1.74419ZM4.13573 5.86047C3.13573 5.86047 2.31015 5.03488 2.31015 4.03488C2.31015 3.03488 3.13573 2.2093 4.13573 2.2093C5.13574 2.2093 5.96132 3.03488 5.96132 4.03488C5.96132 5.03488 5.14736 5.86047 4.13573 5.86047Z" fill="#1E2123"/>
                            </svg>
                            <NavLink className={classes.pageNavigationItem} to="/404">Объявления на карте</NavLink>
                        </li>
                        <li>
                            <NavLink className={classes.pageNavigationItem} to="/contacts">Контакты</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={classes.bookmarkProfile}>
                    {bookMarkActive
                        ?
                            <div onClick={()=>dispatch(setBookMarkActive())} className={classes.bookmarkActive}>
                                <p>Добавлено</p>
                                <svg width='14px' height='14px' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 107.39">
                                    <path fill="red" d="M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z"/>
                                </svg>
                            </div>
                        :
                            <div onClick={()=>dispatch(setBookMarkActive())} className={classes.bookmark}>
                                <p>Закладки</p>
                                <svg  width="16px" height="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="#8291A3" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" stroke="currentColor"/></svg>
                            </div>
                    }

                    {
                        !isAuth
                            ?
                            <Link className={classes.login} to={"/login"}>Вход и регистрация</Link>
                            :
                            <div className={classes.profile} onClick={() => setProfileActive(!profileActive)}>
                                {
                                    profile.avatar
                                        ?
                                            <img src={profile.avatar} alt="avatar"/>
                                        :   null
                                }
                                <p>{profile.name}</p>
                                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 1.38477L6 5.64152L10.5 1.38477" stroke="#4E64F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                    }
                    {
                        profileActive
                            ?
                                <ProfileCard profile={profile} setActive={setProfileActive}/>
                            :
                                null
                    }

                </div>
            </div>
            <div className={classes.headerFilter}>
                <div className={classes.container}>
                    <img src={logo} alt="logo"/>
                    <ul>
                        <li>
                            <HeaderSelect type={'flats'} value={'Квартиры на сутки'}><svg width="12" height="15" viewBox="0 0 9 10" fill="#FFD54F" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#FFD54F" d="M7.43806 1.74419C6.7055 0.627907 5.4962 0 4.13573 0C2.7869 0 1.5776 0.627907 0.821781 1.74419C0.0659671 2.83721 -0.108452 4.23256 0.356665 5.45349C0.484572 5.77907 0.682246 6.11628 0.93806 6.4186L3.87992 9.88372C3.94969 9.95349 4.01946 10 4.12411 10C4.22876 10 4.29853 9.95349 4.36829 9.88372L7.32178 6.4186C7.5776 6.11628 7.7869 5.7907 7.90318 5.45349C8.36829 4.23256 8.19387 2.83721 7.43806 1.74419ZM4.13573 5.86047C3.13573 5.86047 2.31015 5.03488 2.31015 4.03488C2.31015 3.03488 3.13573 2.2093 4.13573 2.2093C5.13574 2.2093 5.96132 3.03488 5.96132 4.03488C5.96132 5.03488 5.14736 5.86047 4.13573 5.86047Z" />
                            </svg></HeaderSelect>
                        </li>
                        <li>
                            <HeaderSelect type={'cottages'} value={'Коттеджи и усадьбы'} />
                        </li>
                        <li>
                            <HeaderSelect type={'baths'} value={'Бани и сауны'} />
                        </li>
                        <li>
                            <HeaderSelect type={'cars'} value={'Авто напрокат'} />
                        </li>
                    </ul>
                    <Link className={classes.newCardLink} to="/404">+  Разместить объявление</Link>
                </div>
            </div>
        </header>
    );
};

export default  Header;
