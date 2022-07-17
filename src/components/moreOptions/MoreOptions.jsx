import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {checkboxHandler, setBedSum, setDistrict, setMetro} from "../../redux/mainPage";
import MySelect from "../UI/mySelect/mySelect";
import CheckboxList from "./checkboxList/CheckboxList";
import classes from './MoreOptions.module.scss'


const MoreOptions = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const {bedSumOptions, bedSumCurrentValue, metroOption, metroCurrentValue, districtOption, districtCurrentValue, checkboxsMoreOption} = useSelector(state=> state.main)

    return (
        <div className={classes.moreOptions}>
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
