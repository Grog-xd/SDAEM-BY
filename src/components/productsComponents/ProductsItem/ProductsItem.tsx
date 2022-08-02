import {FC, useEffect, useState, Fragment} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {likeHandler} from '../../../redux/mainPage';

import {ProductItemProps} from '../../../types/types';

import ProductItemList from './ProductItemList/ProductItemList.tsx';
import ProductItemTiles from './ProductItemTiles/ProductItemTiles.tsx';

interface ProductsItemProps{
    product: ProductItemProps,
    limit: number,
}

const ProductsItem:FC <ProductsItemProps>= ({product, limit}) => {

    const params = useParams()
    const dispatch = useDispatch()
    const [likeActive, setLikeActive] = useState(false)
    const defaultLimit = 6

    function setLike(){
        dispatch(likeHandler({type:params.type, id:product.id}))
        setLikeActive(!likeActive)
    }

    useEffect(()=>{
        setLikeActive(product.like)
    },[])

    return (
        <Fragment>
            {
                limit === defaultLimit
                    ?
                    <ProductItemTiles product={product} params={params} likeActive={likeActive} handler={setLike}/>
                    :
                    <ProductItemList product={product} params={params} likeActive={likeActive} handler={setLike}/>
            }
        </Fragment>

    );
};

export default ProductsItem;
