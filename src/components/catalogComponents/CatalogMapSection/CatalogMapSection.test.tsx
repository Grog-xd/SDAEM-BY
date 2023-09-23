import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import {MemoryRouter} from 'react-router-dom';

import {store} from '../../../redux';

import CatalogMapSection from './CatalogMapSection';

describe('catalog map section tests', ()=>{
    test('snapshot test', ()=>{
        render(
            <Provider store={store} >
                <MemoryRouter>
                    <CatalogMapSection />
                </MemoryRouter>
            </Provider>,
        )
        const section = screen.getByTestId('catalog-map-section')
        expect(section).toMatchSnapshot();
    })
})
