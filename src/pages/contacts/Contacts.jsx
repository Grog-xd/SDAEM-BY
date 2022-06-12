import React, {useState} from 'react';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import classes from './contacts.module.scss'
import {useSelector} from "react-redux";
import Modal from "../../components/modal/modal";

const Contacts = () => {
    const information = useSelector(state => state.toolkit.contactsInformation)
    const [modalActive, setModalActive] = useState(false)

    function submit(e){
        e.preventDefault()
        setModalActive(!modalActive)
    }

    return (
        <React.Fragment>
            <Header />
            <main className={classes.contacts}>
                {modalActive
                    ?
                        <Modal>
                            <p className={'modalTitle'}><b>Ваше письмо отправлено!</b></p>
                            <p className={'modalBody'}>Какое-то сообщение о том, что письмо отправлено, какое-то сообщение, что письмо отправлено.</p>
                            <button onClick={()=> setModalActive(!modalActive)} className={'modalButton'}>Закрыть окно</button>
                        </Modal>
                    :
                        null
                }
                <div className={classes.container}>
                    <div className={classes.textBlock}>
                        <h1>Контакты</h1>
                        <p className={classes.description}>Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать Ваше мнение.</p>
                        <div className={classes.informationSection}>
                            <div className={classes.svgBlock}><svg width="12" height="11" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.43806 1.74419C6.7055 0.627907 5.4962 0 4.13573 0C2.7869 0 1.5776 0.627907 0.821781 1.74419C0.0659671 2.83721 -0.108452 4.23256 0.356665 5.45349C0.484572 5.77907 0.682246 6.11628 0.93806 6.4186L3.87992 9.88372C3.94969 9.95349 4.01946 10 4.12411 10C4.22876 10 4.29853 9.95349 4.36829 9.88372L7.32178 6.4186C7.5776 6.11628 7.7869 5.7907 7.90318 5.45349C8.36829 4.23256 8.19387 2.83721 7.43806 1.74419ZM4.13573 5.86047C3.13573 5.86047 2.31015 5.03488 2.31015 4.03488C2.31015 3.03488 3.13573 2.2093 4.13573 2.2093C5.13574 2.2093 5.96132 3.03488 5.96132 4.03488C5.96132 5.03488 5.14736 5.86047 4.13573 5.86047Z" fill="#FFFFFF"/>
                            </svg></div>
                            <p><b>{information.location}</b></p>
                        </div>
                        <div className={classes.informationSection}>
                            <div className={classes.svgBlock}><svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.22721 0L1.77265 0C0.831741 0 0.0681152 0.763626 0.0681152 1.70454L0.0681152 13.2955C0.0681152 14.2364 0.831741 15 1.77265 15H7.22721C8.16812 15 8.93175 14.2364 8.93175 13.2955V1.70454C8.93175 0.763626 8.16812 0 7.22721 0ZM4.49995 14.3182C3.93403 14.3182 3.47722 13.8614 3.47722 13.2955C3.47722 12.7295 3.93403 12.2727 4.49995 12.2727C5.06587 12.2727 5.52267 12.7295 5.52267 13.2955C5.52267 13.8614 5.06584 14.3182 4.49995 14.3182ZM7.56813 11.5909H1.43176V2.04546H7.56813V11.5909Z" fill="white"/>
                            </svg></div>
                            <p><b>{information.tel}</b></p>
                            <a className={classes.svgBlock} target={'_blank'} rel={'noreferrer'} href="https://www.viber.com/ru/">
                                <svg width="18" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g >
                                        <path d="M9.08751 1.45441C7.82648 1.47144 5.11314 1.67844 3.59532 3.06918C2.46858 4.18937 2.07488 5.84082 2.02902 7.88599C1.98972 9.92329 1.94386 13.749 5.63196 14.7912V16.3765C5.63196 16.3765 5.60707 17.0119 6.02632 17.1429C6.54383 17.3067 6.83862 16.816 7.32993 16.292L8.24704 15.257C10.7691 15.4666 12.7016 14.9825 12.9243 14.9104C13.4353 14.7466 16.3183 14.3791 16.7899 10.5528C17.2747 6.60203 16.5541 4.11272 15.2571 2.98598L15.2505 2.98467C14.8575 2.62438 13.2853 1.47799 9.76748 1.46489C9.76748 1.46489 9.50807 1.44851 9.08751 1.45441ZM9.1314 2.56608C9.48842 2.56411 9.70787 2.57918 9.70787 2.57918C12.6819 2.58573 14.1041 3.48319 14.4382 3.78453C15.5322 4.72064 16.0942 6.9656 15.6829 10.2646C15.2898 13.4614 12.9512 13.6645 12.5188 13.802C12.3354 13.861 10.6322 14.2802 8.48877 14.1427C8.48877 14.1427 6.89103 16.0693 6.39317 16.5671C6.31456 16.6523 6.22284 16.6785 6.16389 16.6654C6.07873 16.6457 6.05252 16.5409 6.05907 16.3968L6.07218 13.764C2.94679 12.8993 3.13021 9.6357 3.16296 7.9325C3.20227 6.22929 3.52326 4.83266 4.47312 3.88934C5.75512 2.72985 8.05969 2.57263 9.13075 2.56608H9.1314ZM9.36723 4.26929C9.34145 4.2692 9.31591 4.2742 9.29207 4.28401C9.26823 4.29381 9.24656 4.30823 9.22831 4.32642C9.21005 4.34462 9.19556 4.36624 9.18568 4.39005C9.17579 4.41385 9.17071 4.43938 9.17071 4.46516C9.17071 4.51728 9.19141 4.56726 9.22827 4.60412C9.26512 4.64097 9.31511 4.66168 9.36723 4.66168C9.85425 4.65239 10.3383 4.73965 10.7914 4.91842C11.2445 5.09719 11.6577 5.36394 12.0072 5.70326C12.7212 6.39764 13.0691 7.32786 13.0822 8.54631C13.0822 8.57211 13.0873 8.59767 13.0972 8.62151C13.107 8.64536 13.1215 8.66702 13.1398 8.68527C13.158 8.70352 13.1797 8.71799 13.2035 8.72787C13.2274 8.73775 13.2529 8.74283 13.2787 8.74283V8.73694C13.3308 8.73694 13.3808 8.71623 13.4177 8.67937C13.4545 8.64252 13.4752 8.59253 13.4752 8.54041C13.4995 7.9674 13.4069 7.39544 13.2031 6.85937C12.9993 6.32329 12.6884 5.83432 12.2895 5.42223C11.51 4.66233 10.5261 4.26929 9.36658 4.26929H9.36723ZM6.77704 4.72129C6.63773 4.70144 6.4958 4.72913 6.37417 4.7999H6.36631C6.09772 4.95712 5.8501 5.15364 5.61427 5.41568C5.4374 5.6253 5.33849 5.83427 5.31228 6.03735C5.29687 6.15645 5.30805 6.27749 5.34504 6.39175L5.35814 6.3983C5.56005 6.9919 5.82352 7.56274 6.14424 8.10151C6.55996 8.85604 7.07072 9.55416 7.66402 10.1788L7.68367 10.205L7.70988 10.2246L7.72953 10.2443L7.74918 10.2639C8.37624 10.8587 9.07621 11.3716 9.83234 11.7903C10.697 12.2619 11.2224 12.4847 11.5369 12.5764V12.5829C11.6286 12.6091 11.7124 12.6222 11.7976 12.6222C12.066 12.6026 12.3201 12.4938 12.5195 12.313C12.775 12.0837 12.978 11.8296 13.1287 11.561V11.5544C13.2794 11.2728 13.227 11.0035 13.0108 10.8201C12.5751 10.439 12.1034 10.1011 11.6024 9.81127C11.2683 9.62784 10.9276 9.73921 10.7901 9.92263L10.4953 10.2954C10.3446 10.4788 10.0695 10.4526 10.0695 10.4526L10.0616 10.4591C8.01776 9.93508 7.47405 7.86568 7.47405 7.86568C7.47405 7.86568 7.44784 7.58399 7.63782 7.43988L8.00466 7.14509C8.18153 7.00097 8.306 6.66033 8.11603 6.32624C7.82658 5.82493 7.48869 5.3532 7.1072 4.91782C7.02422 4.8149 6.90707 4.74517 6.77704 4.72129ZM9.70722 5.30431C9.6551 5.30449 9.60518 5.32536 9.56845 5.36234C9.53171 5.39932 9.51117 5.44937 9.51135 5.50149C9.51152 5.55361 9.53239 5.60353 9.56937 5.64026C9.60635 5.677 9.6564 5.69754 9.70853 5.69736C10.3641 5.70874 10.9884 5.97966 11.4445 6.4507C11.6503 6.6777 11.8085 6.94363 11.9097 7.2328C12.011 7.52196 12.0533 7.82848 12.0341 8.13426C12.0342 8.18627 12.055 8.23609 12.0919 8.2728C12.1287 8.30952 12.1786 8.33013 12.2306 8.33013L12.2371 8.33799C12.263 8.33799 12.2886 8.33289 12.3125 8.32297C12.3364 8.31305 12.3581 8.29852 12.3763 8.2802C12.3946 8.26188 12.4091 8.24014 12.4189 8.21622C12.4287 8.1923 12.4337 8.16667 12.4337 8.14081C12.4533 7.36127 12.2109 6.70619 11.7327 6.18212C11.2545 5.65806 10.5863 5.36327 9.73473 5.30431C9.72557 5.30367 9.71638 5.30367 9.70722 5.30431ZM10.0282 6.36489C10.0019 6.36411 9.97575 6.36852 9.95117 6.37787C9.92659 6.38721 9.9041 6.4013 9.88497 6.41934C9.86584 6.43737 9.85045 6.459 9.83967 6.48298C9.8289 6.50697 9.82296 6.53284 9.82218 6.55912C9.82141 6.5854 9.82582 6.61158 9.83516 6.63615C9.8445 6.66073 9.85859 6.68323 9.87663 6.70236C9.89467 6.72149 9.91629 6.73688 9.94028 6.74765C9.96426 6.75843 9.99013 6.76437 10.0164 6.76514C10.6649 6.7979 10.9794 7.12544 11.0187 7.80017C11.0204 7.85115 11.0418 7.89947 11.0785 7.93492C11.1152 7.97037 11.1642 7.99017 11.2152 7.99014H11.2218C11.2482 7.98932 11.2741 7.98319 11.2981 7.97212C11.3221 7.96104 11.3435 7.94525 11.3613 7.92568C11.379 7.90612 11.3926 7.88318 11.4013 7.85824C11.41 7.8333 11.4135 7.80686 11.4117 7.78052C11.3659 6.90271 10.8877 6.41074 10.0361 6.36489C10.0334 6.36484 10.0308 6.36484 10.0282 6.36489Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_559_421">
                                            <rect width="17.8895" height="17.8895" fill="white" transform="translate(0.239258 0.0546875)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a className={classes.svgBlock} target={'_blank'} rel={'noreferrer'} href="https://telegram.org">
                                <svg width="18" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.7558 2.82446L2.53991 7.92074C1.63798 8.283 1.6432 8.78615 2.37444 9.01051L5.76748 10.069L13.618 5.11581C13.9892 4.88996 14.3284 5.01146 14.0496 5.25893L7.68912 10.9992H7.68762L7.68912 11L7.45506 14.4974C7.79794 14.4974 7.94926 14.3401 8.14157 14.1545L9.78964 12.5519L13.2177 15.084C13.8498 15.4321 14.3038 15.2532 14.461 14.4989L16.7114 3.89336C16.9417 2.96981 16.3588 2.55165 15.7558 2.82446Z" fill="white"/>
                                </svg>
                            </a>
                            <a className={classes.svgBlock} target={'_blank'} rel={'noreferrer'} href="https://www.whatsapp.com">
                                <svg width="18" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.7576 3.61983C14.0616 2.91869 13.2331 2.36282 12.3205 1.98451C11.4078 1.60619 10.429 1.41296 9.44106 1.41605C5.29986 1.41605 1.92926 4.78665 1.92926 8.9307C1.92926 10.2549 2.27618 11.5496 2.93304 12.6871L1.8667 16.5818L5.85056 15.5364C6.95194 16.1363 8.18594 16.4511 9.44012 16.452H9.44296C13.5842 16.452 16.9576 13.0814 16.9576 8.93734C16.9601 7.9497 16.7669 6.97136 16.3892 6.05882C16.0114 5.14628 15.4565 4.31765 14.7567 3.62078L14.7576 3.61983ZM9.44296 15.1838C8.32368 15.1839 7.22496 14.8831 6.26194 14.3127L6.0335 14.1762L3.66953 14.7951L4.30081 12.4909L4.15294 12.2539C3.52523 11.2594 3.19351 10.1068 3.19655 8.9307C3.19856 7.27393 3.85779 5.68562 5.02958 4.51437C6.20137 3.34311 7.78997 2.6846 9.44675 2.68334C11.114 2.68334 12.6846 3.33547 13.8628 4.51367C14.4443 5.09299 14.9051 5.78178 15.2188 6.54025C15.5325 7.29872 15.6927 8.11183 15.6903 8.9326C15.6875 12.38 12.8856 15.1828 9.44296 15.1828V15.1838ZM12.8676 10.5042C12.6809 10.4094 11.7567 9.95629 11.5851 9.89373C11.4136 9.83117 11.2884 9.79895 11.1614 9.98852C11.0373 10.1752 10.6761 10.5989 10.5662 10.726C10.4562 10.8501 10.3472 10.8681 10.1605 10.7733C9.97376 10.6786 9.36618 10.4805 8.6496 9.84065C8.09226 9.34302 7.71406 8.72691 7.60411 8.54018C7.49416 8.35346 7.59179 8.25014 7.68752 8.1582C7.77378 8.07478 7.87425 7.93924 7.96904 7.82929C8.06382 7.71934 8.0932 7.64256 8.15576 7.51555C8.21832 7.39138 8.18799 7.28142 8.1406 7.18664C8.0932 7.09185 7.7169 6.16769 7.56335 5.79138C7.41264 5.42361 7.2553 5.4748 7.13966 5.46816C7.0297 5.46248 6.90553 5.46248 6.78136 5.46248C6.65719 5.46248 6.45246 5.50987 6.28089 5.6966C6.10933 5.88333 5.62308 6.33925 5.62308 7.26341C5.62308 8.18758 6.29511 9.07952 6.3899 9.20653C6.48468 9.3307 7.71406 11.2293 9.59746 12.0416C10.0449 12.234 10.3946 12.3496 10.6666 12.4387C11.1169 12.5809 11.5254 12.5601 11.8486 12.5127C12.2098 12.4596 12.9595 12.0596 13.1169 11.6207C13.2742 11.1819 13.2742 10.8065 13.2268 10.7288C13.1823 10.6454 13.0581 10.5989 12.8685 10.5032L12.8676 10.5042Z" fill="white"/>
                                </svg>
                            </a>
                        </div>
                        <div className={classes.informationSection}>
                            <div className={classes.svgBlock}><svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.6603 12.3928C13.9975 12.3928 14.2896 12.2814 14.538 12.0616L10.2883 7.81169C10.1863 7.8847 10.0875 7.9557 9.99411 8.02321C9.67608 8.25753 9.41796 8.44037 9.21976 8.57139C9.02158 8.70271 8.75791 8.83656 8.42877 8.97322C8.09941 9.11004 7.79257 9.17823 7.50792 9.17823H7.49959H7.49126C7.20659 9.17823 6.89975 9.11007 6.57042 8.97322C6.24108 8.83656 5.97741 8.70271 5.77942 8.57139C5.58124 8.44037 5.32326 8.25756 5.00507 8.02321C4.9164 7.95821 4.81806 7.88688 4.71174 7.81055L0.461182 12.0616C0.709523 12.2814 1.00187 12.3928 1.33902 12.3928H13.6603Z" fill="white"/>
                                <path d="M0.845514 5.13653C0.52751 4.92452 0.245509 4.68171 0 4.4082V10.8741L3.7457 7.12838C2.99635 6.60523 2.03085 5.94204 0.845514 5.13653Z" fill="white"/>
                                <path d="M14.1632 5.13653C13.0231 5.90822 12.0541 6.57255 11.2561 7.12988L15.0003 10.8742V4.4082C14.7602 4.67621 14.4812 4.91886 14.1632 5.13653Z" fill="white"/>
                                <path d="M13.6607 0.607422H1.33944C0.909593 0.607422 0.579117 0.752576 0.347606 1.04258C0.115904 1.33273 0.000244141 1.69559 0.000244141 2.13075C0.000244141 2.48225 0.153731 2.86311 0.46057 3.27343C0.767408 3.68359 1.09391 4.00576 1.43991 4.24011C1.62959 4.37412 2.2016 4.77178 3.15594 5.43296C3.67111 5.78996 4.11913 6.10113 4.50413 6.36965C4.83229 6.5983 5.1153 6.79631 5.34896 6.96064C5.37578 6.97946 5.41797 7.00963 5.47396 7.04966C5.53428 7.09299 5.61062 7.14798 5.70479 7.21598C5.88614 7.34713 6.03679 7.45315 6.15678 7.53415C6.27661 7.61516 6.42179 7.70566 6.59211 7.80615C6.76229 7.90651 6.9228 7.98197 7.07346 8.03216C7.22414 8.08233 7.36363 8.10749 7.49195 8.10749H7.50029H7.50862C7.63691 8.10749 7.77643 8.08233 7.92714 8.03216C8.07777 7.98197 8.23815 7.90667 8.40846 7.80615C8.57862 7.70566 8.72361 7.61497 8.84382 7.53415C8.96381 7.45315 9.11446 7.34716 9.29584 7.21598C9.38982 7.14798 9.46615 7.09297 9.52647 7.0498C9.58249 7.0096 9.62465 6.97962 9.65164 6.96064C9.83367 6.83398 10.1173 6.63678 10.4987 6.37196C11.1927 5.8898 12.2147 5.18012 13.569 4.24011C13.9764 3.9556 14.3167 3.61227 14.5902 3.2106C14.8632 2.80894 15.0001 2.38761 15.0001 1.94676C15.0001 1.57843 14.8674 1.26326 14.6025 1.00075C14.3374 0.738578 14.0234 0.607422 13.6607 0.607422Z" fill="white"/>
                            </svg></div>
                            <p><strong>{information.email}</strong></p>
                        </div>
                        <div className={classes.informationSection}>
                            <div className={classes.svgBlock}><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 0C3.36443 0 0 3.36443 0 7.5C0 11.6356 3.36443 15 7.5 15C11.6356 15 15 11.6356 15 7.5C15 3.36443 11.6356 0 7.5 0ZM7.5 13.3607C4.26835 13.3607 1.63934 10.7317 1.63934 7.5C1.63934 4.26851 4.26835 1.63934 7.5 1.63934C10.7317 1.63934 13.3607 4.26851 13.3607 7.5C13.3607 10.7317 10.7317 13.3607 7.5 13.3607Z" fill="white"/>
                                <path d="M8.14909 7.5093V4.36588C8.14909 4.01489 7.86467 3.73047 7.51382 3.73047C7.16286 3.73047 6.87842 4.01489 6.87842 4.36588V7.71229C6.87842 7.72228 6.88088 7.73166 6.88136 7.74165C6.87301 7.91443 6.93253 8.08985 7.06448 8.22183L9.43088 10.5881C9.67909 10.8363 10.0814 10.8363 10.3294 10.5881C10.5774 10.3399 10.5776 9.93757 10.3294 9.68953L8.14909 7.5093Z" fill="white"/>
                            </svg></div>
                            <p>Режим работы</p>
                            <p><b>{information.timeWork}</b></p>
                        </div>
                        <p className={classes.contactsText}>ИП Шушкевич Андрей Викторович
                            УНП 192602485 Минским горисполкомом 10.02.2016
                        </p>
                        <div className={classes.warningBlock}>
                            <svg width="60" height="60" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 0C7.875 0 0 7.875 0 17.5C0 27.125 7.875 35 17.5 35C27.125 35 35 27.125 35 17.5C35 7.875 27.125 0 17.5 0ZM17.5 3.5C19.425 3.5 20.825 5.075 20.65 7L19.25 21H15.75L15.05 14L14.35 7C14.175 5.075 15.575 3.5 17.5 3.5ZM17.5 31.5C15.575 31.5 14 29.925 14 28C14 26.075 15.575 24.5 17.5 24.5C19.425 24.5 21 26.075 21 28C21 29.925 19.425 31.5 17.5 31.5Z" fill="#5039BD"/>
                            </svg>
                            <p>Администрация сайта не владеет информацией
                                о наличии свободных квартир</p>
                        </div>
                    </div>
                    <form className={classes.contactsForm}>
                        <div className={classes.nameAndEmailInputs}>
                            <div className={classes.inputBlock}>
                                <label htmlFor='name'>Ваше имя</label>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M10.0013 0C7.14418 0 4.80859 2.33559 4.80859 5.19275C4.80859 8.04991 7.14418 10.3855 10.0013 10.3855C12.8585 10.3855 15.1941 8.04991 15.1941 5.19275C15.1941 2.33559 12.8585 0 10.0013 0Z" fill="#6868684C"/>
                                        <path d="M18.913 14.536C18.7769 14.1959 18.5955 13.8784 18.3915 13.5836C17.3484 12.0416 15.7384 11.0212 13.9244 10.7718C13.6976 10.7492 13.4482 10.7945 13.2668 10.9305C12.3144 11.6335 11.1806 11.9963 10.0014 11.9963C8.82228 11.9963 7.68851 11.6335 6.73612 10.9305C6.5547 10.7945 6.30526 10.7265 6.07853 10.7718C4.26446 11.0212 2.63183 12.0416 1.61143 13.5836C1.40735 13.8784 1.22592 14.2186 1.0899 14.536C1.02189 14.6721 1.04454 14.8308 1.11256 14.9669C1.29398 15.2843 1.52071 15.6018 1.72479 15.8739C2.04224 16.3048 2.38239 16.6902 2.76789 17.053C3.08534 17.3705 3.44815 17.6653 3.81099 17.9601C5.60236 19.2979 7.75657 20.0009 9.97879 20.0009C12.201 20.0009 14.3552 19.2979 16.1466 17.9601C16.5094 17.688 16.8722 17.3705 17.1897 17.053C17.5525 16.6902 17.9153 16.3047 18.2328 15.8739C18.4595 15.5791 18.6636 15.2843 18.845 14.9669C18.9583 14.8308 18.981 14.672 18.913 14.536Z" fill="#6868684C"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2831_1302">
                                            <rect width="20" height="20" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <input placeholder={'Введите ваше имя'} type="text" name={'name'} id={'name'} minLength={3} maxLength={10} required/>
                            </div>
                            <div className={classes.inputBlock}>
                                <label htmlFor='email'>Ваша электронная почта</label>
                                <svg width="20" height="20" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6603 12.3928C13.9975 12.3928 14.2896 12.2814 14.538 12.0616L10.2883 7.81169C10.1863 7.8847 10.0875 7.9557 9.99411 8.02321C9.67608 8.25753 9.41796 8.44037 9.21976 8.57139C9.02158 8.70271 8.75791 8.83656 8.42877 8.97322C8.09941 9.11004 7.79257 9.17823 7.50792 9.17823H7.49959H7.49126C7.20659 9.17823 6.89975 9.11007 6.57042 8.97322C6.24108 8.83656 5.97741 8.70271 5.77942 8.57139C5.58124 8.44037 5.32326 8.25756 5.00507 8.02321C4.9164 7.95821 4.81806 7.88688 4.71174 7.81055L0.461182 12.0616C0.709523 12.2814 1.00187 12.3928 1.33902 12.3928H13.6603Z" fill="#6868684C"/>
                                    <path d="M0.845514 5.13653C0.52751 4.92452 0.245509 4.68171 0 4.4082V10.8741L3.7457 7.12838C2.99635 6.60523 2.03085 5.94204 0.845514 5.13653Z" fill="#6868684C"/>
                                    <path d="M14.1632 5.13653C13.0231 5.90822 12.0541 6.57255 11.2561 7.12988L15.0003 10.8742V4.4082C14.7602 4.67621 14.4812 4.91886 14.1632 5.13653Z" fill="#6868684C"/>
                                    <path d="M13.6607 0.607422H1.33944C0.909593 0.607422 0.579117 0.752576 0.347606 1.04258C0.115904 1.33273 0.000244141 1.69559 0.000244141 2.13075C0.000244141 2.48225 0.153731 2.86311 0.46057 3.27343C0.767408 3.68359 1.09391 4.00576 1.43991 4.24011C1.62959 4.37412 2.2016 4.77178 3.15594 5.43296C3.67111 5.78996 4.11913 6.10113 4.50413 6.36965C4.83229 6.5983 5.1153 6.79631 5.34896 6.96064C5.37578 6.97946 5.41797 7.00963 5.47396 7.04966C5.53428 7.09299 5.61062 7.14798 5.70479 7.21598C5.88614 7.34713 6.03679 7.45315 6.15678 7.53415C6.27661 7.61516 6.42179 7.70566 6.59211 7.80615C6.76229 7.90651 6.9228 7.98197 7.07346 8.03216C7.22414 8.08233 7.36363 8.10749 7.49195 8.10749H7.50029H7.50862C7.63691 8.10749 7.77643 8.08233 7.92714 8.03216C8.07777 7.98197 8.23815 7.90667 8.40846 7.80615C8.57862 7.70566 8.72361 7.61497 8.84382 7.53415C8.96381 7.45315 9.11446 7.34716 9.29584 7.21598C9.38982 7.14798 9.46615 7.09297 9.52647 7.0498C9.58249 7.0096 9.62465 6.97962 9.65164 6.96064C9.83367 6.83398 10.1173 6.63678 10.4987 6.37196C11.1927 5.8898 12.2147 5.18012 13.569 4.24011C13.9764 3.9556 14.3167 3.61227 14.5902 3.2106C14.8632 2.80894 15.0001 2.38761 15.0001 1.94676C15.0001 1.57843 14.8674 1.26326 14.6025 1.00075C14.3374 0.738578 14.0234 0.607422 13.6607 0.607422Z" fill="#6868684C"/>
                                </svg>
                                <input placeholder={'Введите вашу почту'} type="email" name={'email'} id={'email'} minLength={10} maxLength={20} required/>
                            </div>
                        </div>
                        <div className={classes.inputBlock}>
                            <label htmlFor="message">Ваше сообщение</label>
                            <textarea placeholder={'Сообщение'} name={'message'} id={'message'} required minLength={5} maxLength={100}></textarea>
                        </div>
                        <button type={'submit'} onClick={e => submit(e)}>Отправить</button>
                    </form>
                    <div className={classes.socialBtns}>
                        <a target={'_blank'} rel={'noreferrer'} href="https://instagram-my.ru/help/instagram-login-my-page/">
                            <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.8054 6.56142C8.48024 6.56142 5.79665 9.24501 5.79665 12.5702C5.79665 15.8954 8.48024 18.579 11.8054 18.579C15.1306 18.579 17.8142 15.8954 17.8142 12.5702C17.8142 9.24501 15.1306 6.56142 11.8054 6.56142ZM11.8054 16.4755C9.65504 16.4755 7.90016 14.7206 7.90016 12.5702C7.90016 10.4198 9.65504 8.66494 11.8054 8.66494C13.9558 8.66494 15.7107 10.4198 15.7107 12.5702C15.7107 14.7206 13.9558 16.4755 11.8054 16.4755ZM18.0603 4.91493C17.284 4.91493 16.657 5.54189 16.657 6.31825C16.657 7.09462 17.284 7.72158 18.0603 7.72158C18.8367 7.72158 19.4636 7.09755 19.4636 6.31825C19.4639 6.1339 19.4277 5.95132 19.3573 5.78095C19.2868 5.61059 19.1835 5.4558 19.0531 5.32544C18.9228 5.19509 18.768 5.09173 18.5976 5.02128C18.4273 4.95084 18.2447 4.9147 18.0603 4.91493ZM23.5183 12.5702C23.5183 10.953 23.533 9.35048 23.4422 7.73622C23.3513 5.86122 22.9236 4.19716 21.5525 2.82607C20.1785 1.45204 18.5173 1.02724 16.6423 0.936418C15.0252 0.845598 13.4226 0.860246 11.8084 0.860246C10.1912 0.860246 8.58864 0.845598 6.97438 0.936418C5.09938 1.02724 3.43532 1.45497 2.06423 2.82607C0.690202 4.20009 0.265398 5.86122 0.174577 7.73622C0.0837571 9.35341 0.0984056 10.956 0.0984056 12.5702C0.0984056 14.1845 0.0837571 15.7899 0.174577 17.4042C0.265398 19.2792 0.693132 20.9433 2.06423 22.3144C3.43825 23.6884 5.09938 24.1132 6.97438 24.204C8.59157 24.2948 10.1941 24.2802 11.8084 24.2802C13.4256 24.2802 15.0281 24.2948 16.6423 24.204C18.5173 24.1132 20.1814 23.6854 21.5525 22.3144C22.9265 20.9403 23.3513 19.2792 23.4422 17.4042C23.5359 15.7899 23.5183 14.1874 23.5183 12.5702ZM20.9402 19.4784C20.7263 20.0116 20.4685 20.4101 20.0554 20.8202C19.6423 21.2333 19.2468 21.4911 18.7136 21.705C17.1726 22.3173 13.5134 22.1796 11.8054 22.1796C10.0974 22.1796 6.43532 22.3173 4.8943 21.7079C4.3611 21.494 3.96266 21.2362 3.55251 20.8231C3.13942 20.4101 2.88161 20.0145 2.66774 19.4813C2.05837 17.9374 2.19606 14.2782 2.19606 12.5702C2.19606 10.8622 2.05837 7.20009 2.66774 5.65908C2.88161 5.12587 3.13942 4.72743 3.55251 4.31728C3.96559 3.90712 4.3611 3.64638 4.8943 3.43251C6.43532 2.82314 10.0974 2.96083 11.8054 2.96083C13.5134 2.96083 17.1756 2.82314 18.7166 3.43251C19.2498 3.64638 19.6482 3.90419 20.0584 4.31728C20.4715 4.73036 20.7293 5.12587 20.9431 5.65908C21.5525 7.20009 21.4148 10.8622 21.4148 12.5702C21.4148 14.2782 21.5525 17.9374 20.9402 19.4784Z" fill="white"/>
                            </svg>
                        </a>
                        <a href="https://vk.com" target={'_blank'} rel={'noreferrer'}>
                            <svg width="20" height="12" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.2554 1.26839C24.4231 0.721422 24.2554 0.320312 23.4625 0.320312H20.836C20.1676 0.320312 19.8622 0.667314 19.6946 1.04843C19.6946 1.04843 18.3591 4.24671 16.4668 6.32048C15.8559 6.92391 15.5769 7.11446 15.2439 7.11446C15.0774 7.11446 14.8355 6.92391 14.8355 6.37694V1.26839C14.8355 0.612028 14.6427 0.320312 14.0857 0.320312H9.95847C9.54167 0.320312 9.29015 0.623791 9.29015 0.913154C9.29015 1.53423 10.2363 1.67773 10.3333 3.42803V7.22503C10.3333 8.05666 10.1812 8.2084 9.84589 8.2084C8.956 8.2084 6.79056 4.99835 5.50543 1.32367C5.25511 0.609676 5.0024 0.321489 4.33169 0.321489H1.70633C0.955376 0.321489 0.805664 0.66849 0.805664 1.0496C0.805664 1.73419 1.69555 5.12186 4.9509 9.60228C7.12112 12.6618 10.1765 14.3203 12.9599 14.3203C14.6283 14.3203 14.8343 13.9521 14.8343 13.317V11.0044C14.8343 10.2681 14.9936 10.1198 15.5218 10.1198C15.9098 10.1198 16.5781 10.3128 18.1364 11.7866C19.9161 13.5346 20.2108 14.3191 21.2108 14.3191H23.8362C24.586 14.3191 24.9608 13.951 24.7452 13.224C24.5093 12.5006 23.6589 11.4479 22.5307 10.2022C21.9175 9.49171 21.0012 8.72714 20.7222 8.34485C20.3329 7.85199 20.4455 7.63438 20.7222 7.1968C20.7234 7.19798 23.9224 2.77284 24.2554 1.26839Z" fill="white"/>
                            </svg>
                        </a>
                        <a href="https://vk.com" target={'_blank'} rel={'noreferrer'}>
                            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.05038 3.02509H9.68354V0.18066C9.40178 0.141899 8.43277 0.0546875 7.30424 0.0546875C4.94953 0.0546875 3.33649 1.53579 3.33649 4.25798V6.76326H0.738037V9.94312H3.33649V17.9442H6.52232V9.94387H9.01567L9.41147 6.76401H6.52157V4.57328C6.52232 3.65421 6.76979 3.02509 8.05038 3.02509Z" fill="white"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default Contacts;
