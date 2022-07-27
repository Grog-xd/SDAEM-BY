import React from 'react';
import {useNavigate} from 'react-router-dom';

import classes from './NewsItem.module.scss'

const NewsItem = ({post}) => {
    const navigate = useNavigate()

    return (
        <div className={classes.newsItem}>
            <img src={post.img} alt='Изображение комнаты'/>
            <div className={classes.newsItemTextSection}>
                <p><b>{post.title}</b></p>
                <p>{post.body}</p>
                <div className={classes.newsItemBtnBlock}>
                    <p>{post.date}</p>
                    <button onClick={()=>navigate(`/news/${post.id}`)}>Читать</button>
                </div>
            </div>
        </div>
    );
};

export default NewsItem;
