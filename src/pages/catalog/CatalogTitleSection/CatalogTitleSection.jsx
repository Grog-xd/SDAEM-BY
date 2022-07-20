import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import {mainFilter, setDistrict, setRooms} from '../../../redux/mainPage';
import SvgHomeWithDot from '../../../components/svg/SvgHomeWithDot';

import classes from './CatalogTitleSection.module.scss';

const CatalogTitleSection = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const {districtOption, roomsOption, cityCurrentValue} = useSelector(state=> state.main)

    function roomsHandler(rooms){
        dispatch(setRooms(rooms))
        dispatch(mainFilter(params.type))
    }
    function districtHandler(district){
        dispatch(setDistrict(district))
        dispatch(mainFilter(params.type))
    }

    return (
        <section className={classes.titleSection}>
            <div className={classes.container}>
                {
                    params.type === 'flats' ?
                        <React.Fragment>
                            <div className={classes.breadcrumbs}>
                                <SvgHomeWithDot width={'22'} height={'12'} color={'#664EF9'}/>
                                <p>Квартиры
                                    {
                                        cityCurrentValue !== ''
                                        && ` в ${cityCurrentValue}е`
                                    }
                                </p>
                            </div>
                            <h1 className={classes.catalogTitle}>Аренда квартир на сутки
                                {
                                    cityCurrentValue !== ''
                                    && ` в ${cityCurrentValue}е`
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
                                    <SvgHomeWithDot width={'22'} height={'12'} color={'#664EF9'}/>
                                    <p>Коттеджи и усадьбы

                                        {
                                            cityCurrentValue !== ''
                                            && ` в ${cityCurrentValue}е`
                                        }
                                    </p>
                                </div>
                                <h1 className={classes.catalogTitle}>Аренда коттеджей и усадьб
                                    {
                                        cityCurrentValue !== ''
                                        && ` в ${cityCurrentValue}е`
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
                                        <SvgHomeWithDot width={'22'} height={'12'} color={'#664EF9'}/>
                                        <p>Бани и сауны

                                            {
                                                cityCurrentValue !== ''
                                                && ` в ${cityCurrentValue}е`
                                            }
                                        </p>
                                    </div>
                                    <h1 className={classes.catalogTitle}>Аренда бань и саун
                                        {
                                            cityCurrentValue !== ''
                                            && ` в ${cityCurrentValue}е`
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
                                            <SvgHomeWithDot width={'22'} height={'12'} color={'#664EF9'}/>
                                            <p>Авто на прокат

                                                {
                                                    cityCurrentValue !== ''
                                                    && ` в ${cityCurrentValue}е`
                                                }
                                            </p>
                                        </div>
                                        <h1 className={classes.catalogTitle}>Аренда авто
                                            {
                                                cityCurrentValue !== ''
                                                && ` в ${cityCurrentValue}е`
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
                                            <SvgHomeWithDot width={'22'} height={'12'} color={'#664EF9'}/>
                                            <p>Каталог

                                                {
                                                    cityCurrentValue !== ''
                                                    && ` в ${cityCurrentValue}е`
                                                }
                                            </p>
                                        </div>
                                        <h1 className={classes.catalogTitle}>Каталог
                                            {
                                                cityCurrentValue !== ''
                                                && ` в ${cityCurrentValue}е`
                                            }
                                        </h1>
                                    </React.Fragment>
                }
            </div>
        </section>
    );
};

export default CatalogTitleSection;
