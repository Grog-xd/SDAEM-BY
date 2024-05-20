import {FC} from 'react';

import PageNavigation from './PageNavigation/PageNavigation';
import BookmarkProfile from './BookmarkProfile/BookmarkProfile';
import classes from './TopHeader.module.scss';

const TopHeader:FC = () => {
    return (
        <div className={classes.container}>
            <PageNavigation />
            <BookmarkProfile />
        </div>
    );
};

export default TopHeader;
