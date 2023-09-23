import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import {MemoryRouter} from 'react-router-dom';

import userEvent from '@testing-library/user-event';

import {store} from '../../../redux';

import MainFilterSection from './MainFilterSection';

describe('main filter section tests', () =>{
    test('snapshot test', ()=>{
        render(
            <Provider store={store} >
                <MemoryRouter>
                    <MainFilterSection />
                </MemoryRouter>
            </Provider>,
        )
        const section = screen.getByTestId('main-filter-section')
        expect(section).toMatchSnapshot();
    })
    test('tabs test', () =>{
        render(
            <Provider store={store} >
                <MemoryRouter>
                    <MainFilterSection />
                </MemoryRouter>
            </Provider>,
        )
        const tabBtn = screen.getAllByTestId('tab-btn')
        const tabPanel = screen.getAllByTestId('tab-panel')

        expect(tabPanel[0]).toBeInTheDocument()
        userEvent.click(tabBtn[1])
        expect(tabPanel[1]).toBeInTheDocument()
        userEvent.click(tabBtn[2])
        expect(tabPanel[2]).toBeInTheDocument()
        userEvent.click(tabBtn[3])
        expect(tabPanel[3]).toBeInTheDocument()
    })

    test('more options test', () =>{
        render(
            <Provider store={store} >
                <MemoryRouter>
                    <MainFilterSection />
                </MemoryRouter>
            </Provider>,
        )

        const btn = screen.getAllByTestId('open-more-options-btn')

        expect(screen.queryByTestId('more-options')).not.toBeInTheDocument()

        userEvent.click(btn[0])

        expect(screen.getByTestId('more-options')).toBeInTheDocument()
    })
})
