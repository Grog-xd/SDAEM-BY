import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import {store} from '../../../redux';

import postImg from '../../../assets/img/new-img.png';
import bigImg from '../../../assets/img/new-img-page.png';

import NewIdPageSeeAlso from './NewIdPageSeeAlso';

describe('new id page see also tests', () =>{
    test('snapshot test', ()=>{
        render(
            <Provider store={store} >
                <NewIdPageSeeAlso params={{id:12}} posts={[{id:13, img: postImg, bigImg:bigImg, title: 'test',  description: 'test description', body: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...', date: '14 января 2008' },
                    {id:14, img: postImg, bigImg:bigImg, title: 'test',  description: 'test description', body: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...', date: '14 января 2008' },
                    {id:15, img: postImg, bigImg:bigImg, title: 'test',  description: 'test description', body: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...', date: '14 января 2008' }]}/>
            </Provider>,
        )
        const section = screen.getByTestId('new-id-page-see-also-section')
        expect(section).toMatchSnapshot();
    })
})
