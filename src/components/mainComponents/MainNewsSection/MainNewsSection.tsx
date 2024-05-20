import {FC, useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {fetchNews, getNews} from '../../../redux/newsPage';
import {getPostUrl} from '../../../server';
import SvgArrowRight from '../../svg/SvgArrowRight.tsx';
import yellowPoints from '../../../assets/img/yellow-points.png';
import flatImg from '../../../assets/img/flat-img.png';

import {newProps, newsRedux} from '../../../types/types';

import classes from './MainNewsSection.module.scss';

const MainNewsSection:FC = () => {
    const dispatch = useDispatch()
    const news = useSelector((state:newsRedux)=> state.news.posts)
    const [newsArr, setNewsArr] = useState<newProps[]>([])
    const cityMainName = 'Минск'

    function newsFilter(){
        let res = []
        for (let i = 0; i < news?.length; i++) {
            if(res?.length === 5){
                break
            } else{
                res.push(news[i])
            }
        }
        setNewsArr(res)
    }

    useEffect(()=>{
        axios.get(`api/${getPostUrl}`)
            .then(response => response.data.posts)
            .then(response => dispatch(fetchNews(response)))
            .then(()=>dispatch(getNews('')))
            .catch(e => console.log(e.message))
    }, [])

    useEffect(()=>{
        newsFilter()
    }, [news])


    return (
        <section data-testid={'main-news-section'} className={classes.newsSection}>
            <div className={classes.textBlock}>
                <div className={classes.header}>
                    <strong>ЧТО ТАКОЕ SDAEM.BY</strong>
                    <p>Квартира на сутки в {cityMainName}е</p>
                </div>
                <div className={classes.body}>
                    <img className={classes.yellowPoints} src={yellowPoints} alt='Желтые точки'/>
                    <img className={classes.bodyImg} src={flatImg} alt='Изображение квартиры'/>
                    <div className={classes.bodyText}>
                        <p>
                            <b>Нужна квартира на сутки в {cityMainName}е?</b><br/>
                            На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог насчитывает <b>более 500 квартир.</b> Благодаря удобной навигации вы быстро найдете подходящий вариант.
                        </p>
                        <p>
                            В каталоге представлены комфортабельные однокомнатные квартиры на сутки и квартиры с большим количеством комнат в разных районах города, с различной степенью удобства от дешевых до VIP
                            с джакузи.
                        </p>
                    </div>
                </div>
                <p className={classes.footer}>Чтобы снять квартиру на сутки в {cityMainName}е, вам достаточно определиться с выбором и связаться с владельцем для уточнения условий аренды и заключить договор. Заметим, на сайте представлены исключительно квартиры на сутки без посредников, что избавляет посетителей от необходимости взаимодействовать с агентствами, тратя свое время и деньги. Также пользователи сайта могут совершенно бесплатно размещать объявления о готовности сдать квартиру на сутки.    </p>
            </div>
            <div className={classes.newsBlock}>
                <p className={classes.title}>Новости</p>
                {
                    newsArr.map((post) =>
                        <div data-testid={'news-item'} key={post.id} className={classes.post}>
                            <Link to={`news/${post.id}`}>{post.title}</Link>
                            <p>{post.date}</p>
                        </div>,
                    )
                }
                <Link className={classes.toNewsLink} to={'/news'}>
                    Посмотреть все
                    <SvgArrowRight width={'9'} height={'16'} color={'#664EF9'}/>
                </Link>
            </div>
        </section>
    );
};

export default MainNewsSection;
