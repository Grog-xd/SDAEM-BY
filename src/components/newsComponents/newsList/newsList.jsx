import React from 'react';
import classes from './newsList.module.scss'
import {useSelector} from "react-redux";
import NewsItem from "../newsItem/newsItem";

const NewsList = () => {
    const posts = useSelector(state => state.toolkit.posts)
    const limit = useSelector(state => state.toolkit.limitNewsItems)
    let sortedPosts = useSelector(state => state.toolkit.sortedPosts)

    // sortedPosts.length


    return (
        sortedPosts.length
                ?
                    <div className={classes.newsList}>
                        {sortedPosts.map((sortedPost)=>
                                <NewsItem key={sortedPost.id} post={sortedPost}></NewsItem>
                        )}
                    </div>
                :
                    <h2>Новости не найдены</h2>
    );
};

export default NewsList;
