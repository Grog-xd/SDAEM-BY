import {FC} from 'react';

import classes from './myCheckbox.module.scss'

interface MyCheckboxProps{
    label?: string,
    handler: (label: string) => void,
    value: boolean,
}

const MyCheckbox:FC <MyCheckboxProps>= ({label, handler, value}) => {
    return (
        <div className={classes.checkbox}>
            <input onChange={(e)=>handler(label)} name={label} id={label}  type='checkbox' checked={value}/>
            <label htmlFor={label}>{label}</label>
        </div>
    );
};

export default MyCheckbox;
