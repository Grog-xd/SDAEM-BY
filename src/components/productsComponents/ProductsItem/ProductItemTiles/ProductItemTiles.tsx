import {FC, useState} from 'react';
import {Link} from 'react-router-dom';

import ProfileCard from '../../../profileCard/ProfileCard.tsx';
import SvgUser from '../../../svg/SvgUser.tsx';
import SvgLocation from '../../../svg/SvgLocation.tsx';
import SvgMetro from '../../../svg/SvgMetro.tsx';
import SvgPoint from '../../../svg/SvgPoint.tsx';
import SvgHeartActive from '../../../svg/SvgHeartActive.tsx';
import SvgHeart from '../../../svg/SvgHeart.tsx';
import SvgPhone from '../../../svg/SvgPhone.tsx';
import ProductSwiper from '../ProductSwiper/ProductSwiper.tsx';

import {ProductItemProps} from '../../../../types/types';

import classes from './ProductItemTiles.module.scss'



const ProductItemTiles:FC <ProductItemProps>= ({product, params, likeActive, handler}) => {
    const [profileActive, setProfileActive] = useState<boolean>(false)
    return (
        <div className={classes.productItem}>
            <div className={classes.typeProduct}>{product.type}</div>
            {
                Array.isArray(product.img)
                    ?
                    <ProductSwiper imgArr={product.img}/>
                    :
                    <img className={classes.img} src={product.img} alt='Изображение карточки'/>
            }


            <div className={classes.textBlock}>
                <div className={classes.infoSection}>
                    <div className={classes.cost}>
                        <strong>{product.cost} BYN</strong>
                        <p>за сутки</p>
                    </div>
                    <div className={classes.infoBlock}>
                        <SvgUser width={'15'} height={'15'} color={'#686868'}/>
                        {product.people}
                    </div>
                    <div className={classes.infoBlock}>
                        {
                            params.type === 'cars'
                                ? `${product.rooms} мест.`
                                : `${product.rooms} комн.`
                        }
                    </div>
                    {
                        product.size
                        &&
                        <div className={classes.infoBlock}>
                            {product.size}
                        </div>
                    }
                </div>
                <div className={classes.location}>
                    <SvgLocation width={'12'} height={'15'} color={'#BDBDBD'}/>
                    <p>{product.city}, {product.location}</p>
                </div>
                <div className={classes.location}>
                    <SvgMetro width={'20'} height={'13'} color={'#BDBDBD'}/>
                    <p>{product.metro}</p>
                    <SvgPoint width={'10'} height={'10'} color={'#BDBDBD'}/>
                    <p>{product.district}</p>
                </div>
                <p className={classes.bodyText}>{product.body}</p>
                <div className={classes.buttonSection}>
                    {
                        params.type
                        &&
                        <button className={classes.heartButton} onClick={handler}>
                            {
                                likeActive
                                    ?
                                    <SvgHeartActive width={'15'} height={'13'} color={'red'}/>
                                    :
                                    <SvgHeart width={'15'} height={'13'} color={'#EB5757'}/>
                            }
                        </button>
                    }
                    <button className={classes.contacts} onClick={() => setProfileActive(!profileActive)}>
                        <SvgPhone width={'16'} height={'16'} color={'#664EF9'}/>
                        Контакты
                    </button>
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

export default ProductItemTiles;
