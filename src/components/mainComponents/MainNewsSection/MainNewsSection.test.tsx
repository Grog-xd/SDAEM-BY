import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import axios, * as others from 'axios';
import {MemoryRouter} from 'react-router-dom';

import {store} from '../../../redux';
import postImg from '../../../assets/img/new-img.png';
import bigImg from '../../../assets/img/new-img-page.png';

import MainNewsSection from './MainNewsSection';


// jest.mock('axios')

describe('main news section tests', () =>{

    // let response
    //
    // beforeEach(() =>{
    //     response = {
    //         data:{
    //             posts:[
    //                 {id:1, img: postImg, bigImg:bigImg, title: 'test',  description: 'test description', body: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...', date: '14 января 2008' },
    //                 {id:2, img: postImg, bigImg:bigImg, title: 'test',  description: 'test description', body: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...', date: '14 января 2008' },
    //                 {id:3, img: postImg, bigImg:bigImg, title: 'test',  description: 'test description', body: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...', date: '14 января 2008' },
    //                 {id:4, img: postImg, bigImg:bigImg, title: 'test',  description: 'test description', body: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...', date: '14 января 2008' },
    //                 {id:5, img: postImg, bigImg:bigImg, title: 'test',  description: 'test description', body: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...', date: '14 января 2008' },
    //                 {id:6, img: postImg, bigImg:bigImg, title: 'test',  description: 'test description', body: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...', date: '14 января 2008' },
    //
    //             ]
    //         }
    //     }
    // })
    //
    // afterEach(() =>{
    //     jest.clearAllMocks()
    // })

    test('snapshot test', ()=>{
        render(
            <Provider store={store} >
                <MemoryRouter>
                    <MainNewsSection />
                </MemoryRouter>
            </Provider>,
        )
        const section = screen.getByTestId('main-news-section')
        expect(section).toMatchSnapshot();
    })

    // test('getting news test', async () =>{
    //     axios.get.mockReturnValue(response)
    //     render(
    //         <Provider store={store} >
    //             <MemoryRouter>
    //                 <MainNewsSection />
    //             </MemoryRouter>
    //         </Provider>
    //     )
    //     const posts = await screen.findAllByTestId('news-item')
    //     expect(posts.length).toBe(5)
    //     expect(axios.get).toBeCalledTimes(1)
    // })
})
