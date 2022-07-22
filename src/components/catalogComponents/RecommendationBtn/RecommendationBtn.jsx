import React, {useState} from 'react';

import SvgExit from '../../svg/SvgExit';

import classes from './RecommendationBtn.module.scss'



const RecommendationBtn = ({recommendationActive, children, value, handler}) => {
    const [isActive, setIsActive] = useState(false)

    function recommendationHandler(value){
        setIsActive(!isActive)
        handler(value)
    }

    return (
        recommendationActive
            ?
            isActive
                &&
                <button className={classes.recommendationBtn} onClick={() => recommendationHandler('')}>
                    {children}
                    <SvgExit width={10} height={10} color={'#664EF9'}/>
                </button>
            :
            <button className={classes.recommendationBtn} onClick={() => recommendationHandler(value)}>
                {children}
            </button>


    );
};

export default RecommendationBtn;
