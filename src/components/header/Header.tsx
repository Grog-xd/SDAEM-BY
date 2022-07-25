import {FC} from 'react';

import TopHeader from './TopHeader/TopHeader.tsx';
import HeaderFilter from './HeaderFilter/HeaderFilter.tsx';
import classes from './Header.module.scss'


const Header:FC = () => {
    return (
        <header className={classes.header}>
            <TopHeader />
            <HeaderFilter />
        </header>
    );
};

export default  Header;
