import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {setCity} from '../../../../redux/mainPage';

import classes from './headerSelect.module.scss'

const HeaderSelect = ({type, value, children}) => {
    const [selectActive, setSelectActive] = useState(false)
    const {cityOption} = useSelector(state=> state.main)
    const dispatch = useDispatch()
    // const params = useParams()

    const clsChangeBlock = [
        classes.changeBlock,
        classes.changeBlockActive,
    ]

    function headerSelectHandler(value){
        dispatch(setCity(value))
        setSelectActive(!selectActive)
    }

    // useEffect(()=>{
    //     console.log(params.type)
    //     if(type === params.type){
    //
    //         setSelectActive(true)
    //     } else{
    //         setSelectActive(false)
    //     }
    // }, [params])

    return (
        <div className={classes.select}>
            <button onClick={()=> setSelectActive(!selectActive)}  className={selectActive ? clsChangeBlock.join(' ') : classes.changeBlock}>
                {value}
                {children}
            </button>
            {
                selectActive
                    ?
                    <div className={classes.optionsBlock}>
                        {cityOption.map(option =>
                            <Link to={`/catalog/${type}`} onClick={()=>headerSelectHandler(option.value)} key={option.id}>{value} в {option.value}е</Link>
                        )}
                    </div>
                    :
                    null
            }
        </div>
    );
};

export default HeaderSelect;
