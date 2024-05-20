import {FC} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useState} from 'react';


import ProfileCard from '../../../profileCard/ProfileCard';
import SvgHeart from '../../../svg/SvgHeart';
import SvgArrowDown from '../../../svg/SvgArrowDown';

import {loginRedux} from '../../../../types/types';

import classes from './BookmarkProfile.module.scss'

const BookmarkProfile:FC = () => {
    const {isAuth, profile} = useSelector((state:loginRedux) => state.login)
    const [profileActive, setProfileActive] = useState<boolean>(false)

    return (
        <div data-testid={'bookmark-and-profile-section'} className={classes.bookmarkProfile}>

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
                                &&
                                <img src={profile.avatar} alt='avatar'/>
                        }
                        <p>{profile.name}</p>
                        <SvgArrowDown width={'12'} height={'7'} color={'#4E64F9'}/>
                    </div>
            }
            {
                profileActive
                    &&
                    <ProfileCard profile={profile} setActive={setProfileActive}/>
            }

        </div>
    );
};

export default BookmarkProfile;
