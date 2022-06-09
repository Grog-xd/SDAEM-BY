import React, {useEffect, useState} from 'react';
import classes from './paginationList.module.scss'
import {useSelector} from "react-redux";
import PaginationItem from "../paginationItem/paginationItem";

const PaginationList = ({posts, limit}) => {

    const totalPages = Math.ceil(posts.length/limit)
    const [pagesArr, setPageArr]=useState([])

    useEffect(()=>{
        let arr = []
        for(let i = 0; i<totalPages; i++){
            arr.push(i + 1)
        }
        setPageArr(arr)
    }, [])

    return (
        <div className={classes.pagination}>
            {
                pagesArr.map((page)=>
                    <PaginationItem key={page}>{page}</PaginationItem>
                )
            }
        </div>
    );
};

export default PaginationList;
