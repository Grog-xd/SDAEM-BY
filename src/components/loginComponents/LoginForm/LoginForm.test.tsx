import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import {MemoryRouter} from 'react-router-dom';

import {store} from '../../../redux';

import LoginForm from './LoginForm';

describe('login form tests', () =>{
    test('snapshot test', ()=>{
        render(
            <Provider store={store} >
                <MemoryRouter>
                    <LoginForm />
                </MemoryRouter>
            </Provider>,
        )
        const form = screen.getByTestId('login-form')
        expect(form).toMatchSnapshot();
    })
})
