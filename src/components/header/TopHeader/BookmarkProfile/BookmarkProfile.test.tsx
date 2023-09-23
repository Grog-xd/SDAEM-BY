import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import {MemoryRouter} from 'react-router-dom';

import {store} from '../../../../redux';

import BookmarkProfile from './BookmarkProfile';

describe('bookmark and profile tests', () =>{
    test('snapshot test', ()=>{
        render(
            <Provider store={store} >
                <MemoryRouter>
                    <BookmarkProfile />
                </MemoryRouter>
            </Provider>,
        )
        const section = screen.getByTestId('bookmark-and-profile-section')
        expect(section).toMatchSnapshot();
    })
})
