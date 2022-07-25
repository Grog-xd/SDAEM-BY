import {FC} from 'react';

import SvgVk from '../../svg/SvgVk.tsx';
import SvgFacebook from '../../svg/SvgFacebook.tsx';
import SvgInst from '../../svg/SvgInst.tsx';
import visa from '../../../assets/img/visa.png';
import webpay from '../../../assets/img/webpay.png';
import visaV2 from '../../../assets/img/visa-v2.png';
import msCard from '../../../assets/img/ms-card.png';
import msCardV2 from '../../../assets/img/ms-card-v2.png';
import belCard from '../../../assets/img/belcart.png';

import classes from './FooterSocialPaySection.module.scss';


const FooterSocialPaySection:FC = () => {
    return (
        <div className={classes.socialPaySection}>
            <div className={classes.socialBtns}>
                <p>Мы в соцсетях</p>
                <a rel='noreferrer' target='_blank' href='https://www.instagram.com/'>
                    <SvgInst width={'24'} height={'25'} color={'#1E2123'}/>
                </a>
                <a rel='noreferrer' target='_blank' href='https://vk.com/'>
                    <SvgVk width={'25'} height={'15'} color={'#1E2123'}/>
                </a>
                <a rel='noreferrer' target='_blank' href='https://facebook.com/'>
                    <SvgFacebook width={'20'} height={'20'} color={'#1E2123'}/>
                </a>
            </div>
            <div className={classes.payCardsSection}>
                <img src={visa} alt='visa'/>
                <img src={webpay} alt='webpay'/>
                <img src={visaV2} alt='verified by visa'/>
                <img src={msCard} alt='master card'/>
                <img src={msCardV2} alt='master card secure code'/>
                <img src={belCard} alt='белкарт'/>
            </div>
        </div>
    );
};

export default FooterSocialPaySection;
