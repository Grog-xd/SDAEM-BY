import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {exit} from "../../redux/loginPage";
import SvgViberBtn from "../svg/SvgViberBtn";
import SvgWhatsappBtn from "../svg/SvgWhatsappBtn";
import SvgEmailBtn from "../svg/SvgEmailBtn";
import classes from "./ProfileCard.module.scss";


const ProfileCard = ({profile, setActive, style}) => {
    const dispatch = useDispatch()

    function exitAuth(){
        dispatch(exit())
        setActive(false)
    }
    const cls =[
        classes.profileCardActive,
        style
    ]

    return (
        <div className={cls.join(' ')}>
            {
                profile.avatar
                    ?
                        <img src={profile.avatar? profile.avatar:null} alt={'avatar'}/>
                    : null
            }

            <p>Владелец</p>
            <p>{profile.city ? profile.city : null}</p>
            <p>{profile.phone ? profile.phone : null}</p>
            <strong>{profile.email}</strong>
            <div className={classes.socialBtns}>
                {
                    profile.viber
                        ?
                            <a rel={"noreferrer"} target="_blank" href={`${profile.viber}`}>
                                <SvgViberBtn />
                            </a>
                        : null
                }
                {
                    profile.whatsUpp
                        ?
                            <a rel={"noreferrer"} target="_blank" href={`${profile.whatsUpp}`}>
                                <SvgWhatsappBtn />
                            </a>
                        : null
                }
                <a  rel={"noreferrer"} target="_blank" href={profile.email}>
                    <SvgEmailBtn />
                </a>
            </div>
            { profile.password
                ?
                    <div className={classes.btnsProfile}>
                        <Link to={'/404'}>Редактировать профиль</Link>
                        <button onClick={exitAuth}>Выйти из акаунта</button>
                    </div>
                : null

            }
        </div>
    );
};

export default ProfileCard;
