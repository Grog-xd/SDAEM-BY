import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Lazy} from 'swiper';

import classes from './ProductSwiper.module.scss'


const ProductSwiper = ({imgArr}) => {
    return (
        <Swiper
            className={classes.slider}
            simulateTouch={false}
            modules={[Navigation, Pagination, Lazy]}
            lazy
            navigation
            pagination={{clickable:true}}
        >
            {imgArr.map(img=>
                <SwiperSlide id={img.id} key={img.id}>
                    <img className={'swiper-lazy'} data-src={img.img} alt='Изображение карточки'/>
                </SwiperSlide>
            )}
        </Swiper>
    );
};

export default ProductSwiper;
