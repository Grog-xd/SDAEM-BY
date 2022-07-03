import React from 'react';
import classes from './productsList.module.scss'
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useSelector} from "react-redux";
import ProductsItem from "../productsItem/productsItem";




const ProductsList = () => {
    const products = useSelector(state=> state.main.sortedProducts)
    const productsLen = useSelector(state=> state.main.productsLen)
    const currentPage = useSelector(state=> state.main.currentPage)
    const limit = useSelector(state=> state.main.productsLimit)

    return (
        products.length
            ?
            <React.Fragment>
                <h2 className={classes.productListTitle}>Найдено {productsLen} результата</h2>
                <TransitionGroup className={limit === 6 ? classes.productTiles : classes.productList}>
                    {products[currentPage-1].map((product)=> <CSSTransition key={product.id} timeout={500} classNames='post'>
                            <ProductsItem  product={product}></ProductsItem>
                    </CSSTransition>
                    )}
                </TransitionGroup>
            </React.Fragment>
            :
            <h2>По вашему запросу ни чего не найдено</h2>
    );
};

export default ProductsList;
