import React, {useEffect, useState} from 'react';
import PaginationItem from "../PaginationItem/PaginationItem";
import classes from './PaginationList.module.scss'

const PaginationList = ({posts, currentPage, handler}) => {

    const [pagesArr, setPageArr]=useState([])

    function setPagesBtn(){
        let arr = []
        for(let i = 0; i<posts.length; i++){
            if(currentPage + 6 > i || i+1 === posts.length){
                if (i === posts.length-1 && currentPage +6 <= posts.length-1){
                    arr.push('...')
                }
                arr.push(i + 1)
            }

        }
        setPageArr(arr)
    }

    useEffect(()=>{
        setPagesBtn()
    }, [posts, currentPage])

    return (
        <div className={classes.pagination}>
            {
                pagesArr.map((page)=>
                    <PaginationItem key={page} currentPage={currentPage} handler={handler}>{page}</PaginationItem>
                )
            }
        </div>
    );
};

export default PaginationList;
