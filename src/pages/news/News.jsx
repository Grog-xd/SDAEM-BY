import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {fetchNews, getNews, setNewsPage} from "../../redux/newsPage";
import {getPostUrl} from "../../server";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import NewsList from "../../components/newsComponents/NewsList/NewsList";
import PaginationList from "../../components/pagination/PaginationList/PaginationList";
import SvgHomeWithDot from "../../components/svg/SvgHomeWithDot";
import SvgMagnifier from "../../components/svg/SvgMagnifier";
import Loader from "../../components/loader/Loader";
import classes from './News.module.scss'


const News = () => {

    const dispatch = useDispatch()
    const {posts, sortedPosts, currentPage} = useSelector(state => state.news)

    const [inputValue, setInputValue] = useState('')

    useEffect(()=>{
        axios.get(`api/${getPostUrl}`)
            .then(response => response.data.posts)
            .then(response => dispatch(fetchNews(response)))
            .then(()=>dispatch(getNews(inputValue)))
        window.scrollTo(0, 0)
    }, [])


    function searchQuery(){
        dispatch(getNews(inputValue))
        setInputValue('')
    }

    return (
        <React.Fragment>
            <Header></Header>
            <main className={classes.main}>
                <div className={classes.headerBlock}>
                    <div className={classes.breadcrumbs}>
                        <SvgHomeWithDot width={'22'} height={'12'} color={'#664EF9'}/>
                        <p>Новости</p>
                    </div>
                    <h1>Новости</h1>
                    <div className={classes.inputBlock}>
                        <input value={inputValue} onChange={(e)=> setInputValue(e.target.value)} type="text" placeholder='Поиск по статьям'/>
                        <button type={"button"} onClick={searchQuery}>
                            <SvgMagnifier width={'18'} height={'18'} color={'white'}/>
                        </button>
                    </div>
                    <div className={classes.backgroundItem}></div>
                </div>
                {posts.length
                    ?
                        <NewsList />
                    :
                        <Loader />
                }

                <PaginationList posts={sortedPosts} currentPage={currentPage} handler={(value)=>dispatch(setNewsPage(value))}></PaginationList>
            </main>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default News;
