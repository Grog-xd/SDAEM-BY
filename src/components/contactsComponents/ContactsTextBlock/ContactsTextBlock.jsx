import React from 'react';
import {useSelector} from 'react-redux';

import SvgLocation from '../../svg/SvgLocation';
import SvgPhone from '../../svg/SvgPhone';
import SvgViber from '../../svg/SvgViber';
import SvgTelegram from '../../svg/SvgTelegram';
import SvgWhatsapp from '../../svg/SvgWhatsapp';
import SvgEmail from '../../svg/SvgEmail';
import SvgClock from '../../svg/SvgClock';
import SvgError from '../../svg/SvgError';

import classes from './ContactsTextBlock.module.scss';

const ContactsTextBlock = () => {
    const {contactsInformation} = useSelector(state => state.news)

    return (
        <div className={classes.textBlock}>
            <h1>Контакты</h1>
            <p className={classes.description}>Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать Ваше мнение.</p>
            <div className={classes.informationSection}>
                <div className={classes.svgBlock}>
                    <SvgLocation width={'12'} height={'11'} color={'white'}/>
                </div>
                <p><b>{contactsInformation.location}</b></p>
            </div>
            <div className={classes.informationSection}>
                <div className={classes.svgBlock}>
                    <SvgPhone width={'9'} height={'15'} color={'white'} />
                </div>
                <a className={classes.textLink}  href={`tel:${contactsInformation.tel}`}><b>{contactsInformation.tel}</b></a>
                <a className={classes.svgBlock} target={'_blank'} rel={'noreferrer'} href='src/components/contactsComponents/ContactsTextBlock/ContactsTextBlock'>
                    <SvgViber width={'18'} height={'18'} color={'white'}/>
                </a>
                <a className={classes.svgBlock} target={'_blank'} rel={'noreferrer'} href='https://telegram.org'>
                    <SvgTelegram width={'18'} height={'18'} color={'white'}/>
                </a>
                <a className={classes.svgBlock} target={'_blank'} rel={'noreferrer'} href='https://www.whatsapp.com'>
                    <SvgWhatsapp width={'18'} height={'18'} color={'white'}/>
                </a>
            </div>
            <div className={classes.informationSection}>
                <div className={classes.svgBlock}>
                    <SvgEmail width={'15'} height={'13'} color={'white'}/>
                </div>
                <a className={classes.textLink}  href={`mailto:${contactsInformation.email}`}><strong>{contactsInformation.email}</strong></a>
            </div>
            <div className={classes.informationSection}>
                <div className={classes.svgBlock}>
                    <SvgClock width={'15'} height={'15'} color={'white'}/>
                </div>
                <p>Режим работы</p>
                <p><b>{contactsInformation.timeWork}</b></p>
            </div>
            <p className={classes.contactsText}>ИП Шушкевич Андрей Викторович
                УНП 192602485 Минским горисполкомом 10.02.2016
            </p>
            <div className={classes.warningBlock}>
                <SvgError width={'60'} height={'60'} color={'#5039BD'}/>
                <p>Администрация сайта не владеет информацией
                    о наличии свободных квартир</p>
            </div>
        </div>
    );
};

export default ContactsTextBlock;
