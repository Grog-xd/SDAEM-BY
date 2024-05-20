import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import {MemoryRouter} from 'react-router-dom';

import {store} from '../../redux';

import avatar from '../../assets/img/avatar.png';

import ProfileCard from './ProfileCard';

describe('profile card tests', () =>{
    test('snapshot test', ()=>{
        render(
            <Provider store={store} >
                <MemoryRouter>
                    <ProfileCard profile={{name: 'test', avatar:avatar, phone:'+test', city:'test', email: 'test@tut.by', password: 'test1', viber: 'test', whatsUpp:'test'}}/>
                </MemoryRouter>
            </Provider>,
        )
        const card = screen.getByTestId('profile-card')
        expect(card).toMatchSnapshot();
    })
})
