import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import {setCity} from "../../../redux/mainPage";
import MySelect from "../../../components/UI/mySelect/mySelect";
import ProductsItem from "../../../components/productsComponents/ProductsItem/ProductsItem";
import SvgMetro from "../../../components/svg/SvgMetro";
import SvgArrowRight from "../../../components/svg/SvgArrowRight";
import './MainSlider.scss'
import classes from "./MainSliderSection.module.scss";

const MainSliderSection = () => {
    const dispatch = useDispatch()
    const {metroOption, districtOption} = useSelector(state=> state.main)
    const products = useSelector(state=> state.main.products[0])

    const [cityValue, setCityValue] = useState([])

    const [metroCurrentValue, setMetroCurrentValue] = useState('')
    const [districtCurrentValue, setDistrictCurrentValue] = useState('')

    const cityMainName = 'Минск'

    function flatsFilter(){
        let res = []
        products.flats.forEach((flat)=>{

            if(flat.city===cityMainName  && flat.metro.includes(metroCurrentValue)  && flat.district.includes(districtCurrentValue)){
                res.push(flat)
            }
        })
        setCityValue(res)
    }



    useEffect(()=>{
        flatsFilter()
    }, [metroCurrentValue, districtCurrentValue])



    return (
        <section className={classes.sliderSection}>
            <div className={classes.sliderTitle}>
                <div className={classes.textBlock}>
                    <strong>КВАРТИРЫ НА СУТКИ</strong>
                    <p><b>Аренда квартир в {cityMainName}е</b></p>
                </div>
                <div className={classes.sliderFilter}>
                    <MySelect options={metroOption} handler={e=>setMetroCurrentValue(e)} style={classes.sliderSelect} value={metroCurrentValue ? metroCurrentValue: 'Метро'}>
                        <SvgMetro width={'20'} height={'13'} color={'#BDBDBD'}/>
                    </MySelect>
                    <MySelect options={districtOption} handler={e=>setDistrictCurrentValue(e)} style={classes.sliderSelect} value={districtCurrentValue ? districtCurrentValue: 'Район'} />
                </div>
            </div>
            <div className={classes.sliderBgItem}></div>
            {
                cityValue.length
                    ?
                    <Swiper
                        id={'main'}
                        modules={[Navigation]}
                        navigation
                        simulateTouch={false}
                        spaceBetween={80}
                        slidesPerView={3}
                    >
                        {cityValue.map(flat =>
                            <SwiperSlide key={flat.id}>
                                <ProductsItem  product={flat} limit={6}/>
                            </SwiperSlide>
                        )}
                    </Swiper>
                    :
                    <h2>По вашему запросу ни чего не найдено</h2>
            }
            <div className={classes.productLength}>
                <div className={classes.textBlock}>
                    <p><b>{cityValue.length}</b> <strong>+</strong></p>
                    <p className={classes.text}>Предложений по {cityMainName}у</p>
                </div>
                <Link to={'catalog/flats'} onClick={()=> dispatch(setCity(`${cityMainName}`))}>
                    Посмотреть все
                    <SvgArrowRight width={'20'} height={'20'} color={'white'}/>
                </Link>
            </div>
        </section>
    );
};

export default MainSliderSection;
