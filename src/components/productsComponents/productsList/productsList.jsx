import React, {useEffect, useState} from 'react';
import classes from './productsList.module.scss'
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useDispatch, useSelector} from "react-redux";
import ProductsItem from "../productsItem/productsItem";
import {useParams} from "react-router-dom";
import {mainFilter} from "../../../redux/mainPage";


const ProductsList = () => {
    const minCost = useSelector(state=> state.main.minCost)
    const maxCost = useSelector(state=> state.main.maxCost)
    const city = useSelector(state=> state.main.cityCurrentValue)
    const district = useSelector(state=> state.main.districtCurrentValue)
    const metro = useSelector(state=> state.main.metroCurrentValue)
    const rooms = useSelector(state=> state.main.roomsCurrentValue)


    const products = useSelector(state=> state.main.products)

    const [productInfo, setProductInfo] = useState([])
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(()=>{
        dispatch(mainFilter())
        catalogFilter()
    }, [params])



    function catalogFilter(){
        let res= []
        products.forEach(obj =>{
            if (params.type){
                Object.keys(obj).forEach(key =>{
                    if(params.type === key){
                        obj[key].forEach(e=>{
                            if(!rooms){
                                if(+e.cost >= minCost && +e.cost <= maxCost && e.city.includes(city)){
                                    res.push(e)
                                }
                            } else if(+e.cost >= minCost && +e.cost <= maxCost && e.city.includes(city) && e.rooms===rooms){
                                res.push(e)
                            }


                        })
                    }
                })
            } else{
                Object.keys(obj).forEach(key =>{
                    obj[key].forEach(e=>{
                        res.push(e)
                    })
                })
            }
        })
        setProductInfo(res)
    }






    return (
        productInfo.length
            ?
            <TransitionGroup className={classes.productList}>
                {productInfo.map((product)=> <CSSTransition key={product.id} timeout={500} classNames='post'>
                        <ProductsItem  product={product}></ProductsItem>
                </CSSTransition>
                )}
            </TransitionGroup>
            :
            <h2>По вашему запросу ни чего не найдено</h2>
    );
};

export default ProductsList;
