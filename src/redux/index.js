import {combineReducers} from "redux";
import toolkitSlice from "./toolkitSlice";
import {configureStore} from "@reduxjs/toolkit";
import mainPage from "./mainPage";

const rootReducer = combineReducers({
    toolkit: toolkitSlice,
    main:mainPage,
})

export const store = configureStore({
    reducer: rootReducer
})
