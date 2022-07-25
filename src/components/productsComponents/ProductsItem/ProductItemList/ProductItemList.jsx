import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import ProfileCard from '../../../profileCard/ProfileCard';
import SvgLocation from '../../../svg/SvgLocation';
import SvgUser from '../../../svg/SvgUser';
import SvgMetro from '../../../svg/SvgMetro';
import SvgPhone from '../../../svg/SvgPhone';
import SvgHeartActive from '../../../svg/SvgHeartActive';
import SvgHeart from '../../../svg/SvgHeart';
import ProductSwiper from '../ProductSwiper/ProductSwiper';

import classes from './ProductItemList.module.scss';


const ProductItemList = ({params, likeActive, product, handler}) => {
    const [profileActive, setProfileActive] = useState(false)

    return (
        <div className={classes.productItemList}>
            <div className={classes.imgBlock}>
                {
                    Array.isArray(product.img)
                        ?
                        <ProductSwiper imgArr={product.img}/>
                        :
                        <img className={classes.img} src={product.img} alt='Изображение карточки'/>
                }
                <div className={classes.typeProduct}>{product.type}</div>
            </div>
            <div className={classes.textBlock}>
                <div className={classes.cost}>
                    <strong>{product.cost} BYN</strong>
                    <p>за сутки</p>
                </div>
                <p className={classes.title}>{product.rooms}{product.title} на {product.district}е</p>
                <p className={classes.location}>
                    <SvgLocation width={'16'} height={'20'} color={'#664EF9'}/>
                    {product.city}, {product.location}
                </p>
                <div className={classes.infoSection}>
                    <div className={classes.infoBlock}>
                        <SvgUser width={'20'} height={'20'} color={'#686868'}/>
                        {product.people}
                    </div>
                    <div className={classes.infoBlock}>
                        {
                            params.type === 'cars'
                                ? `${product.rooms} мест.`
                                : `${product.rooms} комн.`
                        }
                    </div>
                    <div className={classes.infoBlock}>
                        <SvgMetro width={'20'} height={'13'} color={'#664EF9'}/>
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
                        <button className={classes.contacts} onClick={() => setProfileActive(!profileActive)}>
                            <SvgPhone width={'16'} height={'16'} color={'#664EF9'}/>
                            Контакты
                        </button>
                        <button className={classes.heartButton} onClick={handler}>
                            {
                                likeActive
                                    ?
                                    <React.Fragment>
                                        Добавлено
                                        <SvgHeartActive width={'15'} height={'13'} color={'red'}/>
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        В закладки
                                        <SvgHeart width={'15'} height={'13'} color={'#EB5757'}/>
                                    </React.Fragment>
                            }
                        </button>
                    </div>
                    <Link to={`/catalog/${product.obj}/${product.id}`}>Подробнее</Link>
                </div>
                {profileActive
                    &&
                    <ProfileCard style={classes.profile} profile={product.profile}/>
                }
            </div>
        </div>
    );
};

export default ProductItemList;