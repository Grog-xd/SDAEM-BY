import React, {useEffect, useState} from 'react';
import classes from './productsItem.module.scss'
import {Link, useParams} from "react-router-dom";
import ProfileCard from "../../profileCard/profileCard";
import {useDispatch, useSelector} from "react-redux";
import {likeHandler} from "../../../redux/mainPage";

const ProductsItem = ({product}) => {
    const [profileActive, setProfileActive] = useState(false)
    const limit = useSelector(state=> state.main.productsLimit)
    const params = useParams()
    const dispatch = useDispatch()

    const [likeActive, setLikeActive] = useState(false)


    function setLike(){
        dispatch(likeHandler({type:params.type, id:product.id}))
        setLikeActive(!likeActive)
    }

    useEffect(()=>{
        setLikeActive(product.like)
    },[])

    return (
        <React.Fragment>
            {
                limit === 6
                    ?
                        <div className={classes.productItem}>
                            <div className={classes.typeProduct}>{product.type}</div>
                            <img className={classes.img} src={product.img} alt="Изображение карточки"/>
                            <div className={classes.textBlock}>
                                <div className={classes.infoSection}>
                                    <div className={classes.cost}>
                                        <strong>{product.cost} BYN</strong>
                                        <p>за сутки</p>
                                    </div>
                                    <div className={classes.infoBlock}>
                                        <svg width="15" height="15" viewBox="0 0 20 20" fill="#686868" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M10.0013 0C7.14418 0 4.80859 2.33559 4.80859 5.19275C4.80859 8.04991 7.14418 10.3855 10.0013 10.3855C12.8585 10.3855 15.1941 8.04991 15.1941 5.19275C15.1941 2.33559 12.8585 0 10.0013 0Z" fill="#686868"/>
                                                <path d="M18.913 14.536C18.7769 14.1959 18.5955 13.8784 18.3915 13.5836C17.3484 12.0416 15.7384 11.0212 13.9244 10.7718C13.6976 10.7492 13.4482 10.7945 13.2668 10.9305C12.3144 11.6335 11.1806 11.9963 10.0014 11.9963C8.82228 11.9963 7.68851 11.6335 6.73612 10.9305C6.5547 10.7945 6.30526 10.7265 6.07853 10.7718C4.26446 11.0212 2.63183 12.0416 1.61143 13.5836C1.40735 13.8784 1.22592 14.2186 1.0899 14.536C1.02189 14.6721 1.04454 14.8308 1.11256 14.9669C1.29398 15.2843 1.52071 15.6018 1.72479 15.8739C2.04224 16.3048 2.38239 16.6902 2.76789 17.053C3.08534 17.3705 3.44815 17.6653 3.81099 17.9601C5.60236 19.2979 7.75657 20.0009 9.97879 20.0009C12.201 20.0009 14.3552 19.2979 16.1466 17.9601C16.5094 17.688 16.8722 17.3705 17.1897 17.053C17.5525 16.6902 17.9153 16.3047 18.2328 15.8739C18.4595 15.5791 18.6636 15.2843 18.845 14.9669C18.9583 14.8308 18.981 14.672 18.913 14.536Z" fill="#686868"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2831_1302">
                                                    <rect width="15" height="15" fill="#686868"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        {product.people}
                                    </div>
                                    <div className={classes.infoBlock}>
                                        {
                                            params.type === 'cars'
                                                ?   `${product.rooms} мест.`
                                                :   `${product.rooms} комн.`
                                        }
                                    </div>
                                    {
                                        product.size
                                            ?
                                            <div className={classes.infoBlock}>
                                                {product.size}
                                            </div>
                                            :
                                            null
                                    }
                                </div>
                                <div className={classes.location}>
                                    <svg width="12" height="15" viewBox="0 0 9 10" fill="#BDBDBD" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.43806 1.74419C6.7055 0.627907 5.4962 0 4.13573 0C2.7869 0 1.5776 0.627907 0.821781 1.74419C0.0659671 2.83721 -0.108452 4.23256 0.356665 5.45349C0.484572 5.77907 0.682246 6.11628 0.93806 6.4186L3.87992 9.88372C3.94969 9.95349 4.01946 10 4.12411 10C4.22876 10 4.29853 9.95349 4.36829 9.88372L7.32178 6.4186C7.5776 6.11628 7.7869 5.7907 7.90318 5.45349C8.36829 4.23256 8.19387 2.83721 7.43806 1.74419ZM4.13573 5.86047C3.13573 5.86047 2.31015 5.03488 2.31015 4.03488C2.31015 3.03488 3.13573 2.2093 4.13573 2.2093C5.13574 2.2093 5.96132 3.03488 5.96132 4.03488C5.96132 5.03488 5.14736 5.86047 4.13573 5.86047Z" fill="#BDBDBD"/>
                                    </svg>
                                    <p>{product.city}, {product.location}</p>
                                </div>
                                <div className={classes.location}>
                                    <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.6401 11.4773H18.3812L14.4755 0.509766L9.99979 7.19943L5.21594 0.589264L1.61882 11.4773H0.359905L0 12.9373H4.77911L6.65514 7.59981L10.0565 12.2942L10.0769 12.3238L10.0978 12.2942L13.3449 7.59981L15.2209 12.9373H20L19.6401 11.4773Z" fill="#BDBDBD"/>
                                    </svg>
                                    <p>{product.metro}</p>
                                    <svg width="10" height="10" viewBox="0 0 3 4" fill="#BDBDBD" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="1.5" cy="2" r="1.5" fill="#BDBDBD"/>
                                    </svg>
                                    <p>{product.district}</p>
                                </div>
                                <p className={classes.bodyText}>{product.body}</p>
                                <div className={classes.buttonSection}>
                                    {
                                        params.type
                                            ?
                                            <button className={classes.heartButton} onClick={setLike}>
                                                {
                                                    likeActive
                                                        ?
                                                        <svg width="15px" height="13px"  xmlns="http://www.w3.org/2000/svg"
                                                             viewBox="0 0 122.88 107.39">
                                                            <path fill="red" className="cls-1"
                                                                  d="M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z"/>
                                                        </svg>
                                                        :
                                                        <svg  width="15" height="13" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#EB5757" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" stroke="currentColor"/></svg>
                                                }
                                            </button>
                                            : null
                                    }
                                    <button className={classes.contacts} onClick={()=> setProfileActive(!profileActive)}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M11.1825 0.349609H5.72797C4.78706 0.349609 4.02344 1.11324 4.02344 2.05415V13.6451C4.02344 14.586 4.78706 15.3496 5.72797 15.3496H11.1825C12.1234 15.3496 12.8871 14.586 12.8871 13.6451V2.05415C12.8871 1.11324 12.1234 0.349609 11.1825 0.349609ZM8.45527 14.6678C7.88935 14.6678 7.43254 14.211 7.43254 13.6451C7.43254 13.0792 7.88935 12.6223 8.45527 12.6223C9.02119 12.6223 9.478 13.0792 9.478 13.6451C9.478 14.211 9.02116 14.6678 8.45527 14.6678ZM11.5235 11.9405H5.38709V2.39507H11.5235V11.9405Z" fill="#664EF9"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2831_1884">
                                                    <rect width="15" height="15" fill="white" transform="translate(0.955078 0.349609)"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Контакты
                                    </button>
                                    {/* <Link to={`/catalog/${product.obj}/${product.id}`}>Подробнее</Link> */}
                                </div>
                                {profileActive
                                    ?
                                    <ProfileCard style={classes.profile} profile={product.profile}/>
                                    :
                                    null
                                }
                            </div>
                        </div>

                    :
                        <div className={classes.productItemList}>
                            <div className={classes.imgBlock}>
                                <img className={classes.img} src={product.img} alt="Изображение карточки"/>
                                <div className={classes.typeProduct}>{product.type}</div>
                            </div>
                            <div className={classes.textBlock}>
                                <div className={classes.cost}>
                                    <strong>{product.cost} BYN</strong>
                                    <p>за сутки</p>
                                </div>
                                <p className={classes.title}>{product.rooms}{product.title} на {product.district}е</p>
                                <p className={classes.location}>
                                    <svg width="16" height="20" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.43806 1.74419C6.7055 0.627907 5.4962 0 4.13573 0C2.7869 0 1.5776 0.627907 0.821781 1.74419C0.0659671 2.83721 -0.108452 4.23256 0.356665 5.45349C0.484572 5.77907 0.682246 6.11628 0.93806 6.4186L3.87992 9.88372C3.94969 9.95349 4.01946 10 4.12411 10C4.22876 10 4.29853 9.95349 4.36829 9.88372L7.32178 6.4186C7.5776 6.11628 7.7869 5.7907 7.90318 5.45349C8.36829 4.23256 8.19387 2.83721 7.43806 1.74419ZM4.13573 5.86047C3.13573 5.86047 2.31015 5.03488 2.31015 4.03488C2.31015 3.03488 3.13573 2.2093 4.13573 2.2093C5.13574 2.2093 5.96132 3.03488 5.96132 4.03488C5.96132 5.03488 5.14736 5.86047 4.13573 5.86047Z" fill="#664EF9"/>
                                    </svg>
                                    {product.city}, {product.location}
                                </p>
                                <div className={classes.infoSection}>
                                    <div className={classes.infoBlock}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2831_1302)">
                                                <path d="M10.0013 0C7.14418 0 4.80859 2.33559 4.80859 5.19275C4.80859 8.04991 7.14418 10.3855 10.0013 10.3855C12.8585 10.3855 15.1941 8.04991 15.1941 5.19275C15.1941 2.33559 12.8585 0 10.0013 0Z" fill="#686868"/>
                                                <path d="M18.913 14.536C18.7769 14.1959 18.5955 13.8784 18.3915 13.5836C17.3484 12.0416 15.7384 11.0212 13.9244 10.7718C13.6976 10.7492 13.4482 10.7945 13.2668 10.9305C12.3144 11.6335 11.1806 11.9963 10.0014 11.9963C8.82228 11.9963 7.68851 11.6335 6.73612 10.9305C6.5547 10.7945 6.30526 10.7265 6.07853 10.7718C4.26446 11.0212 2.63183 12.0416 1.61143 13.5836C1.40735 13.8784 1.22592 14.2186 1.0899 14.536C1.02189 14.6721 1.04454 14.8308 1.11256 14.9669C1.29398 15.2843 1.52071 15.6018 1.72479 15.8739C2.04224 16.3048 2.38239 16.6902 2.76789 17.053C3.08534 17.3705 3.44815 17.6653 3.81099 17.9601C5.60236 19.2979 7.75657 20.0009 9.97879 20.0009C12.201 20.0009 14.3552 19.2979 16.1466 17.9601C16.5094 17.688 16.8722 17.3705 17.1897 17.053C17.5525 16.6902 17.9153 16.3047 18.2328 15.8739C18.4595 15.5791 18.6636 15.2843 18.845 14.9669C18.9583 14.8308 18.981 14.672 18.913 14.536Z" fill="#686868"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2831_1302">
                                                    <rect width="20" height="20" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        {product.people}
                                    </div>
                                    <div className={classes.infoBlock}>
                                        {
                                            params.type === 'cars'
                                                ?   `${product.rooms} мест.`
                                                :   `${product.rooms} комн.`
                                        }
                                    </div>
                                    <div className={classes.infoBlock}>
                                        <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.6401 11.4773H18.3812L14.4755 0.509766L9.99979 7.19943L5.21594 0.589264L1.61882 11.4773H0.359905L0 12.9373H4.77911L6.65514 7.59981L10.0565 12.2942L10.0769 12.3238L10.0978 12.2942L13.3449 7.59981L15.2209 12.9373H20L19.6401 11.4773Z" fill="#664EF9"/>
                                        </svg>
                                        {product.metro}
                                    </div>
                                    <div className={classes.infoBlock}>
                                        <strong>район:</strong>
                                        {product.district}
                                    </div>
                                </div>
                                <p className={classes.description}>
                                    {product.body}
                                </p>
                                <div className={classes.btnSection}>
                                    <div className={classes.btnBlock}>
                                        <button className={classes.contacts} onClick={()=> setProfileActive(!profileActive)}>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path d="M11.1825 0.349609H5.72797C4.78706 0.349609 4.02344 1.11324 4.02344 2.05415V13.6451C4.02344 14.586 4.78706 15.3496 5.72797 15.3496H11.1825C12.1234 15.3496 12.8871 14.586 12.8871 13.6451V2.05415C12.8871 1.11324 12.1234 0.349609 11.1825 0.349609ZM8.45527 14.6678C7.88935 14.6678 7.43254 14.211 7.43254 13.6451C7.43254 13.0792 7.88935 12.6223 8.45527 12.6223C9.02119 12.6223 9.478 13.0792 9.478 13.6451C9.478 14.211 9.02116 14.6678 8.45527 14.6678ZM11.5235 11.9405H5.38709V2.39507H11.5235V11.9405Z" fill="#664EF9"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2831_1884">
                                                        <rect width="15" height="15" fill="white" transform="translate(0.955078 0.349609)"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            Контакты
                                        </button>
                                        <button className={classes.heartButton} onClick={setLike}>
                                            В закладки
                                            {
                                                likeActive
                                                    ?
                                                    <svg width="15px" height="13px"  xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 122.88 107.39">
                                                        <path fill="red" className="cls-1"
                                                              d="M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z"/>
                                                    </svg>
                                                    :
                                                    <svg  width="15" height="13" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#EB5757" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" stroke="currentColor"/></svg>
                                            }
                                        </button>
                                    </div>
                                    {/* <Link to={`/catalog/${product.obj}/${product.id}`}>Подробнее</Link> */}
                                </div>
                                {profileActive
                                    ?
                                    <ProfileCard style={classes.profile} profile={product.profile}/>
                                    :
                                    null
                                }
                            </div>
                        </div>
            }
        </React.Fragment>

    );
};

export default ProductsItem;
