import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import { useSelector} from "react-redux";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import NewIdPageInfo from "./NewIdPageInfo/NewIdPageInfo";
import NewIdPageSeeAlso from "./NewIdPageSeeAlso/NewIdPageSeeAlso";
import yellowPoints from '../../assets/img/yellow-points.png'
import classes from './NewIdPage.module.scss'


const NewIdPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const {posts} = useSelector(state => state.news)
    const [post, setPost] = useState({})



    useEffect(()=>{
        window.scrollTo(0, 0)
        if(params.id > posts.length){
            navigate('/404')
        } else{
            setPost(posts[params.id-1])
        }
    },[params, posts])



    return (
        <React.Fragment>
            <Header></Header>
            <main>
                <div className={classes.purpleBg}></div>
                <img className={classes.yellowPoints} src={yellowPoints} alt="points"/>
                <NewIdPageInfo post={post}/>
                <NewIdPageSeeAlso params={params} posts={posts}/>
            </main>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default NewIdPage;
