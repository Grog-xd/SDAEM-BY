import {FC, ReactNode, useState} from 'react';

import SvgExit from '../../svg/SvgExit.tsx';

import classes from './RecommendationBtn.module.scss'

interface RecommendationBtnProps {
    recommendationActive: boolean,
    children: ReactNode,
    value: string | number,
    handler: (value) => void
}

const RecommendationBtn:FC <RecommendationBtnProps>= ({recommendationActive, children, value, handler}) => {
    const [isActive, setIsActive] = useState<boolean>(false)

    function recommendationHandler(value: string | number){
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
                    <SvgExit width={'10'} height={'10'} color={'#664EF9'}/>
                </button>
            :
            <button className={classes.recommendationBtn} onClick={() => recommendationHandler(value)}>
                {children}
            </button>


    );
};

export default RecommendationBtn;
