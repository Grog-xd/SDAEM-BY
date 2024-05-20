import {FC, ReactNode, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {setCity} from '../../../../redux/mainPage';

import {mainRedux} from '../../../../types/types';

import classes from './headerSelect.module.scss'

interface HeaderSelectProps{
    type: string,
    value: string,
    children?:ReactNode,
}

const HeaderSelect:FC <HeaderSelectProps>= ({type, value, children}) => {
    const [selectActive, setSelectActive] = useState<boolean>(false)
    const {cityOption} = useSelector((state:mainRedux)=> state.main)
    const dispatch = useDispatch()

    const clsChangeBlock = [
        classes.changeBlock,
        classes.changeBlockActive,
    ]

    function headerSelectHandler(value:string){
        dispatch(setCity(value))
        setSelectActive(!selectActive)
    }

    return (
        <div data-testid={'header-select'} className={classes.select}>
            <button 
                data-testid={'header-select-btn'}
                onClick={()=> setSelectActive(!selectActive)}  
                className={selectActive ? clsChangeBlock.join(' ') : classes.changeBlock}
            >
                {value}
                {children}
            </button>
            {
                selectActive
                    &&
                    <div data-testid={'header-options-block'} className={classes.optionsBlock}>
                        {cityOption.map(option =>
                            <Link to={`/catalog/${type}`} onClick={()=>headerSelectHandler(option.value)} key={option.id}>{value} в {option.value}е</Link>,
                        )}
                    </div>
            }
        </div>
    );
};

export default HeaderSelect;
