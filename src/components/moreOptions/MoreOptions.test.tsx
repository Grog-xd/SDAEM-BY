import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import {store} from '../../redux';

import MoreOptions from './MoreOptions';

describe('more options tests', () =>{
    test('snapshot test', ()=>{
        render(
            <Provider store={store} >
                <MoreOptions />
            </Provider>,
        )
        const section = screen.getByTestId('more-options')
        expect(section).toMatchSnapshot();
    })
})
