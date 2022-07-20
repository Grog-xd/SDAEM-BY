import React, {useEffect} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

import {fetchProducts} from '../../redux/mainPage';
import {getProductsUrl} from '../../server';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import Loader from '../../components/loader/Loader';

import MainFilterSection from './MainFilterSection/MainFilterSection';
import MainCardsSection from './MainCardsSection/MainCardsSection';
import MainSliderSection from './MainSliderSection/MainSliderSection';
import MainAdvantagesSection from './MainAdvantagesSection/MainAdvantagesSection';
import MainNewsSection from './MainNewsSection/MainNewsSection';
import classes from './Main.module.scss'


const Main = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.main.products)

    useEffect(()=>{
        axios.get(`api/${getProductsUrl}`)
            .then(response => response.data.products)
            .then(response => dispatch(fetchProducts(response)))
            .catch(e => console.log(e.message))
    }, [])


    return (
        <React.Fragment>
            <Header />
            {
                products.length
                    ?
                    <main  className={classes.mainPage}>
                        <div className={classes.container}>
                            <MainFilterSection />
                            <MainCardsSection />
                            <MainSliderSection />
                        </div>
                        <MainAdvantagesSection />
                        <div className={classes.container}>
                            <MainNewsSection />
                        </div>
                    </main>
                    :
                    <Loader />
            }
            <Footer />
        </React.Fragment>
    );
};

export default Main;
