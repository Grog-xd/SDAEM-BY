import {FC} from 'react';

import MyCheckbox from '../../UI/myCheckbox/myCheckbox.tsx';

import classes from './CheckboxList.module.scss'

interface CheckboxListProps{
    checkboxList: CheckboxProps[],
    handler: () => void
}

interface CheckboxProps{
    id:number,
    value:string,
    bol:boolean
}

const CheckboxList:FC <CheckboxListProps> = ({checkboxList, handler}) => {
    return (
        <div className={classes.checkboxSection}>
            {checkboxList.map(checkbox =>
                <MyCheckbox key={checkbox.id} label={checkbox.value} value={checkbox.bol} handler={handler}/>,
            )}
        </div>
    );
};

export default CheckboxList;
