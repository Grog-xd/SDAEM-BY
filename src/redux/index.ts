import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import mainPage from './mainPage';
import newsPage from './newsPage';
import loginPage from './loginPage';

const rootReducer = combineReducers({
    news: newsPage,
    main:mainPage,
    login: loginPage,
})

export const store = configureStore({
    reducer: rootReducer,
})


export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
