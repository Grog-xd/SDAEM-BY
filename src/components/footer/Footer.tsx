import React, {FC} from 'react';

import FooterLogoSection from './FooterLogoSection/FooterLogoSection.tsx';
import FooterNavSection from './FooterNavSection/FooterNavSection.tsx';
import FooterSocialPaySection from './FooterSocialPaySection/FooterSocialPaySection.tsx';
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
