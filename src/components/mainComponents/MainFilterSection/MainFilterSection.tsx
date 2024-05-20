import {FC, useState} from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {mainFilter, setCity, setMaxCost, setMinCost, setRooms} from '../../../redux/mainPage';
import MySelect from '../../UI/mySelect/mySelect';
import MoreOptions from '../../moreOptions/MoreOptions';
import SvgSettings from '../../svg/SvgSettings';
import SvgLocation from '../../svg/SvgLocation';
import SvgArrowRight from '../../svg/SvgArrowRight';

import {mainRedux} from '../../../types/types';

import classes from './MainFilterSection.module.scss';

const MainFilterSection:FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [tabIndex, setTabIndex] = useState<number>(0);
    const [moreOptions, setMoreOptions] = useState<boolean>(false)
    const {cityCurrentValue, roomsCurrentValue, roomsOption, cityOption, minCost, maxCost} = useSelector((state:mainRedux)=> state.main)

    function catalogFilterHandler(link:string){
        dispatch(mainFilter(link))
        navigate(`/catalog/${link}`)
    }

    return (
        <section data-testid={'main-filter-section'} className={classes.filterSection}>
            <h1>Sdaem.by - у нас живут <b>ваши объявления</b></h1>
            <form className={classes.mainForm}>
                <Tabs  defaultIndex={tabIndex} onSelect={( index) => setTabIndex(index)}>
                    <TabList>
                        <Tab data-testid={'tab-btn'}>Квартиры на сутки</Tab>
                        <Tab data-testid={'tab-btn'}>Коттеджи и усадьбы</Tab>
                        <Tab data-testid={'tab-btn'}>Бани и сауны</Tab>
                        <Tab data-testid={'tab-btn'}>Авто напрокат</Tab>
                    </TabList>
                    <TabPanel data-testid={'tab-panel'}>
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
                                <input type='number' min={0} max={1000} value={minCost} placeholder={'От'} onChange={(e)=> dispatch(setMinCost(+e.target.value))}/>
                                -
                                <input type='number' min={0} max={1000} value={maxCost} placeholder={'До'} onChange={(e)=> dispatch(setMaxCost(+e.target.value))}/>
                            </div>
                        </div>
                        <div className={classes.inputBLock}>
                            <button data-testid={'open-more-options-btn'} type={'button'} onClick={()=>setMoreOptions(!moreOptions)} className={!moreOptions ? classes.openMoreFilter : classes.openMoreFilterActive}>
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
                    <TabPanel data-testid={'tab-panel'}>
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
                                <input type='number' min={0} max={1000} value={minCost} placeholder={'От'} onChange={(e)=> dispatch(setMinCost(+e.target.value))}/>
                                -
                                <input type='number' min={0} max={1000} value={maxCost} placeholder={'До'} onChange={(e)=> dispatch(setMaxCost(+e.target.value))}/>
                            </div>
                        </div>
                        <div className={classes.inputBLock}>
                            <button data-testid={'open-more-options-btn'} type={'button'} onClick={()=>setMoreOptions(!moreOptions)} className={!moreOptions ? classes.openMoreFilter : classes.openMoreFilterActive}>
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
                    <TabPanel data-testid={'tab-panel'}>
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
                                <input type='number' min={0} max={1000} value={minCost} placeholder={'От'} onChange={(e)=> dispatch(setMinCost(+e.target.value))}/>
                                -
                                <input type='number' min={0} max={1000} value={maxCost} placeholder={'До'} onChange={(e)=> dispatch(setMaxCost(+e.target.value))}/>
                            </div>
                        </div>
                        <div className={classes.inputBLock}>
                            <button data-testid={'open-more-options-btn'} type={'button'} onClick={()=>setMoreOptions(!moreOptions)} className={!moreOptions ? classes.openMoreFilter : classes.openMoreFilterActive}>
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
                    <TabPanel data-testid={'tab-panel'}>
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
                                <input type='number' min={0} max={1000} value={minCost} placeholder={'От'} onChange={(e)=> dispatch(setMinCost(+e.target.value))}/>
                                -
                                <input type='number' min={0} max={1000} value={maxCost} placeholder={'До'} onChange={(e)=> dispatch(setMaxCost(+e.target.value))}/>
                            </div>
                        </div>
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
