import {FC, ReactNode, useEffect, useState} from 'react';

import classes from './PaginationItem.module.scss'

interface PaginationItemProps{
    children?: ReactNode,
    currentPage: number,
    handler: (children: React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean) => void
}

const PaginationItem:FC <PaginationItemProps> = ({children, currentPage, handler}) => {

    const [disabled, setDisabled] = useState<boolean>(false)

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
