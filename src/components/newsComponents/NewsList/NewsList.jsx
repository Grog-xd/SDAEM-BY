import React from 'react';
import {useSelector} from "react-redux";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import NewsItem from "../NewsItem/NewsItem";
import classes from './NewsList.module.scss'

const NewsList = () => {
    let {sortedPosts, currentPage} = useSelector(state => state.news)

    return (
        sortedPosts.length
                ?
                    <div className={classes.newsList}>
                        <TransitionGroup>
                            {sortedPosts[currentPage-1].map((sortedPost)=>
                                <CSSTransition key={sortedPost.id} timeout={500} classNames='post'>
                                    <NewsItem  post={sortedPost}></NewsItem>
                                </CSSTransition>
                            )}
                        </TransitionGroup>
                    </div>
                :
                    <h2 className={classes.notFound}>Новости не найдены</h2>
    );
};

export default NewsList;
