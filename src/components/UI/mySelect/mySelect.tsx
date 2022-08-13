import React, {FC, ReactNode, useState} from 'react';


import SvgArrowDown from '../../svg/SvgArrowDown.tsx';

import {optionSelectProps} from '../../../types/types';

import classes from './mySelect.module.scss'

interface SelectProps {
    options: optionSelectProps[],
    value:string,
    handler: (value) => string,
    children?: ReactNode,
    style?: string
}

const MySelect:FC<SelectProps> = ({options, value, handler, children, style}) => {
    const [selectActive, setSelectActive] = useState<boolean>(false)
    const clsSelect = [
        classes.select,
        style,
    ]
    const clsChangeBlock = [
        classes.changeBlock,
        classes.changeBlockActive,
    ]

    function selectHandler(value: string | number){
        setSelectActive(!selectActive)
        handler(value)
    }

    return (
        <div className={clsSelect.join(' ')}>
            <button type={'button'} onClick={()=> setSelectActive(!selectActive)}  className={selectActive ? clsChangeBlock.join(' ') : classes.changeBlock}>
                <div>
                    {children}
                    <p className={classes.textValue}>{value}</p>
                </div>
                <SvgArrowDown width={'14'} height={'16'} color={'#4E64F9'}/>
            </button>
            {
                selectActive
                    &&
                    <div className={classes.optionsBlock}>
                        {options.map((option) =>
                            <button onClick={()=>selectHandler(option.value)} key={option.id}>{option.value}</button>,
                        )}
                    </div>
            }

        </div>

    );
};



export default MySelect;
