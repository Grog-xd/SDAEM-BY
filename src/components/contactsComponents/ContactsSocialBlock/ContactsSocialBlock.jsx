import React from 'react';

import SvgInst from '../../svg/SvgInst';
import SvgVk from '../../svg/SvgVk';
import SvgFacebook from '../../svg/SvgFacebook';

import classes from './ContactsSocialBlock.module.scss';

const ContactsSocialBlock = () => {
    return (
        <div className={classes.socialBtns}>
            <a target={'_blank'} rel={'noreferrer'} href='src/components/contactsComponents/ContactsSocialBlock/ContactsSocialBlock'>
                <SvgInst width={'20'} height={'20'} color={'white'}/>
            </a>
            <a href='https://vk.com' target={'_blank'} rel={'noreferrer'}>
                <SvgVk width={'20'} height={'12'} color={'white'}/>
            </a>
            <a href='https://www.facebook.com' target={'_blank'} rel={'noreferrer'}>
                <SvgFacebook width={'10'} height={'18'} color={'white'}/>
            </a>
        </div>
    );
};

export default ContactsSocialBlock;
