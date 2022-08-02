import {FC} from 'react';
import {Link} from 'react-router-dom';

import SvgLocation from '../../svg/SvgLocation.tsx';
import SvgAdvantagesCard1 from '../../svg/SvgAdvantagesCard1.tsx';
import SvgAdvantagesCard2 from '../../svg/SvgAdvantagesCard2.tsx';
import SvgArrowRight from '../../svg/SvgArrowRight.tsx';
import whitePoints from '../../../assets/img/white-points.png';
import yellowPoints from '../../../assets/img/yellow-points.png';
import bgPrimaryCard from '../../../assets/img/primaryLastCard.svg';

import classes from './MainAdvantagesSection.module.scss';

const MainAdvantagesSection:FC = () => {
    return (
        <section className={classes.advantagesSection}>
            <img className={classes.whitePoints} src={whitePoints} alt='Белые точки'/>
            <img className={classes.yellowPoints} src={yellowPoints} alt='Желтые точки'/>
            <div className={classes.textBlock}>
                <h2>Поиск квартир на карте</h2>
                <p>Ищите квартиры на сутки в центре города, возле парка или в живописном районе</p>
                <Link to={'/404'}>
                    <SvgLocation width={'12'} height={'15'} color={'#FFD54F'}/>
                    Открыть карту
                </Link>
            </div>
            <div className={classes.advantagesBlocks}>
                <div className={classes.card}>
                    <div className={classes.titleCard}>
                        <SvgAdvantagesCard1 width={'190'} height={'139'}/>
                        <p><b>Начните привлекать
                            клиентов бесплатно!</b></p>
                    </div>
                    <p className={classes.body}>Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором возможно <b>бесплатно создавать и публиковать объявления</b> на сайте. </p>
                    <Link to={'/404'}>+  Разместить объявление</Link>
                </div>
                <div className={classes.card}>
                    <div className={classes.titleCard}>
                        <SvgAdvantagesCard2 width={'139'} height={'139'}/>
                        <p><b>Поднимайте
                            объявления</b></p>
                    </div>
                    <p className={classes.body}>Вы в любое время можете <b>поднимать</b> объявления <b>вверх первой страницы</b> каталога,
                        они разместятся сразу после платных объявлений до тех пор, пока другой пользователь не повторит процедуру.</p>
                    <Link to={'/404'}>
                        Узнать стоимость услуги
                        <SvgArrowRight width={'9'} height={'16'} color={'#242424'}/>
                    </Link>
                </div>
                <div className={classes.primaryCard}>
                    <img src={bgPrimaryCard} alt='Задний фон'/>
                    <p className={classes.titlePrimaryCard}>Приоритет Gold </p>
                    <p className={classes.bodyPrimaryCard}>Приоритетное размещение <b>Gold</b> позволяет <b>закрепить ваше объявление</b> в верхней части каталога!</p>
                    <p className={classes.body}>Gold объявления <b>перемещаются
                        каждые 5 мин</b> на 1 позицию, что делает размещение одинаковым для всех.</p>
                    <Link to={'/404'}>
                        Еще о тарифе Gold
                        <SvgArrowRight width={'9'} height={'16'} color={'white'}/>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MainAdvantagesSection;
