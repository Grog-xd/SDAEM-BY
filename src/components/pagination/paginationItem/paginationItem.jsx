import React from 'react';
import classes from './paginationItem.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setNewsPage} from "../../../redux/toolkitSlice";

const PaginationItem = ({children}) => {
    const dispatch =  useDispatch()
    const currentPage = useSelector(state => state.toolkit.currentPage)

    return (
        <button onClick={()=>dispatch(setNewsPage(children))} className={currentPage === children ? classes.paginationItemActive :classes.paginationItem}>
            {children}
        </button>
    );

};

export default PaginationItem;
