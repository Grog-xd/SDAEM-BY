import React from 'react';
import MyCheckbox from "../../UI/myCheckbox/myCheckbox";
import classes from './CheckboxList.module.scss'

const CheckboxList = ({checkboxList, handler}) => {
    return (
        <div className={classes.checkboxSection}>
            {checkboxList.map(checkbox =>
                <MyCheckbox key={checkbox.id} label={checkbox.value} value={checkbox.bol} handler={handler}/>
            )}
        </div>
    );
};

export default CheckboxList;
