import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import {MemoryRouter} from 'react-router-dom';

import {store} from '../../../redux';

import FooterLogoSection from './FooterLogoSection';


describe('footer logo section tests', ()=>{
    test('snapshot test', () =>{
        render(
            <Provider store={store} >
                <MemoryRouter>
                    <FooterLogoSection />
                </MemoryRouter>
            </Provider>,
        )
        const section = screen.getByTestId('footer-logo-section')
        expect(section).toMatchSnapshot();
    })
    test('logo link test', () =>{
        render(
            <Provider store={store} >
                <MemoryRouter initialEntries={['/']}>
                    <FooterLogoSection />
                </MemoryRouter>
            </Provider>,
        )
        const link = screen.queryByTestId('logo-link')
        expect(link).not.toBeInTheDocument();
    })
})
