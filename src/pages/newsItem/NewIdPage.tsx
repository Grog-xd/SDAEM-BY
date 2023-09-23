import {FC, useEffect, useState, Fragment} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {getPostUrl} from '../../server';
import {fetchNews, getNews} from '../../redux/newsPage';
import Header from '../../components/header/Header.tsx';
import Footer from '../../components/footer/Footer.tsx';

import Loader from '../../components/loader/Loader.tsx';

import yellowPoints from '../../assets/img/yellow-points.png'

import NewIdPageInfo from '../../components/newsItemComponents/NewIdPageInfo/NewIdPageInfo.tsx';
import NewIdPageSeeAlso from '../../components/newsItemComponents/NewIdPageSeeAlso/NewIdPageSeeAlso.tsx';

import {newProps, newsRedux} from '../../types/types';

import classes from './NewIdPage.module.scss'



const NewIdPage:FC = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {posts} = useSelector((state:newsRedux) => state.news)
    const [post, setPost] = useState<newProps>({})




    useEffect(()=>{
        axios.get(`../api/${getPostUrl}`)
            .then(response => response.data.posts)
            .then(response => {
                if(params.id > response?.length){
                    navigate('/404')
                } else{
                    dispatch(fetchNews(response))
                    dispatch(getNews(''))
                    // @ts-ignore
                    setPost(response[params.id-1])
                }

            })
            .catch(e => console.log(e.message))
        window.scrollTo(0, 0)
    }, [params])



    return (
        <Fragment>
            <Header />
            {
                post?.id
                    ?
                    <main>
                        <div className={classes.purpleBg}></div>
                        <img className={classes.yellowPoints} src={yellowPoints} alt='points'/>
                        <NewIdPageInfo post={post}/>
                        <NewIdPageSeeAlso params={params} posts={posts}/>
                    </main>
                    :
                    <Loader />

            }

            <Footer />
        </Fragment>
    );
};

export default NewIdPage;
