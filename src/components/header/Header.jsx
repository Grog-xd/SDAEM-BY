import React from 'react';
import TopHeader from "./TopHeader/TopHeader";
import HeaderFilter from "./HeaderFilter/HeaderFilter";
import classes from './Header.module.scss'


const Header = () => {
    return (
        <header className={classes.header}>
            <TopHeader />
            <HeaderFilter />
        </header>
    );
};

export default  Header;
