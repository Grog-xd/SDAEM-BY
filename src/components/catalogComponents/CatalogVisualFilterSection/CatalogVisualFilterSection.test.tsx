import {render, screen} from '@testing-library/react';
import {Provider, useSelector} from 'react-redux';

import {MemoryRouter} from 'react-router-dom';

import {store} from '../../../redux';

import {mainRedux} from '../../../types/types';

import CatalogVisualFilterSection from './CatalogVisualFilterSection';

describe('catalog visual filter section tests', ()=>{
    test('snapshot test', ()=>{
        render(
            <Provider store={store} >
                <MemoryRouter >
                    <CatalogVisualFilterSection />
                </MemoryRouter>
            </Provider>,
        )
        const section = screen.getByTestId('catalog-visual-filter-section')
        expect(section).toMatchSnapshot();
    })
})
