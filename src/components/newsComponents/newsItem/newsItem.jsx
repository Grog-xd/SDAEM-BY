import React from 'react';
import classes from './newsItem.module.scss'
import {useNavigate} from "react-router-dom";

const NewsItem = ({post}) => {
    const navigate = useNavigate()

    return (
        <div className={classes.newsItem}>
            <img src={post.img} alt="Изображение комнаты"/>
            <div className={classes.textSection}>
                <p><b>{post.title}</b></p>
                <p className={classes.text}>{post.body}</p>
                <div className={classes.btnsBlock}>
                    <p>{post.date}</p>
                    <button onClick={()=>navigate(`/news/${post.id}`)}>Читать</button>
                </div>
            </div>
        </div>
    );
};

export default NewsItem;
