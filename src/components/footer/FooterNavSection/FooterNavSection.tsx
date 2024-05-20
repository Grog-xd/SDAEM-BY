import {FC} from 'react';
import {Link, NavLink} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';

import {setCity} from '../../../redux/mainPage';

import {mainRedux} from '../../../types/types';

import classes from './FooterNavSection.module.scss';

const FooterNavSection:FC = () => {
    const dispatch = useDispatch()

    const {cityOption, tabs}= useSelector((state:mainRedux) => state.main)
    let navArr = [
        {link:'/news', value:'Новости'}, 
        {link:'/404', value:'Размещение и тарифы'}, 
        {link:'/404', value:'Объявления на карте'},
        {link:'/contacts', value:'Контакты'}
    ]


    return (
        <nav data-testid={'footer-nav-section'}>
            <ul className={classes.filterNav}>
                {tabs.map(tab =>
                    <li className={classes.footerLink} key={tab.id}><Link to={`/catalog/${tab.id}`}><b>{tab.value}</b></Link></li>,
                )}
                {cityOption.map(city =>
                    <li className={classes.footerLink} key={city.id}><Link  onClick={()=> dispatch(setCity(city.value))} to={'/catalog/flats'}>Квартиры в {city.value}е</Link></li>,
                )}
            </ul>
            <ul className={classes.pageNav}>
                {navArr.map(nav=>
                    <li className={classes.footerLink} key={nav.value}>
                        <NavLink to={nav.link}>{nav.value}</NavLink>
                    </li>,
                )}
            </ul>
        </nav>
    );
};

export default FooterNavSection;
