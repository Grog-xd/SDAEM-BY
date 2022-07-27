import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {newProps} from '../types/types';

const newsPage = createSlice({
    name: 'news',
    initialState:{
        sortedPosts:[],
        limitNewsItems:9,
        currentPage:1,
        contactsInformation:{location:'220068, РБ, г. Минск, ул. Осипенко, 21, кв.23', tel:'+375 29 621-48-33', email:'sdaem@sdaem.by', timeWork:'08:00-22:00'},
        posts:[],
    },
    reducers:{
        fetchNews(state, action:PayloadAction<newProps[]>){
            state.posts = action.payload
        },
        getNews(state, action:PayloadAction<string>){
            let sortedPosts = state.posts.filter(post=> post.title.toLowerCase().includes(action.payload.toLowerCase()))

            let res = []
            let test = 0
            while(test < sortedPosts.length) {
                let obj = []
                while(obj.length < state.limitNewsItems){

                    if(test >= sortedPosts.length){
                        break
                    }
                    obj.push(sortedPosts[test])
                    test++
                }
                res.push(obj)
            }
            state.sortedPosts = res
            state.currentPage = 1
        },
        setNewsPage(state, action:PayloadAction<number>){
            state.currentPage = action.payload
            window.scrollTo(0, 0)
        },

    },
})

export default newsPage.reducer
export const {setNewsPage, getNews, fetchNews} = newsPage.actions
