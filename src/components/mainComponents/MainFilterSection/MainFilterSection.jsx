import React, {useState} from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {mainFilter, setCity, setMaxCost, setMinCost, setRooms} from '../../../redux/mainPage';
import MySelect from '../../UI/mySelect/mySelect';
import MoreOptions from '../../moreOptions/MoreOptions';
import SvgSettings from '../../svg/SvgSettings';
import SvgLocation from '../../svg/SvgLocation';
import SvgArrowRight from '../../svg/SvgArrowRight';

import classes from './MainFilterSection.module.scss';

const MainFilterSection = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [tabIndex, setTabIndex] = useState(0);
    const [moreOptions, setMoreOptions] = useState(false)
    const {cityCurrentValue, roomsCurrentValue, roomsOption, cityOption, minCost, maxCost} = useSelector(state=> state.main)

    function catalogFilterHandler(link){
        dispatch(mainFilter(link))
        navigate(`/catalog/${link}`)
    }

    return (
        <section className={classes.filterSection}>
            <h1>Sdaem.by - у нас живут <b>ваши объявления</b></h1>
            <form className={classes.mainForm}>
                <Tabs  defaultIndex={tabIndex} onSelect={( index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Квартиры на сутки</Tab>
                        <Tab>Коттеджи и усадьбы</Tab>
                        <Tab>Бани и сауны</Tab>
                        <Tab>Авто напрокат</Tab>
                    </TabList>
                    <TabPanel>
                        <div className={classes.inputBLock}>
                            <p className={classes.inputBLockText}>Город</p>
                            <MySelect options={cityOption} handler={(e)=>dispatch(setCity(e))} value={cityCurrentValue ? cityCurrentValue : 'Выберите'}/>
                        </div>
                        <div className={classes.inputBLock}>
                            <p className={classes.inputBLockText}>Комнаты</p>
                            <MySelect options={roomsOption} handler={(e)=>dispatch(setRooms(e))} value={roomsCurrentValue ? roomsCurrentValue : 'Выберите'}/>
                        </div>
                        <div className={classes.inputBLock}>
                            <p className={classes.inputBLockText}>Цена за сутки (BYN)</p>
                            <div className={classes.costBlock}>
                                <input type='number' min={0} max={1000} value={minCost} placeholder={'От'} onChange={(e)=> dispatch(setMinCost(e.target.value))}/>
                                -
                                <input type='number' min={0} max={1000} value={maxCost} placeholder={'До'} onChange={(e)=> dispatch(setMaxCost(e.target.value))}/>
                            </div>
                        </div>
                        <div className={classes.inputBLock}>
                            <button type={'button'} onClick={()=>setMoreOptions(!moreOptions)} className={classes.openMoreFilter}>
                                Больше опций
                                <SvgSettings width={'16'} height={'18'} color={'#664EF9'}/>
                            </button>
                        </div>
                        <Link className={classes.openMapButton} to={'/404'}>
                            На карте
                            <SvgLocation width={'15'} height={'15'} color={'#664EF9'}/>
                        </Link>
                        <button type={'button'} onClick={()=>catalogFilterHandler('flats')} className={classes.filterButton}>
                            Показать
                            <SvgArrowRight width={'9'} height={'16'} color={'#242424'}/>
                        </button>
                    </TabPanel>
                    <TabPanel>
                        <div className={classes.inputBLock}>
                            <p className={classes.inputBLockText}>Город</p>
                            <MySelect options={cityOption} handler={(e)=>dispatch(setCity(e))} value={cityCurrentValue ? cityCurrentValue : 'Выберите'}/>
                        </div>
                        <div className={classes.inputBLock}>
                            <p className={classes.inputBLockText}>Комнаты</p>
                            <MySelect options={roomsOption} handler={(e)=>dispatch(setRooms(e))} value={roomsCurrentValue ? roomsCurrentValue : 'Выберите'}/>
                        </div>
                        <div className={classes.inputBLock}>
                            <p className={classes.inputBLockText}>Цена за сутки (BYN)</p>
                            <div className={classes.costBlock}>
                                <input type='number' min={0} max={1000} value={minCost} placeholder={'От'} onChange={(e)=> dispatch(setMinCost(e.target.value))}/>
                                -
                                <input type='number' min={0} max={1000} value={maxCost} placeholder={'До'} onChange={(e)=> dispatch(setMaxCost(e.target.value))}/>
                            </div>
                        </div>
                        <div className={classes.inputBLock}>
                            <button type={'button'} onClick={()=>setMoreOptions(!moreOptions)} className={classes.openMoreFilter}>
                                Больше опций
                                <SvgSettings width={'16'} height={'18'} color={'#664EF9'}/>
                            </button>
                        </div>
                        <Link className={classes.openMapButton} to={'/404'}>
                            На карте
                            <SvgLocation width={'15'} height={'15'} color={'#664EF9'}/>
                        </Link>
                        <button type={'button'} onClick={()=>catalogFilterHandler('cottages')} className={classes.filterButton}>
                            Показать
                            <SvgArrowRight width={'9'} height={'16'} color={'#242424'}/>
                        </button>
                    </TabPanel>
                    <TabPanel>
                        <div className={classes.inputBLock}>
                            <p className={classes.inputBLockText}>Город</p>
                            <MySelect options={cityOption} handler={(e)=>dispatch(setCity(e))} value={cityCurrentValue ? cityCurrentValue : 'Выберите'}/>
                        </div>
                        <div className={classes.inputBLock}>
                            <p className={classes.inputBLockText}>Комнаты</p>
                            <MySelect options={roomsOption} handler={(e)=>dispatch(setRooms(e))} value={roomsCurrentValue ? roomsCurrentValue : 'Выберите'}/>
                        </div>
                        <div className={classes.inputBLock}>
                            <p className={classes.inputBLockText}>Цена за сутки (BYN)</p>
                            <div className={classes.costBlock}>
                                <input type='number' min={0} max={1000} value={minCost} placeholder={'От'} onChange={(e)=> dispatch(setMinCost(e.target.value))}/>
                                -
                                <input type='number' min={0} max={1000} value={maxCost} placeholder={'До'} onChange={(e)=> dispatch(setMaxCost(e.target.value))}/>
                            </div>
                        </div>
                        <div className={classes.inputBLock}>
                            <button type={'button'} onClick={()=>setMoreOptions(!moreOptions)} className={classes.openMoreFilter}>
                                Больше опций
                                <SvgSettings width={'16'} height={'18'} color={'#664EF9'}/>
                            </button>
                        </div>
                        <Link className={classes.openMapButton} to={'/404'}>
                            На карте
                            <SvgLocation width={'15'} height={'15'} color={'#664EF9'}/>
                        </Link>
                        <button type={'button'} onClick={()=>catalogFilterHandler('baths')} className={classes.filterButton}>
                            Показать
                            <SvgArrowRight width={'9'} height={'16'} color={'#242424'}/>
                        </button>
                    </TabPanel>
                    <TabPanel>
                        <div className={classes.inputBLock}>
                            <p className={classes.inputBLockText}>Город</p>
                            <MySelect options={cityOption} handler={(e)=>dispatch(setCity(e))} value={cityCurrentValue ? cityCurrentValue : 'Выберите'}/>
                        </div>
                        <div className={classes.inputBLock}>
                            <p className={classes.inputBLockText}>Посадочные места</p>
                            <MySelect options={roomsOption} handler={(e)=>dispatch(setRooms(e))} value={roomsCurrentValue ? roomsCurrentValue : 'Выберите'}/>
                        </div>
                        <div className={classes.inputBLock}>
                            <p className={classes.inputBLockText}>Цена за сутки (BYN)</p>
                            <div className={classes.costBlock}>
                                <input type='number' min={0} max={1000} value={minCost} placeholder={'От'} onChange={(e)=> dispatch(setMinCost(e.target.value))}/>
                                -
                                <input type='number' min={0} max={1000} value={maxCost} placeholder={'До'} onChange={(e)=> dispatch(setMaxCost(e.target.value))}/>
                            </div>
                        </div>
                        {/*<div className={classes.inputBLock}>*/}
                        {/*    <button type={"button"} onClick={()=>setMoreOptions(!moreOptions)} className={classes.openMoreFilter}>*/}
                        {/*        Больше опций*/}
                        {/*        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*            <path d="M5.91109 4.29814C5.91109 2.90551 4.937 1.73697 3.63453 1.4358V0.661897C3.63453 0.296309 3.33822 0 2.97264 0C2.60705 0 2.31074 0.296309 2.31074 0.661897V1.4358C1.00835 1.73689 0.0341797 2.90551 0.0341797 4.29814C0.0341797 5.69077 1.00827 6.85931 2.31074 7.16048V17.3381C2.31074 17.7037 2.60705 18 2.97264 18C3.33822 18 3.63453 17.7037 3.63453 17.3381V7.16048C4.937 6.85931 5.91109 5.69077 5.91109 4.29814ZM1.35805 4.29814C1.35805 3.40781 2.08238 2.68348 2.97271 2.68348C3.86303 2.68348 4.58737 3.40781 4.58737 4.29814C4.58737 5.18846 3.86303 5.9128 2.97271 5.9128C2.08238 5.9128 1.35805 5.18846 1.35805 4.29814Z" fill="#664EF9"/>*/}
                        {/*            <path d="M8.66188 8.89222V0.661897C8.66188 0.296309 8.36557 0 7.99998 0C7.63439 0 7.33808 0.296309 7.33808 0.661897V8.89222C6.03569 9.19331 5.06152 10.3619 5.06152 11.7546C5.06152 13.1472 6.03562 14.3157 7.33808 14.6169V17.3381C7.33808 17.7037 7.63439 18 7.99998 18C8.36557 18 8.66188 17.7037 8.66188 17.3381V14.6169C9.96427 14.3158 10.9384 13.1472 10.9384 11.7546C10.9384 10.3619 9.96434 9.19338 8.66188 8.89222ZM6.38539 11.7546C6.38539 10.8642 7.10973 10.1399 8.00005 10.1399C8.89038 10.1399 9.61471 10.8642 9.61471 11.7546C9.61471 12.6449 8.89038 13.3692 8.00005 13.3692C7.10973 13.3692 6.38539 12.6449 6.38539 11.7546Z" fill="#664EF9"/>*/}
                        {/*            <path d="M15.9658 7.20151C15.9658 5.80888 14.9917 4.64034 13.6892 4.33918V0.661897C13.6892 0.296309 13.3929 0 13.0273 0C12.6617 0 12.3654 0.296309 12.3654 0.661897V4.33918C11.063 4.64027 10.0889 5.80888 10.0889 7.20151C10.0889 8.59415 11.063 9.76269 12.3654 10.0639V17.3381C12.3654 17.7037 12.6617 18 13.0273 18C13.3929 18 13.6892 17.7037 13.6892 17.3381V10.0639C14.9917 9.76269 15.9658 8.59415 15.9658 7.20151ZM11.4127 7.20151C11.4127 6.31119 12.1371 5.58685 13.0274 5.58685C13.9177 5.58685 14.6421 6.31119 14.6421 7.20151C14.6421 8.09184 13.9177 8.81618 13.0274 8.81618C12.1371 8.81618 11.4127 8.09184 11.4127 7.20151Z" fill="#664EF9"/>*/}
                        {/*        </svg>*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                        <Link className={classes.openMapButton} to={'/404'}>
                            На карте
                            <SvgLocation width={'15'} height={'15'} color={'#664EF9'}/>
                        </Link>
                        <button type={'button'} onClick={()=>catalogFilterHandler('cars')} className={classes.filterButton}>
                            Показать
                            <SvgArrowRight width={'9'} height={'16'} color={'#242424'}/>
                        </button>
                    </TabPanel>
                </Tabs>
                {
                    moreOptions && tabIndex !== 3
                    && <MoreOptions />

                }

            </form>
        </section>
    );
};

export default MainFilterSection;
