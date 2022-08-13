import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import {store} from '../../redux';

import SocialButtonsBlock from './SocialButtonsBlock';

describe('social buttons block tests', () =>{
    test('snapshot test', ()=>{
        render(
            <Provider store={store} >
                <SocialButtonsBlock />
            </Provider>,
        )
        const block = screen.getByTestId('social-buttons-block')
        expect(block).toMatchSnapshot();
    })
})
