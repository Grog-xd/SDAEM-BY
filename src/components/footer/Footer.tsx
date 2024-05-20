import React, {FC} from 'react';

import FooterLogoSection from './FooterLogoSection/FooterLogoSection';
import FooterNavSection from './FooterNavSection/FooterNavSection';
import FooterSocialPaySection from './FooterSocialPaySection/FooterSocialPaySection';
import classes from './Footer.module.scss';

const Footer:FC = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <FooterLogoSection />
                <div className={classes.mainSection}>
                    <FooterNavSection />
                    <FooterSocialPaySection />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
