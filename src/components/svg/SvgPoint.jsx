import React from 'react';

const SvgPoint = ({width, height, color, style}) => {
    return (
        <svg className={style} width={width} height={height} viewBox='0 0 3 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='1.5' cy='2' r='1.5' fill={color}/>
        </svg>

    );
};

export default SvgPoint;
