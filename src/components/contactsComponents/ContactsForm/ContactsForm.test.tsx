import {getByTestId, render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import userEvent from '@testing-library/user-event';

import {store} from '../../../redux';

import ContactsForm from './ContactsForm';

describe('contact form test', ()=>{
    test('snapshot test', () =>{
        let modalActive = false

        render(
            <Provider store={store} >
                <ContactsForm modalActive={modalActive} handler={() => modalActive = true}/>
            </Provider>,
        )

        const form = screen.getByTestId('contacts-form')
        expect(form).toMatchSnapshot();


    })
})
