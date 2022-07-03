import React from 'react';
import classes from './moreOptions.module.scss'
import MySelect from "../UI/mySelect/mySelect";
import {useDispatch, useSelector} from "react-redux";
import {checkboxHandler, setBedSum, setDistrict, setMetro} from "../../redux/mainPage";
import CheckboxList from "./checkboxList/checkboxList";
import {useParams} from "react-router-dom";


const MoreOptions = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const bedSumOptions = useSelector(state=> state.main.bedSum)
    const bedSumCurrentValue = useSelector(state=> state.main.bedSumCurrentValue)
    const metroOption = useSelector(state=> state.main.metroOption)
    const metroCurrentValue = useSelector(state=> state.main.metroCurrentValue)
    const districtOption = useSelector(state=> state.main.districtOption)
    const districtCurrentValue = useSelector(state=> state.main.districtCurrentValue)
    const checkboxList = useSelector(state=> state.main.checkboxsMoreOption)

    return (
        <div className={classes.moreOptions}>
            <div className={classes.selectSection}>
                {
                    params.type === 'cars'
                        ?
                            null
                        :
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
                params.type === 'cars'
                    ?   null
                    :   <CheckboxList checkboxList={checkboxList} handler={(e)=>dispatch(checkboxHandler(e))}/>
            }

        </div>
    );
};

export default MoreOptions;
