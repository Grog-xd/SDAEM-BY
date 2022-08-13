import {FC} from 'react';
import {NavLink} from 'react-router-dom';

import SvgLocation from '../../../svg/SvgLocation.tsx';

import classes from './PageNavigation.module.scss'


const PageNavigation:FC = () => {
    let navArr = [{link:'/', value:'Главная', icon:false}, {link:'/news', value:'Новости', icon:false}, {link:'/404', value:'Размещение и тарифы', icon:false}, {link:'/404', value:'Объявления на карте', icon:true},{link:'/contacts', value:'Контакты', icon:false}]

    return (
        <div data-testid={'page-navigation-section'} className={classes.pageNavigation}>
            <ul>
                {navArr.map(nav =>
                    <li key={nav.value}>
                        <NavLink to={nav.link} className={({isActive}) => isActive ? classes.pageNavigationItemActive : classes.pageNavigationItem} >
                            {nav.icon &&
                                <SvgLocation width={'9'} height={'10'} color={'#1E2123'}/>
                            }
                            {nav.value}
                        </NavLink>
                    </li>,
                )}

            </ul>
        </div>
    );
};

export default PageNavigation;
