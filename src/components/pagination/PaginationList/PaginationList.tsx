import {FC, useEffect, useState} from 'react';

import PaginationItem from '../PaginationItem/PaginationItem.tsx';

import classes from './PaginationList.module.scss'

interface PaginationListProps{
    posts: object[],
    currentPage: number,
    handler: () => void
}

const PaginationList:FC <PaginationListProps>= ({posts, currentPage, handler}) => {

    const [pagesArr, setPageArr]=useState<object[]>([])

    function setPagesBtn(){
        let arr = []
        for(let i = 0; i < posts.length; i++){
            if((currentPage + 6 > i && currentPage - 6 < i) || i + 1 === posts.length || i === 0){
                if(i === posts.length-1 && currentPage + 7 <= posts.length - 1){
                    arr.push('...')
                }
                arr.push(i + 1)
            }
            if (i === 1 && currentPage > 6){
                arr.push('...')
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
                    <PaginationItem key={page} currentPage={currentPage} handler={handler}>{page}</PaginationItem>,
                )
            }
        </div>
    );
};

export default PaginationList;
