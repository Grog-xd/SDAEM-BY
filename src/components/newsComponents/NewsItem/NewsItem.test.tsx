import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import {MemoryRouter} from 'react-router-dom';

import {store} from '../../../redux';

import postImg from '../../../assets/img/new-img.png';
import bigImg from '../../../assets/img/new-img-page.png';

import NewsItem from './NewsItem';

describe('news item tests', () =>{
    test('snapshot test', ()=>{
        render(
            <Provider store={store} >
                <MemoryRouter>
                    <NewsItem post={{id:1, img: postImg, bigImg:bigImg, title: 'test',  description: 'test description', body: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...', date: '14 января 2008' }}/>
                </MemoryRouter>
            </Provider>,
        )
        const post = screen.getByTestId('news-item')
        expect(post).toMatchSnapshot();
    })
})
