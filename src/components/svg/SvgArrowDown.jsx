import React from 'react';

const SvgArrowDown = ({width, height, color, style}) => {
    return (
        <svg className={style} width={width} height={height} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 1.38477L6 5.64152L10.5 1.38477" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default SvgArrowDown;
