import  {FC} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';

import {postContactsUrl} from '../../../server';
import MyInput from '../../UI/myInput/myInput.tsx';
import SvgUser from '../../svg/SvgUser.tsx';
import SvgEmail from '../../svg/SvgEmail.tsx';

import classes from './ContactsForm.module.scss';

interface ContactsFormProps{
    modalActive: boolean,
    handler: (b: boolean) => void,
}

const ContactsForm:FC <ContactsFormProps>= ({modalActive, handler}) => {


    const { register, formState: {errors}, handleSubmit, reset} = useForm()

    function sendMessageHandler(data: {name:string, email:string, message:string}){
        handler(!modalActive)
        reset({name:'', email:'', message:''})
        axios.post(`/api/${postContactsUrl}`, data)
    }



    return (
        <form data-testid={'contacts-form'} className={classes.contactsForm} onSubmit={handleSubmit(sendMessageHandler)}>
            <div className={classes.nameAndEmailInputs}>
                <MyInput style={errors.name ? classes.inputBlockError : classes.inputBlock} register={register} errors={errors} validation={{required:true, minLength:3}} maxLength={20}  id={'name'} name={'name'} type={'text'} placeholder={'Введите'}  label={'Ваше имя'} styleIconError={classes.registerErrorIcon}>
                    <SvgUser width={'20'} height={'20'} color={'#6868684C'}/>
                </MyInput>
                <MyInput style={errors.email ? classes.inputBlockError : classes.inputBlock} register={register} errors={errors}  validation={{pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, required:true}} id={'email'} name={'email'} type={'email'} placeholder={'Введите'}  styleIconError={classes.registerErrorIcon}>
                    <SvgEmail width={'20'} height={'20'} color={'#6868684C'}/>
                </MyInput>
            </div>
            <div className={errors.message ? classes.inputBlockError : classes.inputBlock}>
                <label htmlFor='message'>Ваше сообщение</label>
                <textarea {...register('message', {required:true, minLength:5})} maxLength={800}  placeholder={'Сообщение'}  name={'message'} id={'message'}></textarea>
            </div>
            <button data-testid={'contacts-form-btn'}>Отправить</button>
        </form>
    );
};

export default ContactsForm;
