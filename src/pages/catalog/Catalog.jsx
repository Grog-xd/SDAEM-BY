import React, {useEffect} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';

import {getProductsUrl} from '../../server';
import {fetchProducts, mainFilter, setCurrentPage} from '../../redux/mainPage';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ProductsList from '../../components/productsComponents/ProductsList/ProductsList';
import PaginationList from '../../components/pagination/PaginationList/PaginationList';
import SocialButtonsBlock from '../../components/socialButtonsBlock/SocialButtonsBlock';

import Loader from '../../components/loader/Loader';

import CatalogTitleSection from '../../components/catalogComponents/CatalogTitleSection/CatalogTitleSection';
import CatalogFilterSection from '../../components/catalogComponents/CatalogFilterSection/CatalogFilterSection';
import CatalogVisualFilterSection from '../../components/catalogComponents/CatalogVisualFilterSection/CatalogVisualFilterSection';
import CatalogMapSection from '../../components/catalogComponents/CatalogMapSection/CatalogMapSection';

import classes from './Catalog.module.scss'

const Catalog = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()

    const {sortedProducts, currentPage, products} = useSelector(state=> state.main)


    useEffect(()=>{
        test404()
        axios.get(`../api/${getProductsUrl}`)
            .then(response => response.data.products)
            .then(response => dispatch(fetchProducts(response)))
            .then(()=>dispatch(mainFilter(params.type)))
            .catch(e => console.log(e.message))
        window.scrollTo(0, 0)
    }, [params])

    useEffect(()=>{
        test404()
        dispatch(mainFilter(params.type))
        window.scrollTo(0, 0)
    }, [params])



    function test404(){
        if(params.type !== 'flats' && params.type !== 'cottages' && params.type !== 'baths' && params.type !== 'cars' && params.type !== undefined){
            navigate('/404')
        }
    }


    return (
        <React.Fragment>
            <Header />
            <main className={classes.catalogPage}>
                <CatalogTitleSection />
                <CatalogFilterSection />
                <div className={classes.container}>
                    <CatalogVisualFilterSection />
                    {
                        products.length
                            ?
                            <React.Fragment>
                                <ProductsList />
                                <div className={classes.catalogPagination}>
                                    <PaginationList posts={sortedProducts} currentPage={currentPage} handler={(e)=> dispatch(setCurrentPage(e))}/>
                                    <SocialButtonsBlock style={classes.socialsButtons}/>
                                </div>
                            </React.Fragment>
                            :
                            <Loader />
                    }

                </div>
                <CatalogMapSection />
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default Catalog;
