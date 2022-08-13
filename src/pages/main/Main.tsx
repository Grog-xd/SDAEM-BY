import {FC, useEffect, Fragment} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

import {fetchProducts} from '../../redux/mainPage';
import {getProductsUrl} from '../../server';
import Header from '../../components/header/Header.tsx';
import Footer from '../../components/footer/Footer.tsx';

import Loader from '../../components/loader/Loader.tsx';

import MainFilterSection from '../../components/mainComponents/MainFilterSection/MainFilterSection.tsx';
import MainCardsSection from '../../components/mainComponents/MainCardsSection/MainCardsSection.tsx';
import MainSliderSection from '../../components/mainComponents/MainSliderSection/MainSliderSection.tsx';
import MainAdvantagesSection from '../../components/mainComponents/MainAdvantagesSection/MainAdvantagesSection.tsx';
import MainNewsSection from '../../components/mainComponents/MainNewsSection/MainNewsSection.tsx';

import {mainRedux} from '../../types/types';

import classes from './Main.module.scss'


const Main:FC = () => {

    const dispatch = useDispatch()
    const products = useSelector((state:mainRedux) => state.main.products)

    useEffect(()=>{
        axios.get(`api/${getProductsUrl}`)
            .then(response => response.data.products)
            .then(response => dispatch(fetchProducts(response)))
            .catch(e => console.log(e.message))
    }, [])


    return (
        <Fragment>
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
        </Fragment>
    );
};

export default Main;
