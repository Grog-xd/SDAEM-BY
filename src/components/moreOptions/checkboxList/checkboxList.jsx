import React from 'react';
import classes from './checkboxList.module.scss'
import MyCheckbox from "../../UI/myCheckbox/myCheckbox";

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
