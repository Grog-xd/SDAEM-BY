import  {FC} from 'react';

import {Svg} from '../../types/types';


const SvgPhone:FC <Svg> = ({width, height, color, style}) => {
    return (
        <svg className={style} width={width} height={height} viewBox='0 0 9 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M7.22721 0L1.77265 0C0.831741 0 0.0681152 0.763626 0.0681152 1.70454L0.0681152 13.2955C0.0681152 14.2364 0.831741 15 1.77265 15H7.22721C8.16812 15 8.93175 14.2364 8.93175 13.2955V1.70454C8.93175 0.763626 8.16812 0 7.22721 0ZM4.49995 14.3182C3.93403 14.3182 3.47722 13.8614 3.47722 13.2955C3.47722 12.7295 3.93403 12.2727 4.49995 12.2727C5.06587 12.2727 5.52267 12.7295 5.52267 13.2955C5.52267 13.8614 5.06584 14.3182 4.49995 14.3182ZM7.56813 11.5909H1.43176V2.04546H7.56813V11.5909Z' fill={color}/>
        </svg>

    );
};

export default SvgPhone;
