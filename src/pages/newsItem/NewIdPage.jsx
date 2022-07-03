import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import classes from './newIdPage.module.scss'
import yellowPoints from '../../assets/img/yellow-points.png'
import {useSelector} from "react-redux";
import NewsItem from "../../components/newsComponents/newsItem/newsItem";
import SocialButtonsBlock from "../../components/socialButtonsBlock/socialButtonsBlock";


const NewIdPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const posts = useSelector(state => state.toolkit.posts)
    const [post, setPost] = useState({})


    useEffect(()=>{
        window.scrollTo(0, 0)
        if(params.id > posts.length){
            navigate('/404')
        } else{
            setPost(posts[params.id-1])
        }
    },[params])

    return (
        <React.Fragment>
            <Header></Header>
            <main>
               <div className={classes.purpleBg}></div>
                <img className={classes.yellowPoints} src={yellowPoints} alt="points"/>
                <div className={classes.mainContainer}>
                    <div className={classes.breadcrumbs}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M11.7985 5.36427L6.41446 0.458394C6.17814 0.243027 5.82177 0.243051 5.58554 0.458371L0.201516 5.3643C0.0122119 5.5368 -0.0503192 5.80258 0.042165 6.04138C0.134673 6.28019 0.359907 6.43448 0.616008 6.43448H1.47593V11.3498C1.47593 11.5447 1.63394 11.7027 1.82883 11.7027H4.77993C4.97481 11.7027 5.13283 11.5447 5.13283 11.3498V8.36537H6.86724V11.3498C6.86724 11.5447 7.02526 11.7027 7.22014 11.7027H10.1711C10.366 11.7027 10.524 11.5447 10.524 11.3498V6.43448H11.3841C11.6402 6.43448 11.8654 6.28016 11.9579 6.04138C12.0503 5.80256 11.9878 5.5368 11.7985 5.36427Z" fill="#664EF9"/>
                                <path d="M10.4317 1.00195H8.06177L10.7846 3.47779V1.35483C10.7846 1.15995 10.6266 1.00195 10.4317 1.00195Z" fill="#664EF9"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_305_2083">
                                    <rect width="12" height="12" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <Link to='/news'>Новости</Link>
                        <svg width="3" height="4" viewBox="0 0 3 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="1.5" cy="2" r="1.5" fill="#4E64F9"/>
                        </svg>
                        <p>{post.title}</p>
                    </div>
                    <h1>{post.title}</h1>
                    <div className={classes.dateAndSocialBlock}>
                        <p className={classes.date}>{post.date}</p>
                        <SocialButtonsBlock />
                    </div>
                    <div className={classes.imgBlock}>
                        <img src={post.bigImg} alt="Изображение комнаты"/>
                    </div>
                    <p className={classes.description}>{post.description}</p>
                </div>
                <div className={classes.seeAlso}>
                    <div className={classes.container}>
                        <h2>Читайте также</h2>
                        {
                            params.id > posts.length
                                ?
                                    null
                                :
                                    <div className={classes.seeAlsoPostsBlock}>
                                        <NewsItem post={posts[+params.id]? posts[+params.id] : posts[+params.id - 2]}></NewsItem>
                                        <NewsItem post={posts[+params.id+1]? posts[+params.id+1] : posts[+params.id - 3]}></NewsItem>
                                        <NewsItem post={posts[+params.id+2]? posts[+params.id+2] : posts[+params.id - 4]}></NewsItem>
                                    </div>
                        }
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default NewIdPage;
