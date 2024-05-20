import {render, screen} from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import {Provider} from 'react-redux';

import {store} from '../../../redux'

import CatalogFilterSection from './CatalogFilterSection';


describe('catalog filter section tests', ()=>{
    test('snapshot test', ()=>{
        render(
            <Provider store={store} >
                <CatalogFilterSection />
            </Provider>,
        )
        const section = screen.getByTestId('catalog-filter-section')
        expect(section).toMatchSnapshot();
    })


    test('open more options test', ()=>{
        render(
            <Provider store={store} >
                <CatalogFilterSection />
            </Provider>,
        )
        const btn = screen.getByTestId('catalog-more-options-btn')
        expect(screen.queryByTestId('more-options')).toBeNull()
        userEvent.click(btn)
        expect(screen.getByTestId('more-options')).toBeInTheDocument()
    })

    test('first input test', ()=>{
        render(
            <Provider store={store} >
                <CatalogFilterSection />
            </Provider>,
        )
        const input = screen.getByTestId('first-cost-input');
        expect(screen.getByTestId('first-cost-input')).toHaveValue(0)
        userEvent.type(input, '123')
        expect(screen.getByTestId('first-cost-input')).toHaveValue(123)
    })
    test('second input test', ()=>{
        render(
            <Provider store={store} >
                <CatalogFilterSection />
            </Provider>,
        )
        expect(screen.getByTestId('second-cost-input')).toHaveValue(1000)
        userEvent.clear(screen.getByTestId('second-cost-input'))
        userEvent.type(screen.getByTestId('second-cost-input'), '222')

        expect(screen.getByTestId('second-cost-input')).toHaveValue(222)
    })
})
