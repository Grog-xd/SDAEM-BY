import {FC, ReactNode, useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {setCity} from '../../../../redux/mainPage';

import {mainRedux} from '../../../../types/types';

import classes from './headerSelect.module.scss'

interface HeaderSelectProps{
    type: string,
    value: string,
    children:ReactNode,
}

const HeaderSelect:FC <HeaderSelectProps>= ({type, value, children}) => {
    const [selectActive, setSelectActive] = useState<boolean>(false)
    const {cityOption} = useSelector((state:mainRedux)=> state.main)
    const dispatch = useDispatch()
    // const params = useParams()

    const clsChangeBlock = [
        classes.changeBlock,
        classes.changeBlockActive,
    ]

    function headerSelectHandler(value:string | number){
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
                    &&
                    <div className={classes.optionsBlock}>
                        {cityOption.map(option =>
                            <Link to={`/catalog/${type}`} onClick={()=>headerSelectHandler(option.value)} key={option.id}>{value} в {option.value}е</Link>,
                        )}
                    </div>
            }
        </div>
    );
};

export default HeaderSelect;
