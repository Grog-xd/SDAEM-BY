import React, {useState} from 'react';
import PropTypes from 'prop-types';

import SvgArrowDown from '../../svg/SvgArrowDown';

import classes from './mySelect.module.scss'

const MySelect = ({options, value, handler, children, style}) => {
    const [selectActive, setSelectActive] = useState(false)
    const clsSelect = [
        classes.select,
        style,
    ]
    const clsChangeBlock = [
        classes.changeBlock,
        classes.changeBlockActive,
    ]

    function selectHandler(value){
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
                    ?
                    <div className={classes.optionsBlock}>
                        {options.map(option =>
                            <button onClick={()=>selectHandler(option.value)} key={option.id}>{option.value}</button>
                        )}
                    </div>
                    :
                    null
            }

        </div>

    );
};

MySelect.propTypes = {
    options: PropTypes.array,
    value: PropTypes.string,
    handler: PropTypes.func,
    children: PropTypes.node,
    style: PropTypes.string,
};

export default MySelect;
