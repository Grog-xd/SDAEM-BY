import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {likeHandler} from "../../../redux/mainPage";
import ProductItemList from "./ProductItemList/ProductItemList";
import ProductItemTiles from "./ProductItemTiles/ProductItemTiles";

const ProductsItem = ({product, limit}) => {

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
        <React.Fragment>
            {
                limit === defaultLimit
                    ?
                        <ProductItemTiles product={product} params={params} likeActive={likeActive} handler={setLike}/>
                    :
                        <ProductItemList product={product} params={params} likeActive={likeActive} handler={setLike}/>
            }
        </React.Fragment>

    );
};

export default ProductsItem;
