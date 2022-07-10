import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {setCity} from "../../../redux/mainPage";
import {useDispatch, useSelector} from "react-redux";
import classes from "./FooterNavSection.module.scss";

const FooterNavSection = () => {
    const dispatch = useDispatch()

    const {cityOption, tabs}= useSelector(state => state.main)
    let navArr = [{link:'/news', value:'Новости'}, {link:'/404', value:'Размещение и тарифы'}, {link:'/404', value:'Объявления на карте'},{link:'/contacts', value:'Контакты'}]


    return (
        <nav>
            <ul className={classes.filterNav}>
                {tabs.map(tab =>
                    <li key={tab.id}><Link to={`/catalog/${tab.id}`}><b>{tab.value}</b></Link></li>
                )}
                {cityOption.map(city =>
                    <li key={city.id}><Link  onClick={()=> dispatch(setCity(city.value))} to={`/catalog/flats`}>Квартиры в {city.value}е</Link></li>
                )}
            </ul>
            <ul className={classes.pageNav}>
                {navArr.map(nav=>
                    <li key={nav.value}>
                        <NavLink to={nav.link}>{nav.value}</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default FooterNavSection;
