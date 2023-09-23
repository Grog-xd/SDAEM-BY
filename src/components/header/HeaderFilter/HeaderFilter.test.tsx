import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import {MemoryRouter} from 'react-router-dom';

import {store} from '../../../redux';

import HeaderFilter from './HeaderFilter';

describe('header filter tests', () =>{
    test('snapshot test', ()=>{
        render(
            <Provider store={store} >
                <MemoryRouter>
                    <HeaderFilter />
                </MemoryRouter>
            </Provider>,
        )
        const section = screen.getByTestId('header-filter-section')
        expect(section).toMatchSnapshot();
    })

    test('logo link test', () =>{
        render(
            <Provider store={store} >
                <MemoryRouter initialEntries={['/']}>
                    <HeaderFilter />
                </MemoryRouter>
            </Provider>,
        )
        const link = screen.queryByTestId('logo-link')
        expect(link).not.toBeInTheDocument()
    })
})
