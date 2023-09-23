import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import {MemoryRouter} from 'react-router-dom';

import {store} from '../../redux';

import Page404 from './Page404';

describe('page 404 tests', () =>{
    test('snapshot test', ()=>{
        render(
            <Provider store={store} >
                <MemoryRouter>
                    <Page404 />
                </MemoryRouter>
            </Provider>,
        )
        const page404 = screen.getByTestId('page-404')
        expect(page404).toMatchSnapshot();
    })
})
