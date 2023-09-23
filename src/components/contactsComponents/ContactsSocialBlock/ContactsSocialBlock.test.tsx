import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import {store} from '../../../redux';

import ContactsSocialBlock from './ContactsSocialBlock';

describe('contacts social block test', ()=>{
    test('snapshot test', ()=>{
        render(
            <Provider store={store} >
                <ContactsSocialBlock />
            </Provider>,
        )
        const section = screen.getByTestId('contacts-social-block')
        expect(section).toMatchSnapshot();
    })
})
