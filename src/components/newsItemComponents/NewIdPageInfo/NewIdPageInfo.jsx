import React from 'react';
import {Link} from 'react-router-dom';

import SocialButtonsBlock from '../../socialButtonsBlock/SocialButtonsBlock';
import SvgHome from '../../svg/SvgHome';
import SvgPoint from '../../svg/SvgPoint';

import classes from './NewIdPageInfo.module.scss';

const NewIdPageInfo = ({post}) => {
    return (
        <div className={classes.mainNewPage}>
            <div className={classes.breadcrumbs}>
                <SvgHome width={'12'} height={'12'} color={'#664EF9'}/>
                <Link to='/news'>Новости</Link>
                <SvgPoint width={'3'} height={'4'} color={'#4E64F9'}/>
                <p>{post.title}</p>
            </div>
            <h1>{post.title}</h1>
            <div className={classes.dateAndSocialBlock}>
                <p className={classes.date}>{post.date}</p>
                <SocialButtonsBlock />
            </div>
            <div className={classes.imgBlock}>
                <img src={post.bigImg} alt='Изображение комнаты'/>
            </div>
            <p className={classes.description}>{post.description}</p>
        </div>
    );
};

export default NewIdPageInfo;
