import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import {store} from '../../../redux';

import CatalogTitleSection from './CatalogTitleSection';

describe('catalog title section tests', () =>{
    test('snapshot test', ()=>{
        render(
            <Provider store={store} >
                <CatalogTitleSection />
            </Provider>,
        )
        const section = screen.getByTestId('catalog-title-section')
        expect(section).toMatchSnapshot();
    })
})
