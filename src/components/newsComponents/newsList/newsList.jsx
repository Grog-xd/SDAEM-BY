import React from 'react';
import classes from './newsList.module.scss'
import {useSelector} from "react-redux";
import NewsItem from "../newsItem/newsItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const NewsList = () => {
    const posts = useSelector(state => state.toolkit.posts)
    const limit = useSelector(state => state.toolkit.limitNewsItems)
    let sortedPosts = useSelector(state => state.toolkit.sortedPosts)

    // sortedPosts.length


    return (
        sortedPosts.length
                ?
                    <div className={classes.newsList}>
                        <TransitionGroup>
                            {sortedPosts.map((sortedPost)=>
                                <CSSTransition key={sortedPost.id} timeout={500} classNames='post'>
                                    <NewsItem  post={sortedPost}></NewsItem>
                                </CSSTransition>
                            )}
                        </TransitionGroup>
                    </div>
                :
                    <h2>Новости не найдены</h2>
    );
};

export default NewsList;
