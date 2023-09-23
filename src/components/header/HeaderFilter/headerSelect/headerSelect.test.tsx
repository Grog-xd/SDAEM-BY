import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import userEvent from '@testing-library/user-event';

import {MemoryRouter} from 'react-router-dom';

import {store} from '../../../../redux';

import HeaderSelect from './headerSelect';

describe('header select tests', () =>{
    test('snapshot test', ()=>{
        render(
            <Provider store={store} >
                <MemoryRouter>
                    <HeaderSelect type={'flats'} value={'Квартиры на сутки'}  />
                </MemoryRouter>
            </Provider>,
        )
        const select = screen.getByTestId('header-select')
        expect(select).toMatchSnapshot();
    })

    test('open options test', ()=>{
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <HeaderSelect type={'flats'} value={'Квартиры на сутки'}  />
                </MemoryRouter>
            </Provider>,
        )
        const headerSelectBtn = screen.getByTestId('header-select-btn')

        expect(screen.queryByTestId('header-options-block')).not.toBeInTheDocument()
        userEvent.click(headerSelectBtn)
        expect(screen.getByTestId('header-options-block')).toBeInTheDocument()
    })
})
