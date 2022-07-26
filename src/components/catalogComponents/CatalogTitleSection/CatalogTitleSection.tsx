import {FC, useState, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import {mainFilter, setDistrict, setRooms} from '../../../redux/mainPage';
import SvgHomeWithDot from '../../svg/SvgHomeWithDot.tsx';
import RecommendationBtn from '../RecommendationBtn/RecommendationBtn.tsx';

import {mainRedux} from '../../../types/types';

import classes from './CatalogTitleSection.module.scss';

const CatalogTitleSection:FC = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const {districtOption, roomsOption, cityCurrentValue} = useSelector((state:mainRedux)=> state.main)
    const [recommendationActive, setRecommendationActive] = useState<boolean>(false)

    function roomsHandler(rooms:string | number){
        dispatch(setRooms(rooms))
        dispatch(mainFilter(params.type))
        setRecommendationActive(!recommendationActive)
    }
    function districtHandler(district:string | number){
        dispatch(setDistrict(district))
        dispatch(mainFilter(params.type))
        setRecommendationActive(!recommendationActive)
    }

    return (
        <section className={classes.titleSection}>
            <div className={classes.container}>
                {
                    params.type === 'flats' ?
                        <Fragment>
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
                                    <RecommendationBtn key={room.id} recommendationActive={recommendationActive} handler={(e)=> roomsHandler(e)} value={room.value}>{room.value}-комнатные</RecommendationBtn>,
                                )}
                                {districtOption.map((district)=>
                                    <RecommendationBtn key={district.id} recommendationActive={recommendationActive} handler={(e)=> districtHandler(e)} value={district.value}>р. {district.value}</RecommendationBtn>,
                                )}
                            </div>
                        </Fragment>


                        : params.type === 'cottages' ?
                            <Fragment>
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
                                        <RecommendationBtn key={room.id} recommendationActive={recommendationActive} handler={(e)=> roomsHandler(e)} value={room.value}>{room.value}-комнатные</RecommendationBtn>,
                                    )}
                                    {districtOption.map((district)=>
                                        <RecommendationBtn key={district.id} recommendationActive={recommendationActive} handler={(e)=> districtHandler(e)} value={district.value}>р. {district.value}</RecommendationBtn>,
                                    )}
                                </div>
                            </Fragment>
                            : params.type === 'baths' ?
                                <Fragment>
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
                                            <RecommendationBtn key={room.id} recommendationActive={recommendationActive} handler={(e)=> roomsHandler(e)} value={room.value}>{room.value}-комнатные</RecommendationBtn>,
                                        )}
                                        {districtOption.map((district)=>
                                            <RecommendationBtn key={district.id} recommendationActive={recommendationActive} handler={(e)=> districtHandler(e)} value={district.value}>р. {district.value}</RecommendationBtn>,
                                        )}
                                    </div>
                                </Fragment>
                                : params.type === 'cars' ?
                                    <Fragment>
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
                                                <RecommendationBtn key={room.id} recommendationActive={recommendationActive} handler={(e)=> roomsHandler(e)} value={room.value}>{room.value}-местные</RecommendationBtn>,
                                            )}
                                            {districtOption.map((district)=>
                                                <RecommendationBtn key={district.id} recommendationActive={recommendationActive} handler={(e)=> districtHandler(e)} value={district.value}>р. {district.value}</RecommendationBtn>,
                                            )}
                                        </div>
                                    </Fragment>
                                    :
                                    <Fragment>
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
                                    </Fragment>
                }
            </div>
        </section>
    );
};

export default CatalogTitleSection;
