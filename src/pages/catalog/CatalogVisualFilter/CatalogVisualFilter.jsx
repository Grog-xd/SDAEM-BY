import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {mainFilter, setLimit, setSortedValue} from "../../../redux/mainPage";
import MySelect from "../../../components/UI/mySelect/mySelect";
import SvgSort from "../../../components/svg/SvgSort";
import SvgBurger from "../../../components/svg/SvgBurger";
import SvgTiles from "../../../components/svg/SvgTiles";
import SvgLocation from "../../../components/svg/SvgLocation";
import classes from "./CatalogVisualFilter.module.scss";

const CatalogVisualFilter = () => {
    const dispatch = useDispatch()
    const params = useParams()

    const {productsLimit, sortedOptions, sortedValue} = useSelector(state=> state.main)

    function limitHandler(limit){
        dispatch(setLimit(limit))
        dispatch(mainFilter(params.type))
    }

    function sortHandler(value){
        dispatch(setSortedValue(value))
        dispatch(mainFilter(params.type))
    }

    const defaultLimit = 6

    return (
        <section className={classes.visualFilter}>
            <MySelect options={sortedOptions} style={classes.sortedSelect} value={sortedValue ? sortedValue: 'По умолчанию'} handler={(e)=>sortHandler(e) }>
                {
                    sortedValue
                        ?
                        <SvgSort width={'15'} height={'16'} color={'#664EF9'}/>
                        :
                        <SvgSort width={'15'} height={'16'} color={'#7A7F86'}/>
                }

            </MySelect>
            <div className={classes.btnsBlock}>
                {
                    productsLimit === defaultLimit
                        ?
                        <div className={classes.setLimitBtns}>
                            <button className={classes.btn} onClick={()=>limitHandler(3)}>
                                <SvgBurger width={'15'} height={'15'} color={'#7A7F86'}/>
                                Список
                            </button>
                            <button className={classes.btnActive}>
                                <SvgTiles width={'15'} height={'14'} color={'#664EF9'}/>
                                Плитки
                            </button>
                        </div>
                        :
                        <div className={classes.setLimitBtns}>
                            <button className={classes.btnActive} >
                                <SvgBurger width={'15'} height={'15'} color={'#664EF9'}/>
                                Список
                            </button>
                            <button className={classes.btn} onClick={()=>limitHandler(6)}>
                                <SvgTiles width={'15'} height={'14'} color={'#7A7F86'}/>
                                Плитки
                            </button>
                        </div>
                }
                <Link to={'/404'} className={classes.map}>
                    <SvgLocation width={'11'} height={'14'} color={'#664EF9'}/>
                    Показать на карте
                </Link>
            </div>
        </section>
    );
};

export default CatalogVisualFilter;
