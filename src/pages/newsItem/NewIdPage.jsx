import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getPostUrl} from "../../server";
import {fetchNews} from "../../redux/newsPage";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import NewIdPageInfo from "./NewIdPageInfo/NewIdPageInfo";
import NewIdPageSeeAlso from "./NewIdPageSeeAlso/NewIdPageSeeAlso";
import Loader from "../../components/loader/Loader";
import yellowPoints from '../../assets/img/yellow-points.png'
import classes from './NewIdPage.module.scss'


const NewIdPage = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {posts} = useSelector(state => state.news)
    const [post, setPost] = useState({})




    useEffect(()=>{
        axios.get(`../api/${getPostUrl}`)
            .then(response => response.data.posts)
            .then(response => {
                if(params.id > response.length){
                    navigate('/404')
                } else{
                    dispatch(fetchNews(response))
                    setPost(response[params.id-1])
                }

            })
            .catch(e => console.log(e.message))
        window.scrollTo(0, 0)
    }, [params])



    return (
        <React.Fragment>
            <Header />
            {
                post.id
                    ?
                    <main>
                        <div className={classes.purpleBg}></div>
                        <img className={classes.yellowPoints} src={yellowPoints} alt="points"/>
                        <NewIdPageInfo post={post}/>
                        <NewIdPageSeeAlso params={params} posts={posts}/>
                    </main>
                    :
                    <Loader />

            }

            <Footer />
        </React.Fragment>
    );
};

export default NewIdPage;
