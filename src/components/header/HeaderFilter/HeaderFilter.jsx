import React from 'react';
import {Link, useLocation} from "react-router-dom";
import HeaderSelect from "./headerSelect/headerSelect";
import SvgLocation from "../../svg/SvgLocation";
import logo from "../../../assets/img/logo.png";
import classes from "./HeaderFilter.module.scss";

const HeaderFilter = () => {
    const {pathname} = useLocation()
    let navArr = [{type:'flats', value:'Квартиры на сутки', icon:true}, {type:'cottages', value:'Коттеджи и усадьбы', icon:false}, {type:'baths', value:'Бани и сауны', icon:false}, {type:'cars', value:'Авто напрокат', icon:false}]

    return (
        <div className={classes.headerFilter}>
            <div className={classes.container}>
                {
                    pathname === '/'
                        ?
                        <img src={logo} alt="logo"/>
                        :
                        <Link to={'/'}>
                            <img src={logo} alt="logo"/>
                        </Link>
                }

                <ul>
                    {navArr.map(nav=>
                        <li key={nav.type}>
                            <HeaderSelect type={nav.type} value={nav.value}>
                                { nav.icon &&
                                    <SvgLocation width={'12'} height={'15'} color={'#FFD54F'}/>
                                }
                            </HeaderSelect>
                        </li>
                    )}
                </ul>
                <Link className={classes.newCardLink} to="/404">+  Разместить объявление</Link>
            </div>
        </div>
    );
};

export default HeaderFilter;
