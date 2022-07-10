import React from 'react';
import NewsItem from "../../../components/newsComponents/NewsItem/NewsItem";
import classes from "./NewIdPageSeeAlso.module.scss";

const NewIdPageSeeAlso = ({params, posts}) => {
    return (
        <div className={classes.seeAlso}>
            <div className={classes.container}>
                <h2>Читайте также</h2>
                {
                    params.id > posts.length
                        ?
                        null
                        :
                        <div className={classes.seeAlsoPostsBlock}>
                            <NewsItem post={posts[+params.id] ? posts[+params.id] : posts[+params.id - 2]}></NewsItem>
                            <NewsItem post={posts[+params.id+1] ? posts[+params.id+1] : posts[+params.id - 3]}></NewsItem>
                            <NewsItem post={posts[+params.id+2] ? posts[+params.id+2] : posts[+params.id - 4]}></NewsItem>
                        </div>
                }
            </div>
        </div>
    );
};

export default NewIdPageSeeAlso;
