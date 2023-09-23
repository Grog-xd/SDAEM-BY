import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import {store} from '../../../redux';

import RegistrationForm from './RegistrationForm';

describe('registration form tests', () =>{
    test('snapshot test', ()=>{
        render(
            <Provider store={store} >
                <RegistrationForm />
            </Provider>,
        )
        const form = screen.getByTestId('registration-form')
        expect(form).toMatchSnapshot();
    })
})
