import React, {useEffect} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {useSelector} from 'react-redux';

import ProductsItem from '../ProductsItem/ProductsItem';

import classes from './ProductsList.module.scss'




const ProductsList = () => {

    const {sortedProducts, productsLen, currentPage, productsLimit} = useSelector(state=> state.main)




    return (
        sortedProducts.length
            ?
            <React.Fragment>
                <h2 className={classes.productListTitle}>Найдено {productsLen} результата</h2>
                <TransitionGroup className={productsLimit === 6 ? classes.productTiles : classes.productList}>
                    {sortedProducts[currentPage-1].map((product)=> <CSSTransition key={product.id} timeout={500} classNames='post'>
                        <ProductsItem limit={productsLimit} product={product}></ProductsItem>
                    </CSSTransition>
                    )}
                </TransitionGroup>
            </React.Fragment>
            :
            <h2 className={classes.notFound}>По вашему запросу ни чего не найдено</h2>
    );
};

export default ProductsList;
