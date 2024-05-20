import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import {store} from '../../../redux';

import ContactsTextBlock from './ContactsTextBlock';

describe('contacts text block tests', () =>{
    test('snapshot test', ()=>{
        render(
            <Provider store={store} >
                <ContactsTextBlock />
            </Provider>,
        )
        const section = screen.getByTestId('contacts-text-block')
        expect(section).toMatchSnapshot();
    })
})
