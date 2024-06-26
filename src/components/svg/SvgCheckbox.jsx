

const SvgCheckbox= ({width, height, color, style}) => {
    return (
        <svg className={style} width={width} height={height} viewBox='0 0 14 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M0.5 5.41478L4.95177 9.87505L13.5 1.33527L12.2728 0.125L4.95177 7.43749L1.71024 4.19599L0.5 5.41478Z' fill={color}/>
        </svg>
    );
};

export default SvgCheckbox;
