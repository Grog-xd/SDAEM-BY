import {FC, useEffect, Fragment} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';

import {getProductsUrl} from '../../server';
import {fetchProducts, mainFilter, setCurrentPage} from '../../redux/mainPage';
import Header from '../../components/header/Header.tsx';
import Footer from '../../components/footer/Footer.tsx';
import ProductsList from '../../components/productsComponents/ProductsList/ProductsList.tsx';
import PaginationList from '../../components/pagination/PaginationList/PaginationList.tsx';
import SocialButtonsBlock from '../../components/socialButtonsBlock/SocialButtonsBlock.tsx';

import Loader from '../../components/loader/Loader.tsx';

import CatalogTitleSection from '../../components/catalogComponents/CatalogTitleSection/CatalogTitleSection.tsx';
import CatalogFilterSection from '../../components/catalogComponents/CatalogFilterSection/CatalogFilterSection.tsx';
import CatalogVisualFilterSection from '../../components/catalogComponents/CatalogVisualFilterSection/CatalogVisualFilterSection.tsx';
import CatalogMapSection from '../../components/catalogComponents/CatalogMapSection/CatalogMapSection.tsx';

import {mainRedux} from '../../types/types';

import classes from './Catalog.module.scss'

const Catalog:FC = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()

    const {sortedProducts, currentPage, products} = useSelector((state:mainRedux)=> state.main)


    useEffect(()=>{
        test404()
        axios.get(`../api/${getProductsUrl}`)
            .then(response => response.data.products)
            .then(response => dispatch(fetchProducts(response)))
            .then(()=>dispatch(mainFilter(params.type)))
            .catch(e => console.log(e.message))
        window.scrollTo(0, 0)
    }, [])

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
        <Fragment>
            <Header />
            <main className={classes.catalogPage}>
                <CatalogTitleSection />
                <CatalogFilterSection />
                <div className={classes.container}>
                    <CatalogVisualFilterSection />
                    {
                        products?.length
                            ?
                            <Fragment>
                                <ProductsList />
                                <div className={classes.catalogPagination}>
                                    <PaginationList posts={sortedProducts} currentPage={currentPage} handler={(e)=> dispatch(setCurrentPage(e))}/>
                                    <SocialButtonsBlock style={classes.socialsButtons}/>
                                </div>
                            </Fragment>
                            :
                            <Loader />
                    }

                </div>
                <CatalogMapSection />
            </main>
            <Footer />
        </Fragment>
    );
};

export default Catalog;
