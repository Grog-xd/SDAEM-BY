import React from 'react';

const SvgWhatsapp = ({width, height, color, style}) => {
    return (
        <svg className={style} width={width} height={height} viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.7576 3.61983C14.0616 2.91869 13.2331 2.36282 12.3205 1.98451C11.4078 1.60619 10.429 1.41296 9.44106 1.41605C5.29986 1.41605 1.92926 4.78665 1.92926 8.9307C1.92926 10.2549 2.27618 11.5496 2.93304 12.6871L1.8667 16.5818L5.85056 15.5364C6.95194 16.1363 8.18594 16.4511 9.44012 16.452H9.44296C13.5842 16.452 16.9576 13.0814 16.9576 8.93734C16.9601 7.9497 16.7669 6.97136 16.3892 6.05882C16.0114 5.14628 15.4565 4.31765 14.7567 3.62078L14.7576 3.61983ZM9.44296 15.1838C8.32368 15.1839 7.22496 14.8831 6.26194 14.3127L6.0335 14.1762L3.66953 14.7951L4.30081 12.4909L4.15294 12.2539C3.52523 11.2594 3.19351 10.1068 3.19655 8.9307C3.19856 7.27393 3.85779 5.68562 5.02958 4.51437C6.20137 3.34311 7.78997 2.6846 9.44675 2.68334C11.114 2.68334 12.6846 3.33547 13.8628 4.51367C14.4443 5.09299 14.9051 5.78178 15.2188 6.54025C15.5325 7.29872 15.6927 8.11183 15.6903 8.9326C15.6875 12.38 12.8856 15.1828 9.44296 15.1828V15.1838ZM12.8676 10.5042C12.6809 10.4094 11.7567 9.95629 11.5851 9.89373C11.4136 9.83117 11.2884 9.79895 11.1614 9.98852C11.0373 10.1752 10.6761 10.5989 10.5662 10.726C10.4562 10.8501 10.3472 10.8681 10.1605 10.7733C9.97376 10.6786 9.36618 10.4805 8.6496 9.84065C8.09226 9.34302 7.71406 8.72691 7.60411 8.54018C7.49416 8.35346 7.59179 8.25014 7.68752 8.1582C7.77378 8.07478 7.87425 7.93924 7.96904 7.82929C8.06382 7.71934 8.0932 7.64256 8.15576 7.51555C8.21832 7.39138 8.18799 7.28142 8.1406 7.18664C8.0932 7.09185 7.7169 6.16769 7.56335 5.79138C7.41264 5.42361 7.2553 5.4748 7.13966 5.46816C7.0297 5.46248 6.90553 5.46248 6.78136 5.46248C6.65719 5.46248 6.45246 5.50987 6.28089 5.6966C6.10933 5.88333 5.62308 6.33925 5.62308 7.26341C5.62308 8.18758 6.29511 9.07952 6.3899 9.20653C6.48468 9.3307 7.71406 11.2293 9.59746 12.0416C10.0449 12.234 10.3946 12.3496 10.6666 12.4387C11.1169 12.5809 11.5254 12.5601 11.8486 12.5127C12.2098 12.4596 12.9595 12.0596 13.1169 11.6207C13.2742 11.1819 13.2742 10.8065 13.2268 10.7288C13.1823 10.6454 13.0581 10.5989 12.8685 10.5032L12.8676 10.5042Z" fill={color}/>
        </svg>
    );
};

export default SvgWhatsapp;
