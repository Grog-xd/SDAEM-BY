import React from 'react';
import classes from './myCheckbox.module.scss'

const MyCheckbox = ({label, handler, value}) => {
    console.log(value)
    return (
        <div className={classes.checkbox}>
            <input onChange={(e)=>handler(label)} name={label} id={label}  type="checkbox" checked={value}/>
            <label htmlFor={label}>{label}</label>
        </div>
    );
};

export default MyCheckbox;
