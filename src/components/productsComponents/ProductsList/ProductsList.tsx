import {FC, Fragment} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {useSelector} from 'react-redux';

import ProductsItem from '../ProductsItem/ProductsItem.tsx';

import {mainRedux} from '../../../types/types';

import classes from './ProductsList.module.scss'




const ProductsList:FC = () => {

    const {sortedProducts, productsLen, currentPage, productsLimit} = useSelector((state:mainRedux)=> state.main)




    return (
        sortedProducts.length
            ?
            <Fragment>
                <h2 className={classes.productListTitle}>Найдено {productsLen} результата</h2>
                <TransitionGroup className={productsLimit === 6 ? classes.productTiles : classes.productList}>
                    {sortedProducts[currentPage-1].map((product)=> <CSSTransition key={product.id} timeout={500} classNames='post'>
                        <ProductsItem limit={productsLimit} product={product}></ProductsItem>
                    </CSSTransition>,
                    )}
                </TransitionGroup>
            </Fragment>
            :
            <h2 className={classes.notFound}>По вашему запросу ни чего не найдено</h2>
    );
};

export default ProductsList;
