import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import {store} from '../../../redux';

import FooterSocialPaySection from './FooterSocialPaySection';

describe('footer social section tests', () =>{
    test('snapshot test', ()=>{
        render(
            <Provider store={store} >
                <FooterSocialPaySection />
            </Provider>,
        )
        const section = screen.getByTestId('footer-social-section')
        expect(section).toMatchSnapshot();
    })
})
