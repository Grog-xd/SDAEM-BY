


const SvgFacebook = ({width, height, color, style}) => {
    return (
        <svg className={style} width={width} height={height} viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M8.05038 3.02509H9.68354V0.18066C9.40178 0.141899 8.43277 0.0546875 7.30424 0.0546875C4.94953 0.0546875 3.33649 1.53579 3.33649 4.25798V6.76326H0.738037V9.94312H3.33649V17.9442H6.52232V9.94387H9.01567L9.41147 6.76401H6.52157V4.57328C6.52232 3.65421 6.76979 3.02509 8.05038 3.02509Z' fill={color}/>
        </svg>
    );
};

export default SvgFacebook;
