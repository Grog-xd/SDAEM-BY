


const SvgMetro = ({width, height, color, style}) => {
    return (
        <svg className={style} width={width} height={height} viewBox='0 0 20 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M19.6401 11.4773H18.3812L14.4755 0.509766L9.99979 7.19943L5.21594 0.589264L1.61882 11.4773H0.359905L0 12.9373H4.77911L6.65514 7.59981L10.0565 12.2942L10.0769 12.3238L10.0978 12.2942L13.3449 7.59981L15.2209 12.9373H20L19.6401 11.4773Z' fill={color}/>
        </svg>
    );
};

export default SvgMetro;
