
const SvgArrowRight= ({width, height, color, style}) => {
    return (
        <svg className={style} width={width} height={height} viewBox='0 0 9 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M1 14.8574L7.57143 8.28599L0.999999 1.71456' stroke={color}/>
        </svg>
    );
};

export default SvgArrowRight;
