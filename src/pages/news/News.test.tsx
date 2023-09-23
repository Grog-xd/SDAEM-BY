import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import {MemoryRouter} from 'react-router-dom';

import userEvent from '@testing-library/user-event';

import {store} from '../../redux';

import News from './News';

describe('news page tests', () =>{
    test('snapshot test', ()=>{
        render(
            <Provider store={store} >
                <MemoryRouter>
                    <News />
                </MemoryRouter>
            </Provider>,
        )
        const page = screen.getByTestId('news-page')
        expect(page).toMatchSnapshot();
    })
    // test('search new test', ()=>{
    //     render(
    //         <Provider store={store} >
    //             <MemoryRouter>
    //                 <News />
    //             </MemoryRouter>
    //         </Provider>
    //     )
    //
    //     const btn = screen.getByTestId('btn-search')
    //     const input = screen.getByTestId('input-search')
    //     userEvent.type(input, 'new')
    //     userEvent.click(btn)
    //     expect(screen.getAllByTestId('news-item').length).toBe(1)
    // })
})
