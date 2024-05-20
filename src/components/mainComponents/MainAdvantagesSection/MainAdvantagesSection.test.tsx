import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import {MemoryRouter} from 'react-router-dom';

import {store} from '../../../redux';

import MainAdvantagesSection from './MainAdvantagesSection';

describe('main advantages section tests', () =>{
    test('snapshot test', ()=>{
        render(
            <Provider store={store} >
                <MemoryRouter>
                    <MainAdvantagesSection />
                </MemoryRouter>
            </Provider>,
        )
        const section = screen.getByTestId('main-advantages-section')
        expect(section).toMatchSnapshot();
    })
})
