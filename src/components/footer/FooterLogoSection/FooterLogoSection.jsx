import React, {memo} from 'react';
import {Link, useLocation} from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import classes from "./FooterLogoSection.module.scss";

const FooterLogoSection = memo(() => {
    const {pathname} = useLocation()

    return (
        <div className={classes.logoSection}>
            {
                pathname === '/'
                    ?
                    <div>
                        <img src={logo} alt="logo"/>
                        <p>СДАЁМ БАЙ</p>
                    </div>
                    :
                    <Link to={'/'}>
                        <img src={logo} alt="logo"/>
                        <p>СДАЁМ БАЙ</p>
                    </Link>
            }
            <p>ИП Шушкевич Андрей Викторович
                УНП 192602485 Минским горисполкомом 10.02.2016
                220068, РБ, г. Минск, ул. Осипенко, 21, кв.23
                +375 29 621 48 33, sdaem@sdaem.by
                Режим работы: 08:00-22:00
            </p>
        </div>
    );
});

export default FooterLogoSection;
