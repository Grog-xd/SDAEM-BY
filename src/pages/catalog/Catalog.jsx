import React, {useEffect, useState} from 'react';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ProductsList from "../../components/productsComponents/productsList/productsList";
import classes from './catalog.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom";
import {
    mainFilter,
    resetFilter,
    setCurrentPage,
    setDistrict, setLimit,
    setMaxCost,
    setMinCost,
    setRooms, setSortedValue
} from "../../redux/mainPage";
import MySelect from "../../components/UI/mySelect/mySelect";
import PaginationList from "../../components/pagination/paginationList/paginationList";
import SocialButtonsBlock from "../../components/socialButtonsBlock/socialButtonsBlock";
import MoreOptions from "../../components/moreOptions/moreOptions";

const Catalog = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()

    const districtOption = useSelector(state=> state.main.districtOption)
    const roomsOption = useSelector(state=> state.main.roomsOption)
    const roomsCurrentValue = useSelector(state=> state.main.roomsCurrentValue)
    const cityCurrentValue = useSelector(state=> state.main.cityCurrentValue)
    const minCost = useSelector(state=> state.main.minCost)
    const maxCost = useSelector(state=> state.main.maxCost)
    const sortedProducts = useSelector(state=> state.main.sortedProducts)
    const currentPage = useSelector(state=> state.main.currentPage)
    const limit = useSelector(state=> state.main.productsLimit)
    const sortedOptions = useSelector(state=> state.main.sortedOptions)
    const sortedValue = useSelector(state=> state.main.sortedValue)

    const [moreOptions, setMoreOptions] = useState(false)


    useEffect(()=>{
        test404()
        dispatch(mainFilter(params.type))
        window.scrollTo(0, 0)
    }, [params])

    function test404(){
        if(params.type !== 'flats' && params.type !== 'cottages' && params.type !== 'baths' && params.type !== 'cars' && params.type !== undefined){
            navigate('/404')
        }
    }

    function roomsHandler(rooms){
        dispatch(setRooms(rooms))
        dispatch(mainFilter(params.type))
    }
    function districtHandler(district){
        dispatch(setDistrict(district))
        dispatch(mainFilter(params.type))
    }

    function reset(){
        dispatch(resetFilter())
        dispatch(mainFilter(params.type))
    }

    function limitHandler(limit){
        dispatch(setLimit(limit))
        dispatch(mainFilter(params.type))
    }

    function sortHandler(value){
        dispatch(setSortedValue(value))
        dispatch(mainFilter(params.type))
    }

    return (
        <React.Fragment>
            <Header />
            <main className={classes.catalogPage}>
                <section className={classes.titleSection}>
                    <div className={classes.container}>
                        {
                            params.type === 'flats' ?
                                    <React.Fragment>
                                        <div className={classes.breadcrumbs}>
                                            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_3074_176)">
                                                    <path d="M11.7985 5.36428L6.41446 0.458394C6.17814 0.243027 5.82177 0.243051 5.58554 0.458371L0.201516 5.3643C0.0122119 5.5368 -0.0503192 5.80258 0.042165 6.04138C0.134673 6.28019 0.359907 6.43448 0.616008 6.43448H1.47593V11.3498C1.47593 11.5447 1.63394 11.7027 1.82883 11.7027H4.77993C4.97481 11.7027 5.13283 11.5447 5.13283 11.3498V8.36537H6.86724V11.3498C6.86724 11.5447 7.02526 11.7027 7.22014 11.7027H10.1711C10.366 11.7027 10.524 11.5447 10.524 11.3498V6.43448H11.3841C11.6402 6.43448 11.8654 6.28016 11.9579 6.04138C12.0503 5.80256 11.9878 5.5368 11.7985 5.36428Z" fill="#664EF9"/>
                                                    <path d="M10.4317 1.00195H8.06177L10.7846 3.47779V1.35483C10.7846 1.15995 10.6266 1.00195 10.4317 1.00195Z" fill="#664EF9"/>
                                                </g>
                                                <circle cx="20.5" cy="6" r="1.5" fill="#664EF9"/>
                                                <defs>
                                                    <clipPath id="clip0_3074_176">
                                                        <rect width="12" height="12" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <p>Квартиры
                                                {
                                                    cityCurrentValue !== ''
                                                        ? ` в ${cityCurrentValue}е`
                                                        :   null
                                                }
                                            </p>
                                        </div>
                                        <h1 className={classes.catalogTitle}>Аренда квартир на сутки
                                            {
                                                cityCurrentValue !== ''
                                                    ? ` в ${cityCurrentValue}е`
                                                    : null
                                            }
                                        </h1>
                                        <p className={classes.recommendationsTitle}>Рекомендуем посмотреть</p>
                                        <div className={classes.catalogRecommendations}>
                                            {roomsOption.map((room)=>
                                                <button key={room.id} onClick={()=> roomsHandler(room.value)}>{room.value}-комнатные</button>
                                            )}
                                            {districtOption.map((district)=>
                                                <button key={district.id} onClick={()=> districtHandler(district.value)}>р. {district.value}</button>
                                            )}
                                        </div>
                                    </React.Fragment>


                                : params.type === 'cottages' ?
                                    <React.Fragment>
                                        <div className={classes.breadcrumbs}>
                                            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_3074_176)">
                                                    <path d="M11.7985 5.36428L6.41446 0.458394C6.17814 0.243027 5.82177 0.243051 5.58554 0.458371L0.201516 5.3643C0.0122119 5.5368 -0.0503192 5.80258 0.042165 6.04138C0.134673 6.28019 0.359907 6.43448 0.616008 6.43448H1.47593V11.3498C1.47593 11.5447 1.63394 11.7027 1.82883 11.7027H4.77993C4.97481 11.7027 5.13283 11.5447 5.13283 11.3498V8.36537H6.86724V11.3498C6.86724 11.5447 7.02526 11.7027 7.22014 11.7027H10.1711C10.366 11.7027 10.524 11.5447 10.524 11.3498V6.43448H11.3841C11.6402 6.43448 11.8654 6.28016 11.9579 6.04138C12.0503 5.80256 11.9878 5.5368 11.7985 5.36428Z" fill="#664EF9"/>
                                                    <path d="M10.4317 1.00195H8.06177L10.7846 3.47779V1.35483C10.7846 1.15995 10.6266 1.00195 10.4317 1.00195Z" fill="#664EF9"/>
                                                </g>
                                                <circle cx="20.5" cy="6" r="1.5" fill="#664EF9"/>
                                                <defs>
                                                    <clipPath id="clip0_3074_176">
                                                        <rect width="12" height="12" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <p>Коттеджи и усадьбы

                                                {
                                                    cityCurrentValue !== ''
                                                        ? ` в ${cityCurrentValue}е`
                                                        :   null
                                                }
                                            </p>
                                        </div>
                                        <h1 className={classes.catalogTitle}>Аренда коттеджей и усадьб
                                            {
                                                cityCurrentValue !== ''
                                                    ? ` в ${cityCurrentValue}е`
                                                    : null
                                            }
                                        </h1>
                                        <p className={classes.recommendationsTitle}>Рекомендуем посмотреть</p>
                                        <div className={classes.catalogRecommendations}>
                                            {roomsOption.map((room)=>
                                                <button key={room.id} onClick={()=> roomsHandler(room.value)}>{room.value}-комнатные</button>
                                            )}
                                            {districtOption.map((district)=>
                                                <button key={district.id} onClick={()=> districtHandler(district.value)}>р. {district.value}</button>
                                            )}
                                        </div>
                                    </React.Fragment>
                                : params.type === 'baths' ?
                                        <React.Fragment>
                                            <div className={classes.breadcrumbs}>
                                                <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_3074_176)">
                                                        <path d="M11.7985 5.36428L6.41446 0.458394C6.17814 0.243027 5.82177 0.243051 5.58554 0.458371L0.201516 5.3643C0.0122119 5.5368 -0.0503192 5.80258 0.042165 6.04138C0.134673 6.28019 0.359907 6.43448 0.616008 6.43448H1.47593V11.3498C1.47593 11.5447 1.63394 11.7027 1.82883 11.7027H4.77993C4.97481 11.7027 5.13283 11.5447 5.13283 11.3498V8.36537H6.86724V11.3498C6.86724 11.5447 7.02526 11.7027 7.22014 11.7027H10.1711C10.366 11.7027 10.524 11.5447 10.524 11.3498V6.43448H11.3841C11.6402 6.43448 11.8654 6.28016 11.9579 6.04138C12.0503 5.80256 11.9878 5.5368 11.7985 5.36428Z" fill="#664EF9"/>
                                                        <path d="M10.4317 1.00195H8.06177L10.7846 3.47779V1.35483C10.7846 1.15995 10.6266 1.00195 10.4317 1.00195Z" fill="#664EF9"/>
                                                    </g>
                                                    <circle cx="20.5" cy="6" r="1.5" fill="#664EF9"/>
                                                    <defs>
                                                        <clipPath id="clip0_3074_176">
                                                            <rect width="12" height="12" fill="white"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <p>Бани и сауны

                                                    {
                                                        cityCurrentValue !== ''
                                                            ? ` в ${cityCurrentValue}е`
                                                            :   null
                                                    }
                                                </p>
                                            </div>
                                            <h1 className={classes.catalogTitle}>Аренда бань и саун
                                                {
                                                    cityCurrentValue !== ''
                                                        ? ` в ${cityCurrentValue}е`
                                                        : null
                                                }
                                            </h1>
                                            <p className={classes.recommendationsTitle}>Рекомендуем посмотреть</p>
                                            <div className={classes.catalogRecommendations}>
                                                {roomsOption.map((room)=>
                                                    <button key={room.id} onClick={()=> roomsHandler(room.value)}>{room.value}-комнатные</button>
                                                )}
                                                {districtOption.map((district)=>
                                                    <button key={district.id} onClick={()=> districtHandler(district.value)}>р. {district.value}</button>
                                                )}
                                            </div>
                                        </React.Fragment>
                                        : params.type === 'cars' ?
                                            <React.Fragment>
                                                <div className={classes.breadcrumbs}>
                                                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_3074_176)">
                                                            <path d="M11.7985 5.36428L6.41446 0.458394C6.17814 0.243027 5.82177 0.243051 5.58554 0.458371L0.201516 5.3643C0.0122119 5.5368 -0.0503192 5.80258 0.042165 6.04138C0.134673 6.28019 0.359907 6.43448 0.616008 6.43448H1.47593V11.3498C1.47593 11.5447 1.63394 11.7027 1.82883 11.7027H4.77993C4.97481 11.7027 5.13283 11.5447 5.13283 11.3498V8.36537H6.86724V11.3498C6.86724 11.5447 7.02526 11.7027 7.22014 11.7027H10.1711C10.366 11.7027 10.524 11.5447 10.524 11.3498V6.43448H11.3841C11.6402 6.43448 11.8654 6.28016 11.9579 6.04138C12.0503 5.80256 11.9878 5.5368 11.7985 5.36428Z" fill="#664EF9"/>
                                                            <path d="M10.4317 1.00195H8.06177L10.7846 3.47779V1.35483C10.7846 1.15995 10.6266 1.00195 10.4317 1.00195Z" fill="#664EF9"/>
                                                        </g>
                                                        <circle cx="20.5" cy="6" r="1.5" fill="#664EF9"/>
                                                        <defs>
                                                            <clipPath id="clip0_3074_176">
                                                                <rect width="12" height="12" fill="white"/>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <p>Авто на прокат

                                                        {
                                                            cityCurrentValue !== ''
                                                                ? ` в ${cityCurrentValue}е`
                                                                :   null
                                                        }
                                                    </p>
                                                </div>
                                                <h1 className={classes.catalogTitle}>Аренда авто
                                                    {
                                                        cityCurrentValue !== ''
                                                            ? ` в ${cityCurrentValue}е`
                                                            : null
                                                    }
                                                </h1>
                                                <p className={classes.recommendationsTitle}>Рекомендуем посмотреть</p>
                                                <div className={classes.catalogRecommendations}>
                                                    {roomsOption.map((room)=>
                                                        <button key={room.id} onClick={()=> roomsHandler(room.value)}>{room.value}-местные</button>
                                                    )}
                                                    {districtOption.map((district)=>
                                                        <button key={district.id} onClick={()=> districtHandler(district.value)}>р. {district.value}</button>
                                                    )}
                                                </div>
                                            </React.Fragment>
                                        :
                                            <React.Fragment>
                                                <div className={classes.breadcrumbs}>
                                                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_3074_176)">
                                                            <path d="M11.7985 5.36428L6.41446 0.458394C6.17814 0.243027 5.82177 0.243051 5.58554 0.458371L0.201516 5.3643C0.0122119 5.5368 -0.0503192 5.80258 0.042165 6.04138C0.134673 6.28019 0.359907 6.43448 0.616008 6.43448H1.47593V11.3498C1.47593 11.5447 1.63394 11.7027 1.82883 11.7027H4.77993C4.97481 11.7027 5.13283 11.5447 5.13283 11.3498V8.36537H6.86724V11.3498C6.86724 11.5447 7.02526 11.7027 7.22014 11.7027H10.1711C10.366 11.7027 10.524 11.5447 10.524 11.3498V6.43448H11.3841C11.6402 6.43448 11.8654 6.28016 11.9579 6.04138C12.0503 5.80256 11.9878 5.5368 11.7985 5.36428Z" fill="#664EF9"/>
                                                            <path d="M10.4317 1.00195H8.06177L10.7846 3.47779V1.35483C10.7846 1.15995 10.6266 1.00195 10.4317 1.00195Z" fill="#664EF9"/>
                                                        </g>
                                                        <circle cx="20.5" cy="6" r="1.5" fill="#664EF9"/>
                                                        <defs>
                                                            <clipPath id="clip0_3074_176">
                                                                <rect width="12" height="12" fill="white"/>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <p>Каталог

                                                        {
                                                            cityCurrentValue !== ''
                                                                ? ` в ${cityCurrentValue}е`
                                                                :   null
                                                        }
                                                    </p>
                                                </div>
                                                <h1 className={classes.catalogTitle}>Каталог
                                                    {
                                                        cityCurrentValue !== ''
                                                            ? ` в ${cityCurrentValue}е`
                                                            : null
                                                    }
                                                </h1>
                                            </React.Fragment>


                        }

                    </div>
                </section>
                <section className={classes.filterSection}>
                    <div className={classes.container}>
                        <div className={classes.filterBlock}>
                            <div className={classes.inputBlock}>
                                {
                                    params.type === 'cars'
                                        ?
                                            <p className={classes.text}>Посадочные места</p>
                                        :
                                            <p className={classes.text}>Комнаты</p>
                                }

                                <MySelect options={roomsOption} handler={(e)=>dispatch(setRooms(e))} value={roomsCurrentValue ? roomsCurrentValue : 'Выберите'}/>
                            </div>
                            <div className={classes.inputBlock}>
                                <p className={classes.text}>Цена за сутки (BYN)</p>
                                <div className={classes.costBlock}>
                                    <input type="number" min={0} max={1000} value={minCost} placeholder={'От'} onChange={(e)=> dispatch(setMinCost(e.target.value))}/>
                                    -
                                    <input type="number" min={0} max={1000} value={maxCost} placeholder={'До'} onChange={(e)=> dispatch(setMaxCost(e.target.value))}/>
                                </div>
                            </div>
                            <div className={classes.inputBlock}>
                                <button type={"button"} onClick={()=>setMoreOptions(!moreOptions)} className={classes.openMoreFilter}>
                                    Больше опций
                                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.91109 4.29814C5.91109 2.90551 4.937 1.73697 3.63453 1.4358V0.661897C3.63453 0.296309 3.33822 0 2.97264 0C2.60705 0 2.31074 0.296309 2.31074 0.661897V1.4358C1.00835 1.73689 0.0341797 2.90551 0.0341797 4.29814C0.0341797 5.69077 1.00827 6.85931 2.31074 7.16048V17.3381C2.31074 17.7037 2.60705 18 2.97264 18C3.33822 18 3.63453 17.7037 3.63453 17.3381V7.16048C4.937 6.85931 5.91109 5.69077 5.91109 4.29814ZM1.35805 4.29814C1.35805 3.40781 2.08238 2.68348 2.97271 2.68348C3.86303 2.68348 4.58737 3.40781 4.58737 4.29814C4.58737 5.18846 3.86303 5.9128 2.97271 5.9128C2.08238 5.9128 1.35805 5.18846 1.35805 4.29814Z" fill="#664EF9"/>
                                        <path d="M8.66188 8.89222V0.661897C8.66188 0.296309 8.36557 0 7.99998 0C7.63439 0 7.33808 0.296309 7.33808 0.661897V8.89222C6.03569 9.19331 5.06152 10.3619 5.06152 11.7546C5.06152 13.1472 6.03562 14.3157 7.33808 14.6169V17.3381C7.33808 17.7037 7.63439 18 7.99998 18C8.36557 18 8.66188 17.7037 8.66188 17.3381V14.6169C9.96427 14.3158 10.9384 13.1472 10.9384 11.7546C10.9384 10.3619 9.96434 9.19338 8.66188 8.89222ZM6.38539 11.7546C6.38539 10.8642 7.10973 10.1399 8.00005 10.1399C8.89038 10.1399 9.61471 10.8642 9.61471 11.7546C9.61471 12.6449 8.89038 13.3692 8.00005 13.3692C7.10973 13.3692 6.38539 12.6449 6.38539 11.7546Z" fill="#664EF9"/>
                                        <path d="M15.9658 7.20151C15.9658 5.80888 14.9917 4.64034 13.6892 4.33918V0.661897C13.6892 0.296309 13.3929 0 13.0273 0C12.6617 0 12.3654 0.296309 12.3654 0.661897V4.33918C11.063 4.64027 10.0889 5.80888 10.0889 7.20151C10.0889 8.59415 11.063 9.76269 12.3654 10.0639V17.3381C12.3654 17.7037 12.6617 18 13.0273 18C13.3929 18 13.6892 17.7037 13.6892 17.3381V10.0639C14.9917 9.76269 15.9658 8.59415 15.9658 7.20151ZM11.4127 7.20151C11.4127 6.31119 12.1371 5.58685 13.0274 5.58685C13.9177 5.58685 14.6421 6.31119 14.6421 7.20151C14.6421 8.09184 13.9177 8.81618 13.0274 8.81618C12.1371 8.81618 11.4127 8.09184 11.4127 7.20151Z" fill="#664EF9"/>
                                    </svg>
                                </button>
                            </div>
                            <div className={classes.buttonBlock}>
                                <button className={classes.resetBtn} onClick={reset}>Очистить</button>
                                <button type={"button"} onClick={()=>dispatch(mainFilter(params.type))} className={classes.filterButton}>
                                    Показать объекты
                                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 14.8574L7.57143 8.28599L0.999999 1.71456" stroke="#fff"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        {
                            moreOptions
                                ?   <MoreOptions />
                                :   null
                        }

                    </div>
                </section>
                <div className={classes.container}>
                    <section className={classes.visualFilter}>
                        <MySelect options={sortedOptions} style={classes.sortedSelect} value={sortedValue ? sortedValue: 'По умолчанию'} handler={(e)=>sortHandler(e) }>
                            {
                                sortedValue
                                    ?
                                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2831_2828)">
                                                <g opacity="0.6">
                                                    <path d="M7.32328 6.74139H11.4807C11.5823 6.74139 11.6647 6.65952 11.6647 6.55807V4.37278C11.6647 4.27148 11.5826 4.18945 11.4807 4.18945H7.32328C7.22199 4.18945 7.13965 4.27133 7.13965 4.37278V6.55822C7.13965 6.65952 7.22183 6.74139 7.32328 6.74139Z" fill="#664EF9"/>
                                                    <path d="M7.32328 3.07178H9.67264C9.77393 3.07178 9.85627 2.9896 9.85627 2.88815V0.703167C9.85627 0.601561 9.77424 0.519531 9.67264 0.519531H7.32328C7.22199 0.519531 7.13965 0.601406 7.13965 0.703167V2.88815C7.13965 2.9896 7.22183 3.07178 7.32328 3.07178Z" fill="#664EF9"/>
                                                    <path d="M7.32328 11.1105H13.0685C13.1696 11.1105 13.252 11.0287 13.252 10.9272V8.74223C13.252 8.64093 13.1699 8.55859 13.0685 8.55859H7.32328C7.22199 8.55859 7.13965 8.64078 7.13965 8.74223V10.9272C7.13965 11.0285 7.22183 11.1105 7.32328 11.1105Z" fill="#664EF9"/>
                                                    <path d="M14.6558 12.9297H7.32328C7.22199 12.9297 7.13965 13.0114 7.13965 13.1135V15.2981C7.13965 15.3994 7.22183 15.4818 7.32328 15.4818H14.656C14.7573 15.4818 14.8394 15.3996 14.8394 15.2981V13.1132C14.8393 13.0114 14.7574 12.9297 14.6558 12.9297Z" fill="#664EF9"/>
                                                    <path d="M6.08742 10.6908H4.84283V0.81072C4.84283 0.639047 4.70363 0.5 4.53211 0.5H2.02615C1.85464 0.5 1.71543 0.639047 1.71543 0.81072V10.6908H0.471C0.351218 10.6908 0.24231 10.7597 0.190731 10.8676C0.138996 10.9755 0.153755 11.1033 0.228639 11.1965L3.03692 15.3841C3.09596 15.4577 3.18498 15.5 3.27913 15.5C3.37328 15.5 3.46215 15.4577 3.52118 15.3841L6.32947 11.1965C6.40435 11.1032 6.41927 10.9755 6.36753 10.8676C6.31595 10.7598 6.2072 10.6908 6.08742 10.6908Z" fill="#664EF9"/>
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2831_2828">
                                                    <rect width="15" height="15" fill="white" transform="translate(0 0.5)"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    :
                                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2831_2828)">
                                            <g opacity="0.6">
                                                <path d="M7.32328 6.74139H11.4807C11.5823 6.74139 11.6647 6.65952 11.6647 6.55807V4.37278C11.6647 4.27148 11.5826 4.18945 11.4807 4.18945H7.32328C7.22199 4.18945 7.13965 4.27133 7.13965 4.37278V6.55822C7.13965 6.65952 7.22183 6.74139 7.32328 6.74139Z" fill="#7A7F86"/>
                                                <path d="M7.32328 3.07178H9.67264C9.77393 3.07178 9.85627 2.9896 9.85627 2.88815V0.703167C9.85627 0.601561 9.77424 0.519531 9.67264 0.519531H7.32328C7.22199 0.519531 7.13965 0.601406 7.13965 0.703167V2.88815C7.13965 2.9896 7.22183 3.07178 7.32328 3.07178Z" fill="#7A7F86"/>
                                                <path d="M7.32328 11.1105H13.0685C13.1696 11.1105 13.252 11.0287 13.252 10.9272V8.74223C13.252 8.64093 13.1699 8.55859 13.0685 8.55859H7.32328C7.22199 8.55859 7.13965 8.64078 7.13965 8.74223V10.9272C7.13965 11.0285 7.22183 11.1105 7.32328 11.1105Z" fill="#7A7F86"/>
                                                <path d="M14.6558 12.9297H7.32328C7.22199 12.9297 7.13965 13.0114 7.13965 13.1135V15.2981C7.13965 15.3994 7.22183 15.4818 7.32328 15.4818H14.656C14.7573 15.4818 14.8394 15.3996 14.8394 15.2981V13.1132C14.8393 13.0114 14.7574 12.9297 14.6558 12.9297Z" fill="#7A7F86"/>
                                                <path d="M6.08742 10.6908H4.84283V0.81072C4.84283 0.639047 4.70363 0.5 4.53211 0.5H2.02615C1.85464 0.5 1.71543 0.639047 1.71543 0.81072V10.6908H0.471C0.351218 10.6908 0.24231 10.7597 0.190731 10.8676C0.138996 10.9755 0.153755 11.1033 0.228639 11.1965L3.03692 15.3841C3.09596 15.4577 3.18498 15.5 3.27913 15.5C3.37328 15.5 3.46215 15.4577 3.52118 15.3841L6.32947 11.1965C6.40435 11.1032 6.41927 10.9755 6.36753 10.8676C6.31595 10.7598 6.2072 10.6908 6.08742 10.6908Z" fill="#7A7F86"/>
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2831_2828">
                                                <rect width="15" height="15" fill="white" transform="translate(0 0.5)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                            }

                        </MySelect>
                        <div className={classes.btnsBlock}>
                                {
                                    limit === 6
                                        ?
                                            <div className={classes.setLimitBtns}>
                                                <button className={classes.btn} onClick={()=>limitHandler(3)}>
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect y="0.5" width="14.5036" height="3.22302" rx="1" fill="#7A7F86"/>
                                                        <rect y="11.2773" width="14.5036" height="3.22302" rx="1" fill="#7A7F86"/>
                                                        <rect y="5.88867" width="14.5036" height="3.22302" rx="1" fill="#7A7F86"/>
                                                    </svg>
                                                    Список
                                                </button>
                                                <button className={classes.btnActive}>
                                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.00390625" width="5.44444" height="5.44444" rx="1" fill="#664EF9"/>
                                                        <rect x="0.00390625" y="8.55469" width="5.44444" height="5.44444" rx="1" fill="#664EF9"/>
                                                        <rect x="8.55957" width="5.44444" height="5.44444" rx="1" fill="#664EF9"/>
                                                        <rect x="8.55957" y="8.55469" width="5.44444" height="5.44444" rx="1" fill="#664EF9"/>
                                                    </svg>
                                                    Плитки
                                                </button>
                                            </div>
                                        :
                                            <div className={classes.setLimitBtns}>
                                                <button className={classes.btnActive} >
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect y="0.5" width="14.5036" height="3.22302" rx="1" fill="#664EF9"/>
                                                        <rect y="11.2773" width="14.5036" height="3.22302" rx="1" fill="#664EF9"/>
                                                        <rect y="5.88867" width="14.5036" height="3.22302" rx="1" fill="#664EF9"/>
                                                    </svg>
                                                    Список
                                                </button>
                                                <button className={classes.btn} onClick={()=>limitHandler(6)}>
                                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.00390625" width="5.44444" height="5.44444" rx="1" fill="#7A7F86"/>
                                                        <rect x="0.00390625" y="8.55469" width="5.44444" height="5.44444" rx="1" fill="#7A7F86"/>
                                                        <rect x="8.55957" width="5.44444" height="5.44444" rx="1" fill="#7A7F86"/>
                                                        <rect x="8.55957" y="8.55469" width="5.44444" height="5.44444" rx="1" fill="#7A7F86"/>
                                                    </svg>
                                                    Плитки
                                                </button>
                                            </div>
                                }
                                {/* <Link to={'/404'} className={classes.map}>
                                    <svg width="14" height="11" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.43806 1.74419C6.7055 0.627907 5.4962 0 4.13573 0C2.7869 0 1.5776 0.627907 0.821781 1.74419C0.0659671 2.83721 -0.108452 4.23256 0.356665 5.45349C0.484572 5.77907 0.682246 6.11628 0.93806 6.4186L3.87992 9.88372C3.94969 9.95349 4.01946 10 4.12411 10C4.22876 10 4.29853 9.95349 4.36829 9.88372L7.32178 6.4186C7.5776 6.11628 7.7869 5.7907 7.90318 5.45349C8.36829 4.23256 8.19387 2.83721 7.43806 1.74419ZM4.13573 5.86047C3.13573 5.86047 2.31015 5.03488 2.31015 4.03488C2.31015 3.03488 3.13573 2.2093 4.13573 2.2093C5.13574 2.2093 5.96132 3.03488 5.96132 4.03488C5.96132 5.03488 5.14736 5.86047 4.13573 5.86047Z" fill="#664EF9"/>
                                    </svg>
                                    Показать на карте
                                </Link> */}
                        </div>
                    </section>
                    <ProductsList />
                    <div className={classes.catalogPagination}>
                        <PaginationList posts={sortedProducts} currentPage={currentPage} handler={(e)=> dispatch(setCurrentPage(e))}/>
                        <SocialButtonsBlock style={classes.socialsButtons}/>
                    </div>
                </div>
                {/* <section className={classes.advantagesSection}>
                    <div className={classes.textBlock}>
                        {
                            params.type === 'flats' ?
                                <React.Fragment>
                                    <h2>Показать найденные квартиры на карте</h2>
                                    <p>Ищите новостройки рядом с работой,
                                        парком или родственниками</p>
                                </React.Fragment>
                                : params.type === 'cottages' ?
                                    <React.Fragment>
                                        <h2>Показать найденные котеджи и усадьбы на карте</h2>
                                        <p>Ищите котеджи и усадьбы рядом с работой,
                                            парком или родственниками</p>
                                    </React.Fragment>
                                    : params.type === 'baths' ?
                                        <React.Fragment>
                                            <h2>Показать найденные бани и сауны на карте</h2>
                                            <p>Ищите бани и сауны рядом с работой,
                                                парком или родственниками</p>
                                        </React.Fragment>
                                    : params.type === 'cars' ?
                                            <React.Fragment>
                                                <h2>Показать найденные машины на карте</h2>
                                                <p>Ищите машины рядом с работой,
                                                    парком или родственниками</p>
                                            </React.Fragment>
                                        :
                                            <React.Fragment>
                                                <h2>Показать найденные квартиры на карте</h2>
                                                <p>Ищите новостройки рядом с работой,
                                                    парком или родственниками</p>
                                            </React.Fragment>
                        }

                        <Link to={'/404'}>
                            <svg width="12" height="15" viewBox="0 0 9 10" fill="#FFD54F" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.43806 1.74419C6.7055 0.627907 5.4962 0 4.13573 0C2.7869 0 1.5776 0.627907 0.821781 1.74419C0.0659671 2.83721 -0.108452 4.23256 0.356665 5.45349C0.484572 5.77907 0.682246 6.11628 0.93806 6.4186L3.87992 9.88372C3.94969 9.95349 4.01946 10 4.12411 10C4.22876 10 4.29853 9.95349 4.36829 9.88372L7.32178 6.4186C7.5776 6.11628 7.7869 5.7907 7.90318 5.45349C8.36829 4.23256 8.19387 2.83721 7.43806 1.74419ZM4.13573 5.86047C3.13573 5.86047 2.31015 5.03488 2.31015 4.03488C2.31015 3.03488 3.13573 2.2093 4.13573 2.2093C5.13574 2.2093 5.96132 3.03488 5.96132 4.03488C5.96132 5.03488 5.14736 5.86047 4.13573 5.86047Z" fill="#FFD54F"/>
                            </svg>
                            Открыть карту
                        </Link>
                    </div>
                </section> */}
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default Catalog;
