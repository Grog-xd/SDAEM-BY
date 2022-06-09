import React, {useState} from 'react';
import classes from './header.module.scss'
import {Link, NavLink} from "react-router-dom";
import heartIcon from '../../assets/img/heartGray.png'
import logo from '../../assets/img/logo.png'
import {useSelector} from "react-redux";
import ProfileCard from "../profileCard/profileCard";

const Header = () => {
    const isAuth = useSelector(state => state.toolkit.auth)
    const profile = useSelector(state => state.toolkit.profile)
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
                    <div className={classes.bookmark}>
                        <p>Закладки</p>
                        <img src={heartIcon} alt="like"/>
                    </div>
                    {
                        !isAuth
                            ?
                            <Link className={classes.login} to={"/login"}>Вход и регистрация</Link>
                            :
                            <div className={classes.profile} onClick={() => setProfileActive(!profileActive)}>
                                <img src={profile.avatar} alt="avatar"/>
                                <p>{profile.name}</p>
                                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 1.38477L6 5.64152L10.5 1.38477" stroke="#4E64F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                    }
                    {
                        profileActive
                            ?
                                <ProfileCard active={true}/>
                            :
                                <ProfileCard active={false}/>
                    }

                </div>
            </div>
            <div className={classes.headerFilter}>
                <div className={classes.container}>
                    <img src={logo} alt="logo"/>
                    <ul>
                        <li>
                            Квартиры на сутки
                            <svg width="12" height="15" viewBox="0 0 9 10" fill="#FFD54F" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#FFD54F" d="M7.43806 1.74419C6.7055 0.627907 5.4962 0 4.13573 0C2.7869 0 1.5776 0.627907 0.821781 1.74419C0.0659671 2.83721 -0.108452 4.23256 0.356665 5.45349C0.484572 5.77907 0.682246 6.11628 0.93806 6.4186L3.87992 9.88372C3.94969 9.95349 4.01946 10 4.12411 10C4.22876 10 4.29853 9.95349 4.36829 9.88372L7.32178 6.4186C7.5776 6.11628 7.7869 5.7907 7.90318 5.45349C8.36829 4.23256 8.19387 2.83721 7.43806 1.74419ZM4.13573 5.86047C3.13573 5.86047 2.31015 5.03488 2.31015 4.03488C2.31015 3.03488 3.13573 2.2093 4.13573 2.2093C5.13574 2.2093 5.96132 3.03488 5.96132 4.03488C5.96132 5.03488 5.14736 5.86047 4.13573 5.86047Z" />
                            </svg>
                        </li>
                        <li>Коттеджи и усадьбы</li>
                        <li>Бани и сауны</li>
                        <li>Авто напрокат</li>
                    </ul>
                    <Link to="/404">+  Разместить объявление</Link>
                </div>
            </div>
        </header>
    );
};

export default  Header;
