import React, {useEffect, useState} from 'react';

import classes from './PaginationItem.module.scss'

const PaginationItem = ({children, currentPage, handler}) => {

    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        if (children === '...') {
            setDisabled(true)
        }
    }, [])


    return (
        <button onClick={() => handler(children)}
            className={currentPage === children ? classes.paginationItemActive : classes.paginationItem}
            disabled={disabled}>
            {children}
        </button>
    );

};

export default PaginationItem;
