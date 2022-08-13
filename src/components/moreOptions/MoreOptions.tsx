import {FC} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import {checkboxHandler, setBedSum, setDistrict, setMetro} from '../../redux/mainPage';
import MySelect from '../UI/mySelect/mySelect.tsx';

import {mainRedux} from '../../types/types';

import CheckboxList from './checkboxList/CheckboxList.tsx';
import classes from './MoreOptions.module.scss'


const MoreOptions:FC = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const {bedSumOptions, bedSumCurrentValue, metroOption, metroCurrentValue, districtOption, districtCurrentValue, checkboxsMoreOption} = useSelector((state:mainRedux)=> state.main)

    return (
        <div data-testid={'more-options'} className={classes.moreOptions}>
            <div className={classes.selectSection}>
                {
                    params.type !== 'cars'
                        &&
                            <div className={classes.selectBlock}>
                                <p className={classes.selectLabel}>Спальные места</p>
                                <MySelect options={bedSumOptions} handler={(e)=> dispatch(setBedSum(e))} value={bedSumCurrentValue ? bedSumCurrentValue: 'Выберите'} style={classes.select}/>
                            </div>
                }

                <div className={classes.selectBlock}>
                    <p className={classes.selectLabel}>Район</p>
                    <MySelect options={districtOption} handler={(e)=> dispatch(setDistrict(e))} value={districtCurrentValue ? districtCurrentValue: 'Выберите'} style={classes.select}/>
                </div>
                <div className={classes.selectBlock}>
                    <p className={classes.selectLabel}>Метро</p>
                    <MySelect options={metroOption} handler={(e)=> dispatch(setMetro(e))} value={metroCurrentValue ? metroCurrentValue: 'Выберите'} style={classes.select}/>
                </div>
            </div>
            {
                params.type !== 'cars'
                    &&  <CheckboxList checkboxList={checkboxsMoreOption} handler={(e)=>dispatch(checkboxHandler(e))}/>
            }

        </div>
    );
};

export default MoreOptions;
