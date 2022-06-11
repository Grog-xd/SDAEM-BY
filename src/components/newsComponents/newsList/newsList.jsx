import React from 'react';
import classes from './newsList.module.scss'
import {useSelector} from "react-redux";
import NewsItem from "../newsItem/newsItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const NewsList = () => {
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
