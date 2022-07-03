import React, {useState} from 'react';
import classes from './mySelect.module.scss'

const MySelect = ({options, value, handler, children, style}) => {
    const [selectActive, setSelectActive] = useState(false)
    const clsSelect = [
        classes.select,
        style
    ]
    const clsChangeBlock = [
        classes.changeBlock,
        classes.changeBlockActive
    ]

    function selectHandler(value){
        setSelectActive(!selectActive)
        handler(value)
    }

    return (
        <div className={clsSelect.join(' ')}>
            <button type={"button"} onClick={()=> setSelectActive(!selectActive)}  className={selectActive ? clsChangeBlock.join(' ') : classes.changeBlock}>
                <div>
                    {children}
                    <p className={classes.textValue}>{value}</p>
                </div>
                <svg width="20" height="10" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1.38477L6 5.64152L10.5 1.38477" stroke="#4E64F9" />
                </svg>
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

export default MySelect;
