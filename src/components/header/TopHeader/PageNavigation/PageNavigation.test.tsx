import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import {MemoryRouter} from 'react-router-dom';

import {store} from '../../../../redux';

import PageNavigation from './PageNavigation';

describe('page navigation tests', () =>{
    test('snapshot test', ()=>{
        render(
            <Provider store={store} >
                <MemoryRouter>
                    <PageNavigation />
                </MemoryRouter>
            </Provider>,
        )
        const section = screen.getByTestId('page-navigation-section')
        expect(section).toMatchSnapshot();
    })
})
