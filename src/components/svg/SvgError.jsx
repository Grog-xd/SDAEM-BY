

const SvgError= ({width, height, color, style}) => {
    return (
        <svg className={style} width={width} height={height} viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M17.5 0C7.875 0 0 7.875 0 17.5C0 27.125 7.875 35 17.5 35C27.125 35 35 27.125 35 17.5C35 7.875 27.125 0 17.5 0ZM17.5 3.5C19.425 3.5 20.825 5.075 20.65 7L19.25 21H15.75L15.05 14L14.35 7C14.175 5.075 15.575 3.5 17.5 3.5ZM17.5 31.5C15.575 31.5 14 29.925 14 28C14 26.075 15.575 24.5 17.5 24.5C19.425 24.5 21 26.075 21 28C21 29.925 19.425 31.5 17.5 31.5Z' fill={color}/>
        </svg>

    );
};

export default SvgError;
