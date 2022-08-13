import {FC} from 'react';

import NewsItem from '../../newsComponents/NewsItem/NewsItem.tsx';

import {newProps, paramsProps} from '../../../types/types';

import classes from './NewIdPageSeeAlso.module.scss';

interface NewIdPageSeeAlsoProps{
    params: paramsProps,
    posts: newProps
}

const NewIdPageSeeAlso:FC <NewIdPageSeeAlsoProps>= ({params, posts}) => {
    return (
        <div data-testid={'new-id-page-see-also-section'} className={classes.seeAlso}>
            <div className={classes.container}>
                <h2>Читайте также</h2>
                {
                    params.id > posts.length
                        ?
                        null
                        :
                        <div className={classes.seeAlsoPostsBlock}>
                            <NewsItem post={posts[+params.id] ? posts[+params.id] : posts[+params.id - 2]} />
                            <NewsItem post={posts[+params.id+1] ? posts[+params.id+1] : posts[+params.id - 3]} />
                            <NewsItem post={posts[+params.id+2] ? posts[+params.id+2] : posts[+params.id - 4]} />
                        </div>
                }
            </div>
        </div>
    );
};

export default NewIdPageSeeAlso;
