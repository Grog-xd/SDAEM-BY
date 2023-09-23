import  {FC, useEffect, useState, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

import {fetchNews, getNews, setNewsPage} from '../../redux/newsPage';
import {getPostUrl} from '../../server';
import Header from '../../components/header/Header.tsx';
import Footer from '../../components/footer/Footer.tsx';
import NewsList from '../../components/newsComponents/NewsList/NewsList.tsx';
import PaginationList from '../../components/pagination/PaginationList/PaginationList.tsx';
import SvgHomeWithDot from '../../components/svg/SvgHomeWithDot.tsx';
import SvgMagnifier from '../../components/svg/SvgMagnifier.tsx';
import Loader from '../../components/loader/Loader.tsx';

import {newsRedux} from '../../types/types';

import classes from './News.module.scss'


const News:FC = () => {

    const dispatch = useDispatch()
    const {posts, sortedPosts, currentPage} = useSelector((state:newsRedux) => state.news)

    const [inputValue, setInputValue] = useState<string>('')

    useEffect(()=>{
        axios.get(`api/${getPostUrl}`)
            .then(response => response.data.posts)
            .then(response => dispatch(fetchNews(response)))
            .then(()=>dispatch(getNews(inputValue)))
            .catch(e => console.log(e.message))
        window.scrollTo(0, 0)
    }, [])


    function searchQuery(){
        dispatch(getNews(inputValue))
        setInputValue('')
    }

    return (
        <Fragment>
            <Header />
            <main data-testid={'news-page'} className={classes.mainNews}>
                <div className={classes.headerBlock}>
                    <div className={classes.breadcrumbs}>
                        <SvgHomeWithDot width={'22'} height={'12'} color={'#664EF9'}/>
                        <p>Новости</p>
                    </div>
                    <h1>Новости</h1>
                    <div className={classes.inputBlock}>
                        <input data-testid={'input-search'} value={inputValue} onChange={(e)=> setInputValue(e.target.value)} type='text' placeholder='Поиск по статьям'/>
                        <button data-testid={'btn-search'} type={'button'} onClick={searchQuery}>
                            <SvgMagnifier width={'18'} height={'18'} color={'white'}/>
                        </button>
                    </div>
                    <div className={classes.backgroundItem}></div>
                </div>
                {posts?.length
                    ?
                    <NewsList />
                    :
                    <Loader />
                }

                <PaginationList posts={sortedPosts} currentPage={currentPage} handler={(value)=>dispatch(setNewsPage(value))}></PaginationList>
            </main>
            <Footer />
        </Fragment>
    );
};

export default News;
