import {FC} from 'react';

import SvgVk from '../svg/SvgVk.tsx';
import SvgFacebook from '../svg/SvgFacebook.tsx';
import SvgViber from '../svg/SvgViber.tsx';
import SvgTelegram from '../svg/SvgTelegram.tsx';
import SvgWhatsapp from '../svg/SvgWhatsapp.tsx';

import classes from './SocialButtonsBlock.module.scss';

interface SocialButtonsBlockProps{
    style?:string
}

const SocialButtonsBlock:FC <SocialButtonsBlockProps>= ({style}) => {
    let cls = [
        classes.socialBlock,
        style,
    ]

    return (
        <div className={cls.join(' ')}>
            <p>Поделиться</p>
            <a className={classes.socialBtn} target={'_blank'} rel={'noreferrer'} href='https://vk.com'>
                <SvgVk width={'17'} height={'10'} color={'#1E2123'}/>
            </a>
            <a className={classes.socialBtn} target={'_blank'} rel={'noreferrer'} href='https://www.facebook.com'>
                <SvgFacebook width={'9'} height={'17'} color={'#1E2123'}/>
            </a>
            <a className={classes.socialBtn} target={'_blank'} rel={'noreferrer'} href='https://www.viber.com/ru/'>
                <SvgViber width={'17'} height={'18'} color={'#1E2123'}/>
            </a>
            <a className={classes.socialBtn} target={'_blank'} rel={'noreferrer'} href='https://telegram.org'>
                <SvgTelegram width={'17'} height={'14'} color={'#1E2123'}/>
            </a>
            <a className={classes.socialBtn} target={'_blank'} rel={'noreferrer'} href='https://www.whatsapp.com'>
                <SvgWhatsapp width={'17'} height={'16'} color={'#1E2123'}/>
            </a>
        </div>
    );
};

export default SocialButtonsBlock;
