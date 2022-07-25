import {FC, ReactNode} from 'react';

import SvgError from '../../svg/SvgError.tsx';

interface MyInputProps{
    style?:string,
    type:string,
    label?:string,
    placeholder?:string,
    name?:string,
    id: string,
    children?: ReactNode,
    styleIconError?: string,
    maxLength?: number,
    validation?: object,
    errors?: object,
    register?: any,
}


const MyInput:FC <MyInputProps>= ({style, type, label, placeholder, name, id, children, styleIconError,  maxLength, register, validation, errors}) => {
    return (
        <div className={style}>
            {label && <label htmlFor={id}>{label}</label>}
            {children}
            <input {...register(name, validation)} placeholder={placeholder}  type={type} name={name} id={id} maxLength={maxLength}/>
            {errors && <SvgError width={'23'} height={'23'} color={'#EB5757'} style={styleIconError}/>}
        </div>
    );
};

export default MyInput;
