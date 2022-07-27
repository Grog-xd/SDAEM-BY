import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import {mainFilter, resetFilter, setMaxCost, setMinCost, setRooms} from '../../../redux/mainPage';
import MoreOptions from '../../moreOptions/MoreOptions';
import MySelect from '../../UI/mySelect/mySelect';
import SvgSettings from '../../svg/SvgSettings';
import SvgArrowRight from '../../svg/SvgArrowRight';

import classes from './CatalogFilterSection.module.scss';

const CatalogFilterSection = () => {
    const dispatch = useDispatch()
    const params = useParams()

    const {roomsOption, roomsCurrentValue, minCost, maxCost} = useSelector(state=> state.main)
    const [moreOptions, setMoreOptions] = useState(false)

    function reset(){
        dispatch(resetFilter())
        dispatch(mainFilter(params.type))
    }

    return (
        <section className={classes.filterSection}>
            <div className={classes.container}>
                <div className={classes.filterBlock}>
                    <div className={classes.inputBlock}>
                        {
                            params.type === 'cars'
                                ?
                                <p className={classes.text}>Посадочные места</p>
                                :
                                <p className={classes.text}>Комнаты</p>
                        }

                        <MySelect options={roomsOption} handler={(e)=>dispatch(setRooms(e))} value={roomsCurrentValue ? roomsCurrentValue : 'Выберите'}/>
                    </div>
                    <div className={classes.inputBlock}>
                        <p className={classes.text}>Цена за сутки (BYN)</p>
                        <div className={classes.costBlock}>
                            <input type='number' min={0} max={1000} value={minCost} placeholder={'От'} onChange={(e)=> dispatch(setMinCost(e.target.value))}/>
                            -
                            <input type='number' min={0} max={1000} value={maxCost} placeholder={'До'} onChange={(e)=> dispatch(setMaxCost(e.target.value))}/>
                        </div>
                    </div>
                    <div className={classes.inputBlock}>
                        <button type={'button'} onClick={()=>setMoreOptions(!moreOptions)} className={classes.openMoreFilter}>
                            Больше опций
                            <SvgSettings width={'16'} height={'18'} color={'#664EF9'}/>
                        </button>
                    </div>
                    <div className={classes.buttonBlock}>
                        <button className={classes.resetBtn} onClick={reset}>Очистить</button>
                        <button type={'button'} onClick={()=>dispatch(mainFilter(params.type))} className={classes.filterButton}>
                            Показать объекты
                            <SvgArrowRight width={'9'} height={'16'} color={'#fff'}/>
                        </button>
                    </div>
                </div>
                {
                    moreOptions
                    &&   <MoreOptions />
                }

            </div>
        </section>
    );
};

export default CatalogFilterSection;
