import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';

import {setBookMarkActive} from '../../../../redux/loginPage';
import ProfileCard from '../../../profileCard/ProfileCard';
import SvgHeart from '../../../svg/SvgHeart';
import SvgArrowDown from '../../../svg/SvgArrowDown';

import classes from './BookmarkProfile.module.scss'

const BookmarkProfile = () => {
    const {isAuth, profile, bookMarkActive} = useSelector(state => state.login)
    const dispatch = useDispatch()
    const [profileActive, setProfileActive] = useState(false)

    return (
        <div className={classes.bookmarkProfile}>
            {/*{bookMarkActive*/}
            {/*    ?*/}
            {/*    <div onClick={()=>dispatch(setBookMarkActive())} className={classes.bookmarkActive}>*/}
            {/*        <p>Добавлено</p>*/}
            {/*        <svg width='14px' height='14px' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 107.39">*/}
            {/*            <path fill="red" d="M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z"/>*/}
            {/*        </svg>*/}
            {/*    </div>*/}
            {/*    :*/}
            {/*    <div onClick={()=>dispatch(setBookMarkActive())} className={classes.bookmark}>*/}
            {/*        <p>Закладки</p>*/}
            {/*        <svg  width="16px" height="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">*/}
            {/*            <path fill="#8291A3" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" stroke="currentColor"/></svg>*/}
            {/*    </div>*/}
            {/*}*/}

            <Link to={'/404'} className={classes.bookmark}>
                <p>Закладки</p>
                <SvgHeart width={'16'} height={'16'} color={'#8291A3'}/>
            </Link>

            {
                !isAuth
                    ?
                    <Link className={classes.login} to={'/login'}>Вход и регистрация</Link>
                    :
                    <div className={classes.profile} onClick={() => setProfileActive(!profileActive)}>
                        {
                            profile.avatar
                                ?
                                <img src={profile.avatar} alt='avatar'/>
                                :   null
                        }
                        <p>{profile.name}</p>
                        <SvgArrowDown width={'12'} height={'7'} color={'#4E64F9'}/>
                    </div>
            }
            {
                profileActive
                    ?
                    <ProfileCard profile={profile} setActive={setProfileActive}/>
                    :
                    null
            }

        </div>
    );
};

export default BookmarkProfile;
