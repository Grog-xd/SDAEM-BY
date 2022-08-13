import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import userEvent from '@testing-library/user-event';

import {store} from '../../../redux';

import CatalogFilterSection from '../CatalogFilterSection/CatalogFilterSection';

import RecommendationBtn from './RecommendationBtn';

describe('recommendation btn tests', () =>{
    test('active test', () =>{
        let recommendationActive = false
        function test(){
            recommendationActive = !recommendationActive
        }

        render(
            <Provider store={store} >
                <RecommendationBtn value={'test'} recommendationActive={recommendationActive} handler={test}>test</RecommendationBtn>
            </Provider>,
        )

        const notActiveBtn = screen.queryAllByTestId('not-active-recommendation-btn')

        expect(screen.queryByTestId('active-recommendation-btn')).toBeNull()
        expect(notActiveBtn[0]).toBeInTheDocument()
        // userEvent.click(notActiveBtn[0])
        // expect(screen.getByTestId('active-recommendation-btn')).toBeInTheDocument()
        // expect(notActiveBtn[0]).toBeNull()
        // userEvent.click(screen.queryByTestId('active-recommendation-btn'))
        // expect(screen.queryByTestId('active-recommendation-btn')).toBeNull()
        // expect(notActiveBtn[0]).toBeInTheDocument()
    })
})
