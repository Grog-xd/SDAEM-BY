import React from 'react';

const SvgTelegram = ({width, height, color, style}) => {
    return (
        <svg className={style} width={width} height={height} viewBox='0 0 19 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M15.7558 2.82446L2.53991 7.92074C1.63798 8.283 1.6432 8.78615 2.37444 9.01051L5.76748 10.069L13.618 5.11581C13.9892 4.88996 14.3284 5.01146 14.0496 5.25893L7.68912 10.9992H7.68762L7.68912 11L7.45506 14.4974C7.79794 14.4974 7.94926 14.3401 8.14157 14.1545L9.78964 12.5519L13.2177 15.084C13.8498 15.4321 14.3038 15.2532 14.461 14.4989L16.7114 3.89336C16.9417 2.96981 16.3588 2.55165 15.7558 2.82446Z' fill={color}/>
        </svg>

    );
};

export default SvgTelegram;
