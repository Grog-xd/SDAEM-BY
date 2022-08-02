import {FC} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {exit} from '../../redux/loginPage';
import SvgViberBtn from '../svg/SvgViberBtn.tsx';
import SvgWhatsappBtn from '../svg/SvgWhatsappBtn.tsx';
import SvgEmailBtn from '../svg/SvgEmailBtn.tsx';

import classes from './ProfileCard.module.scss';

interface ProfileCardProps{
    profile:ProfileProps,
    setActive?:(b: boolean) => void,
    style?:string,
}

interface ProfileProps{
    avatar?: any,
    city?: string,
    phone?: string | number,
    email?: string,
    viber?: string,
    whatsUpp?: string,
    password?: string,
}

const ProfileCard:FC <ProfileCardProps>= ({profile, setActive, style}) => {
    const dispatch = useDispatch()

    function exitAuth(){
        dispatch(exit())
        setActive(false)
    }
    const cls =[
        classes.profileCardActive,
        style,
    ]

    return (
        <div className={cls.join(' ')}>
            {
                profile.avatar
                    && <img src={profile.avatar? profile.avatar:null} alt={'avatar'}/>
            }

            <p>Владелец</p>
            <p>{profile.city && profile.city}</p>
            <a className={classes.phoneLink} href={`tel:${profile.phone}`}>{profile.phone && profile.phone}</a>
            <a href={`mailto:${profile.email}`} className={classes.emailLink}>{profile.email}</a>
            <div className={classes.socialBtns}>
                {
                    profile.viber
                        &&
                            <a rel={'noreferrer'} target='_blank' href={`${profile.viber}`}>
                                <SvgViberBtn />
                            </a>
                }
                {
                    profile.whatsUpp
                        &&
                            <a rel={'noreferrer'} target='_blank' href={`${profile.whatsUpp}`}>
                                <SvgWhatsappBtn />
                            </a>
                }
                <a  rel={'noreferrer'} target='_blank' href={`mailto:${profile.email}`}>
                    <SvgEmailBtn />
                </a>
            </div>
            { profile.password
                &&
                    <div className={classes.btnsProfile}>
                        <Link to={'/404'}>Редактировать профиль</Link>
                        <button onClick={exitAuth}>Выйти из акаунта</button>
                    </div>
            }
        </div>
    );
};

export default ProfileCard;
