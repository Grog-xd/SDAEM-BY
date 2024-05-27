import React from 'react';
import classes from "./profileCard.module.scss";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {exit} from "../../redux/toolkitSlice";


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
            <p>{profile.city? profile.city : null}</p>
            <p>{profile.phone ? profile.phone : null}</p>
            <strong>{profile.email}</strong>
            <div className={classes.socialBtns}>
                {
                    profile.viber
                        ?
                            <a rel={"noreferrer"} target="_blank" href={`${profile.viber}`}>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="36" height="36" rx="18" fill="#7B519D"/>
                                    <path d="M17.9029 10.4075C16.6341 10.4247 13.904 10.633 12.3768 12.0323C11.2431 13.1594 10.8469 14.821 10.8008 16.8788C10.7613 18.9287 10.7151 22.778 14.426 23.8267V25.4218C14.426 25.4218 14.4009 26.0611 14.8228 26.1929C15.3435 26.3577 15.6401 25.864 16.1344 25.3367L17.0572 24.2953C19.5949 24.5062 21.5393 24.0191 21.7634 23.9466C22.2775 23.7819 25.1783 23.4121 25.6529 19.5621C26.1406 15.5869 25.4156 13.0823 24.1105 11.9486L24.1039 11.9473C23.7085 11.5847 22.1266 10.4313 18.5871 10.4181C18.5871 10.4181 18.326 10.4016 17.9029 10.4075ZM17.947 11.5261C18.3063 11.5241 18.5271 11.5393 18.5271 11.5393C21.5195 11.5458 22.9505 12.4489 23.2866 12.752C24.3874 13.6939 24.9529 15.9528 24.539 19.2721C24.1435 22.4887 21.7904 22.693 21.3554 22.8314C21.1708 22.8907 19.4571 23.3126 17.3004 23.1741C17.3004 23.1741 15.6928 25.1126 15.1919 25.6136C15.1128 25.6993 15.0205 25.7256 14.9612 25.7124C14.8755 25.6927 14.8492 25.5872 14.8557 25.4422L14.8689 22.7932C11.7242 21.9231 11.9088 18.6394 11.9417 16.9256C11.9813 15.2119 12.3043 13.8067 13.26 12.8575C14.5499 11.6909 16.8687 11.5327 17.9464 11.5261H17.947ZM18.1843 13.2398C18.1584 13.2397 18.1327 13.2447 18.1087 13.2546C18.0847 13.2645 18.0629 13.279 18.0445 13.2973C18.0262 13.3156 18.0116 13.3374 18.0017 13.3613C17.9917 13.3853 17.9866 13.4109 17.9866 13.4369C17.9866 13.4893 18.0074 13.5396 18.0445 13.5767C18.0816 13.6138 18.1319 13.6346 18.1843 13.6346C18.6744 13.6253 19.1614 13.7131 19.6173 13.8929C20.0732 14.0728 20.489 14.3412 20.8406 14.6826C21.5591 15.3813 21.909 16.3173 21.9222 17.5432C21.9222 17.5692 21.9273 17.5949 21.9373 17.6189C21.9472 17.6429 21.9618 17.6647 21.9801 17.6831C21.9985 17.7014 22.0203 17.716 22.0443 17.7259C22.0683 17.7359 22.094 17.741 22.12 17.741V17.735C22.1724 17.735 22.2227 17.7142 22.2598 17.6771C22.2969 17.64 22.3177 17.5897 22.3177 17.5373C22.3422 16.9608 22.249 16.3853 22.0439 15.8459C21.8388 15.3065 21.526 14.8145 21.1247 14.3999C20.3403 13.6353 19.3503 13.2398 18.1837 13.2398H18.1843ZM15.5781 13.6946C15.438 13.6746 15.2952 13.7025 15.1728 13.7737H15.1649C14.8946 13.9319 14.6455 14.1296 14.4082 14.3933C14.2302 14.6042 14.1307 14.8145 14.1043 15.0188C14.0888 15.1386 14.1001 15.2604 14.1373 15.3754L14.1505 15.382C14.3536 15.9792 14.6187 16.5536 14.9414 17.0957C15.3597 17.8549 15.8736 18.5573 16.4706 19.1858L16.4904 19.2121L16.5167 19.2319L16.5365 19.2517L16.5563 19.2715C17.1872 19.8699 17.8915 20.386 18.6523 20.8072C19.5224 21.2818 20.051 21.5059 20.3674 21.5982V21.6048C20.4596 21.6311 20.544 21.6443 20.6297 21.6443C20.8997 21.6246 21.1554 21.5151 21.356 21.3332C21.6131 21.1025 21.8174 20.8468 21.969 20.5765V20.5699C22.1206 20.2865 22.0679 20.0156 21.8504 19.8311C21.412 19.4476 20.9374 19.1076 20.4333 18.816C20.0971 18.6315 19.7544 18.7435 19.6159 18.9281L19.3193 19.3031C19.1677 19.4877 18.8909 19.4613 18.8909 19.4613L18.883 19.4679C16.8265 18.9406 16.2795 16.8584 16.2795 16.8584C16.2795 16.8584 16.2531 16.575 16.4442 16.43L16.8133 16.1334C16.9913 15.9884 17.1165 15.6456 16.9254 15.3095C16.6342 14.8051 16.2942 14.3304 15.9103 13.8923C15.8268 13.7888 15.709 13.7186 15.5781 13.6946ZM18.5264 14.2812C18.474 14.2814 18.4237 14.3024 18.3868 14.3396C18.3498 14.3768 18.3292 14.4272 18.3293 14.4796C18.3295 14.5321 18.3505 14.5823 18.3877 14.6192C18.4249 14.6562 18.4753 14.6769 18.5277 14.6767C19.1874 14.6881 19.8155 14.9607 20.2744 15.4347C20.4815 15.6631 20.6406 15.9307 20.7425 16.2216C20.8444 16.5126 20.8869 16.821 20.8676 17.1286C20.8678 17.181 20.8887 17.2311 20.9258 17.268C20.9628 17.305 21.013 17.3257 21.0654 17.3257L21.072 17.3336C21.098 17.3336 21.1237 17.3285 21.1478 17.3185C21.1718 17.3085 21.1936 17.2939 21.212 17.2755C21.2304 17.2571 21.2449 17.2352 21.2548 17.2111C21.2647 17.187 21.2698 17.1613 21.2697 17.1352C21.2895 16.3509 21.0456 15.6918 20.5644 15.1644C20.0833 14.6371 19.411 14.3405 18.5541 14.2812C18.5449 14.2806 18.5356 14.2806 18.5264 14.2812ZM18.8494 15.3483C18.8229 15.3476 18.7966 15.352 18.7719 15.3614C18.7471 15.3708 18.7245 15.385 18.7053 15.4031C18.686 15.4213 18.6705 15.443 18.6597 15.4672C18.6488 15.4913 18.6429 15.5173 18.6421 15.5438C18.6413 15.5702 18.6457 15.5966 18.6551 15.6213C18.6645 15.646 18.6787 15.6686 18.6969 15.6879C18.715 15.7071 18.7368 15.7226 18.7609 15.7335C18.785 15.7443 18.8111 15.7503 18.8375 15.7511C19.4901 15.784 19.8064 16.1136 19.846 16.7925C19.8477 16.8438 19.8693 16.8924 19.9062 16.9281C19.9431 16.9637 19.9924 16.9837 20.0437 16.9836H20.0503C20.0769 16.9828 20.103 16.9766 20.1271 16.9655C20.1512 16.9544 20.1728 16.9385 20.1907 16.9188C20.2085 16.8991 20.2222 16.876 20.2309 16.8509C20.2397 16.8258 20.2432 16.7992 20.2415 16.7727C20.1953 15.8895 19.7142 15.3945 18.8573 15.3483C18.8547 15.3483 18.852 15.3483 18.8494 15.3483Z" fill="white"/>
                                </svg>
                            </a>
                        : null
                }
                {
                    profile.whatsUpp
                        ?
                            <a rel={"noreferrer"} target="_blank" href={`${profile.whatsUpp}`}><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="36" height="36" rx="18" fill="#0DBB41"/>
                                <path d="M23.3802 12.5885C22.6798 11.883 21.8463 11.3237 20.928 10.9431C20.0097 10.5624 19.0249 10.368 18.0308 10.3711C13.864 10.3711 10.4726 13.7625 10.4726 17.9322C10.4726 19.2645 10.8217 20.5673 11.4826 21.7118L10.4097 25.6306L14.4181 24.5786C15.5263 25.1823 16.7679 25.499 18.0299 25.4999H18.0327C22.1995 25.4999 25.5938 22.1085 25.5938 17.9389C25.5963 16.9451 25.4019 15.9607 25.0218 15.0426C24.6417 14.1244 24.0834 13.2906 23.3792 12.5895L23.3802 12.5885ZM18.0327 24.2239C16.9065 24.224 15.801 23.9213 14.832 23.3474L14.6022 23.2101L12.2236 23.8328L12.8588 21.5143L12.71 21.2759C12.0784 20.2752 11.7447 19.1155 11.7477 17.9322C11.7498 16.2652 12.4131 14.6671 13.5921 13.4886C14.7711 12.3101 16.3695 11.6475 18.0365 11.6462C19.7141 11.6462 21.2944 12.3024 22.4799 13.4879C23.0649 14.0708 23.5286 14.7638 23.8442 15.527C24.1598 16.2901 24.3211 17.1083 24.3187 17.9341C24.3158 21.4028 21.4966 24.2229 18.0327 24.2229V24.2239ZM21.4785 19.5154C21.2906 19.42 20.3607 18.9641 20.1881 18.9012C20.0155 18.8382 19.8896 18.8058 19.7618 18.9965C19.6369 19.1844 19.2735 19.6107 19.1629 19.7385C19.0522 19.8635 18.9426 19.8816 18.7547 19.7862C18.5668 19.6908 17.9555 19.4915 17.2345 18.8478C16.6737 18.3471 16.2931 17.7271 16.1825 17.5393C16.0719 17.3514 16.1701 17.2474 16.2664 17.1549C16.3532 17.071 16.4543 16.9346 16.5497 16.824C16.6451 16.7133 16.6746 16.6361 16.7376 16.5083C16.8005 16.3834 16.77 16.2727 16.7223 16.1774C16.6746 16.082 16.296 15.1521 16.1415 14.7735C15.9899 14.4034 15.8315 14.4549 15.7152 14.4483C15.6046 14.4425 15.4796 14.4425 15.3547 14.4425C15.2297 14.4425 15.0237 14.4902 14.8511 14.6781C14.6785 14.866 14.1892 15.3247 14.1892 16.2546C14.1892 17.1845 14.8654 18.0819 14.9608 18.2097C15.0562 18.3347 16.2931 20.2449 18.1882 21.0623C18.6383 21.2559 18.9902 21.3722 19.264 21.4619C19.717 21.6049 20.128 21.584 20.4532 21.5363C20.8166 21.4829 21.571 21.0804 21.7293 20.6388C21.8876 20.1973 21.8876 19.8196 21.84 19.7414C21.7951 19.6575 21.6702 19.6107 21.4794 19.5144L21.4785 19.5154Z" fill="white"/>
                            </svg></a>
                        : null
                }
                <a  rel={"noreferrer"} target="_blank" href={profile.email}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="36" height="36" rx="18" fill="#664EF9"/>
                        <g>
                            <path d="M25.3924 25.0709C25.797 25.0709 26.1476 24.9373 26.4456 24.6735L21.346 19.5736C21.2236 19.6613 21.105 19.7465 20.993 19.8275C20.6113 20.1086 20.3016 20.3281 20.0638 20.4853C19.8259 20.6429 19.5095 20.8035 19.1146 20.9675C18.7193 21.1317 18.3511 21.2135 18.0096 21.2135H17.9996H17.9896C17.648 21.2135 17.2797 21.1317 16.8845 20.9675C16.4893 20.8035 16.1729 20.6429 15.9354 20.4853C15.6975 20.3281 15.388 20.1087 15.0061 19.8275C14.8997 19.7495 14.7817 19.6639 14.6541 19.5723L9.55347 24.6735C9.85148 24.9373 10.2023 25.0709 10.6069 25.0709H25.3924Z" fill="white"/>
                            <path d="M10.0146 16.3623C9.63301 16.1079 9.29461 15.8165 9 15.4883V23.2473L13.4948 18.7525C12.5956 18.1247 11.437 17.3289 10.0146 16.3623Z" fill="white"/>
                            <path d="M25.9959 16.3623C24.6278 17.2883 23.4649 18.0855 22.5073 18.7543L27.0003 23.2475V15.4883C26.7123 15.8099 26.3775 16.1011 25.9959 16.3623Z" fill="white"/>
                            <path d="M25.3928 10.9277H10.6073C10.0915 10.9277 9.69489 11.1019 9.41708 11.4499C9.13904 11.7981 9.00024 12.2335 9.00024 12.7557C9.00024 13.1775 9.18443 13.6346 9.55263 14.1269C9.92084 14.6191 10.3126 15.0057 10.7278 15.287C10.9555 15.4478 11.6419 15.925 12.7871 16.7184C13.4053 17.1468 13.9429 17.5202 14.4049 17.8424C14.7987 18.1168 15.1383 18.3544 15.4187 18.5516C15.4509 18.5742 15.5015 18.6104 15.5687 18.6584C15.6411 18.7104 15.7327 18.7764 15.8457 18.858C16.0633 19.0154 16.2441 19.1426 16.3881 19.2398C16.5319 19.337 16.7061 19.4456 16.9105 19.5662C17.1147 19.6866 17.3073 19.7772 17.4881 19.8374C17.6689 19.8976 17.8363 19.9278 17.9903 19.9278H18.0003H18.0103C18.1642 19.9278 18.3317 19.8976 18.5125 19.8374C18.6933 19.7772 18.8857 19.6868 19.0901 19.5662C19.2943 19.4456 19.4683 19.3368 19.6125 19.2398C19.7565 19.1426 19.9373 19.0154 20.155 18.858C20.2677 18.7764 20.3593 18.7104 20.4317 18.6586C20.4989 18.6104 20.5495 18.5744 20.5819 18.5516C20.8004 18.3996 21.1407 18.163 21.5984 17.8452C22.4312 17.2666 23.6576 16.415 25.2828 15.287C25.7716 14.9455 26.18 14.5336 26.5082 14.0516C26.8358 13.5696 27 13.064 27 12.5349C27 12.0929 26.8408 11.7147 26.523 11.3997C26.2048 11.0851 25.828 10.9277 25.3928 10.9277Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_559_736">
                                <rect width="18" height="18" fill="white" transform="translate(9 9)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </a>
            </div>
            { profile.password
                ?
                    <div className={classes.btnsProfile}>
                        {/* <Link to={'/404'}>Редактировать профиль</Link> */}
                        <button onClick={exitAuth}>Выйти из аккаунта</button>
                    </div>
                : null

            }
        </div>
    );
};

export default ProfileCard;