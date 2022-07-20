import React from 'react';
import {Link} from 'react-router-dom';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SvgHome from '../../components/svg/SvgHome';
import whitePoints from  '../../assets/img/white-points.png'
import yellowPoints from  '../../assets/img/yellow-points.png'

import classes from './Page404.module.scss'

const Page404 = () => {
    return (
        <React.Fragment>
            <Header />
            <main className={classes.page404}>
                <img src={yellowPoints} alt='yellow points'/>
                <img src={whitePoints} alt='white points'/>
                <div className={classes.container}>
                    <div className={classes.mainSection}>
                        <div className={classes.textBlock}>
                            <h1>Ошибка 404</h1>
                            <p>Возможно, у вас опечатка в адресе страницы, или её просто не существует</p>
                            <Link to={'/'}>
                                <SvgHome width={'12'} height={'12'} color={'#1E2123'}/>
                                Вернуться на главную
                            </Link>
                        </div>
                        <h2>404</h2>
                    </div>
                </div>
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default Page404;
