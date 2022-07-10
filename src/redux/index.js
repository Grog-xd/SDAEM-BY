import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import mainPage from "./mainPage";
import newsPage from "./newsPage";
import loginPage from "./loginPage";

const rootReducer = combineReducers({
    news: newsPage,
    main:mainPage,
    login: loginPage
})

export const store = configureStore({
    reducer: rootReducer
})
