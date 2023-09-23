import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import {MemoryRouter} from 'react-router-dom';

import {store} from '../../../redux';

import FooterNavSection from './FooterNavSection';

describe('footer nav section tests', () =>{
    test('snapshot test', ()=>{
        render(
            <Provider store={store} >
                <MemoryRouter>
                    <FooterNavSection />
                </MemoryRouter>
            </Provider>,
        )
        const section = screen.getByTestId('footer-nav-section')
        expect(section).toMatchSnapshot();
    })
})
