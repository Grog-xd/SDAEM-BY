import {FC, useState, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {setCity} from '../../../redux/mainPage';
import SvgArrowRight from '../../svg/SvgArrowRight.tsx';
import SvgArrowDown from '../../svg/SvgArrowDown.tsx';
import yellowPoints from '../../../assets/img/yellow-points.png';

import {mainRedux} from '../../../types/types';

import classes from './MainCardsSection.module.scss';

const MainCardsSection:FC = () => {
    const [moreLinks, setMoreLinks] = useState<boolean>(false)
    const {cityOption} = useSelector((state:mainRedux)=> state.main)
    const products = useSelector((state:mainRedux)=> state.main.products[0])
    const dispatch = useDispatch()

    return (
        <section className={classes.filterCardsSection}>
            <img src={yellowPoints} alt='yellow points'/>
            <div className={classes.cardsBlock}>
                <div className={classes.card}>
                    <strong>СНЯТЬ КВАРТИРУ</strong>
                    <p><b>Квартиры на сутки</b></p>
                    <div className={classes.listCity}>
                        {cityOption.map(city =>
                            <Link to={'catalog/flats'} onClick={()=> dispatch(setCity(city.value))} key={city.id}>{city.value}</Link>,
                        )}
                    </div>
                </div>
                <div className={classes.card}>
                    <strong>СНЯТЬ КОТТЕДЖ НА ПРАЗДНИК</strong>
                    <p><b>Коттеджи и усадьбы</b></p>
                    <Link className={classes.cardButton} to={'catalog/cottages'}>
                        <SvgArrowRight width={'9'} height={'16'} color={'white'}/>
                    </Link>
                </div>
                <div className={classes.card}>
                    <strong>ПОПАРИТЬСЯ В БАНЕ С ДРУЗЬЯМИ</strong>
                    <p><b>Бани и сауны</b></p>
                    <Link className={classes.cardButton} to={'catalog/baths'}>
                        <SvgArrowRight width={'9'} height={'16'} color={'white'}/>
                    </Link>
                </div>
                <div className={classes.card}>
                    <strong>ЕСЛИ СРОЧНО НУЖНА МАШИНА</strong>
                    <p><b>Авто на прокат</b></p>
                    <Link className={classes.cardButton} to={'catalog/cars'}>
                        <SvgArrowRight width={'9'} height={'16'} color={'white'}/>
                    </Link>
                </div>
            </div>
            <div className={classes.linksBlock}>
                <div className={classes.linkBlock}>
                    <p><b>Квартиры</b></p>
                    <ul>
                        {cityOption.map(city =>
                            <li key={city.id}>
                                <Link to={'catalog/flats'} onClick={()=> dispatch(setCity(city.value))}>Квартиры в {city.value}е</Link>
                                <p>{products.flats?.length}</p>
                            </li>,
                        )}
                    </ul>
                </div>
                <div className={classes.linkBlock}>
                    <p><b>Коттеджи и усадьбы</b></p>
                    <ul>
                        {cityOption.map(city =>
                            <li key={city.id}>
                                <Link to={'catalog/cottages'} onClick={()=> dispatch(setCity(city.value))}>Коттеджи и усадьбы в {city.value}е</Link>
                                <p>{products.cottages?.length}</p>
                            </li>,
                        )}
                    </ul>
                </div>
                {
                    moreLinks
                        ?
                        <Fragment>
                            <div className={classes.linkBlock}>
                                <p><b>Бани и сауны</b></p>
                                <ul>
                                    {cityOption.map(city =>
                                        <li key={city.id}>
                                            <Link to={'catalog/baths'} onClick={()=> dispatch(setCity(city.value))}>Бани и сауны в {city.value}е</Link>
                                            <p>{products.baths?.length}</p>
                                        </li>,
                                    )}
                                </ul>
                            </div>
                            <div className={classes.linkBlock}>
                                <p><b>Авто на прокат</b></p>
                                <ul>
                                    {cityOption.map(city =>
                                        <li key={city.id}>
                                            <Link to={'catalog/cars'} onClick={()=> dispatch(setCity(city.value))}>Авто на прокат в {city.value}е</Link>
                                            <p>{products.cars?.length}</p>
                                        </li>,
                                    )}
                                </ul>
                            </div>
                        </Fragment>
                        :
                        <button onClick={()=> setMoreLinks(true)} className={classes.moreLinks}>
                            Еще
                            <SvgArrowDown width={'10'} height={'5'} color={'#FEB700'}/>
                        </button>
                }
                <div className={classes.linkBlock}>
                    <p><b>Популярные направления</b></p>
                    <ul>
                        <li>
                            <Link to={'catalog/cottages'}>Коттеджи и усадьбы на о. Брасласких</Link>
                        </li>
                        <li>
                            <Link to={'catalog/cottages'}>Коттеджи и усадьбы (жилье) на Нарочи</Link>
                        </li>
                        <li>
                            <Link to={'catalog/cottages'}>Коттеджи и усадьбы (жилье) у воды,
                                на берегу, на озере</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MainCardsSection;
