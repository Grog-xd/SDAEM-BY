import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import avatar from '../assets/img/avatar.png'
import {profilesArr} from '../types/types';

const loginPage = createSlice({
    name: 'login',
    initialState:{
        // bookMarkActive:false,
        isAuth: false,
        profilesArr:[{name: 'dmitriy', avatar:'', phone:'', city:'', email: 'vladimir6234@tut.by', password: '12345', viber: '', whatsUpp:''},{name: 'test', avatar:avatar, phone:'+test', city:'test', email: 'test@tut.by', password: 'test1', viber: 'test', whatsUpp:'test'}],
        profile: {},
    },
    reducers:{
        // setBookMarkActive(state){
        //     state.bookMarkActive = !state.bookMarkActive
        // },
        enter(state, action:PayloadAction<profilesArr>){
            state.isAuth = true
            state.profile = action.payload
        },
        exit(state){
            state.isAuth = false
            localStorage.clear()
        },
        registerUser(state, action:PayloadAction<any>){
            state.profilesArr = [...state.profilesArr, action.payload]
        },
    },
})

export default loginPage.reducer
export const {exit, enter, registerUser} = loginPage.actions

