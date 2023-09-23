import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {ProductProps} from '../types/types';


interface likeActionProps{
    id: number,
    type:string
}

const main = createSlice({
    name: 'main',
    initialState:{
        tabs:[{id:'flats', value:'Квартиры'}, {id:'cottages', value:'Котеджы и усадьбы'}, {id:'baths', value:'Бани и сауны'},  {id:'cars', value:'Авто на прокат'}],

        cityOption:[{id:1,value:'Минск'},{id:2,value:'Гомель'},{id:3,value:'Брест'},{id:4,value:'Витебск'},{id:5,value:'Гродно'}, {id:6,value:'Могилев'}],
        cityCurrentValue:'',

        roomsOption: [{id:1,value:1},{id:2,value:2},{id:3,value:3},{id:4,value:4},{id:5,value:5}],
        roomsCurrentValue:'',

        metroOption:[{id:1,value:'Грушевка'},{id:2,value:'Восход'},{id:3,value:'Пушкинская'},{id:4,value:'Партизанская'}],
        metroCurrentValue:'',

        districtOption:[{id:1,value:'Шабаны'},{id:2,value:'Запад'},{id:3,value:'Восток'},{id:4,value:'Малиновка'}],
        districtCurrentValue: '',

        productsLimit: 6,
        currentPage: 1,

        sortedOptions:[{id:1, value:'Сначала дешевые'}, {id:2, value: 'Сначала дорогие'}],
        sortedValue:'',


        bedSumOptions:[{id:1, value:'1'}, {id:2, value:'2'}, {id:3, value:'3'}, {id:4, value:'4'}, {id:5, value:'5'}],
        bedSumCurrentValue:'',

        checkboxsMoreOption:[{id:1, value:'Газовая плита', bol:false},  {id:2, value:'Духовка', bol:false}, {id:3, value:'Кофеварка', bol:false}, {id:4, value:'Микроволновая печь ', bol:false}, {id:5, value:'Посуда', bol:false}, {id:6, value:'Посудомоечная машина', bol:false}],

        minCost:0,
        maxCost:1000,


        productsLen: 0,
        sortedProducts:[],
        products: [],
    },
    reducers: {
        fetchProducts(state, action){
            state.products = action.payload
        },
        setBedSum(state, action:PayloadAction<string>){
            state.bedSumCurrentValue = action.payload
        },

        checkboxHandler(state, action:PayloadAction<string>){
            state.checkboxsMoreOption.forEach(obj =>{
                if(obj.value.includes(action.payload)){
                    obj.bol = !obj.bol

                }
            })
        },

        likeHandler(state, action:PayloadAction<likeActionProps>){
            state.products.forEach(obj=>{
                Object.keys(obj).forEach(key=>{
                    if(key === action.payload.type){
                        obj[key].forEach(e=>{
                            if (e.id === action.payload.id){
                                e.like = !e.like
                            }
                        })
                    }
                })
            })
        },
        setCity(state, action:PayloadAction<string>){
            state.cityCurrentValue = action.payload

        },
        setRooms(state, action:PayloadAction<string>){
            state.roomsCurrentValue = action.payload
        },
        setMinCost(state, action:PayloadAction<number>){
            if(action.payload<0 || action.payload > 1000){
                return
            }
            state.minCost = action.payload
        },
        setMaxCost(state, action:PayloadAction<number>){
            if(action.payload<0 || action.payload > 1000){
                return
            }
            state.maxCost = action.payload
        },
        setDistrict(state, action:PayloadAction<string>){
            state.districtCurrentValue = action.payload
        },
        setMetro(state, action:PayloadAction<string>){
            state.metroCurrentValue = action.payload
        },
        setCurrentPage(state, action:PayloadAction<number>){
            state.currentPage = action.payload
            window.scrollTo(0, 0)
        },
        setSortedValue(state, action:PayloadAction<string>){
            state.sortedValue = action.payload
        },

        setLimit(state, action:PayloadAction<number>){
            state.productsLimit = action.payload
        },
        resetFilter(state){
            state.sortedValue = ''
            state.roomsCurrentValue = ''
            state.minCost = undefined
            state.maxCost = undefined
            state.districtCurrentValue = ''
            state.metroCurrentValue = ''
            state.bedSumCurrentValue = ''
            state.checkboxsMoreOption.forEach(e=>{
                e.bol = false
            })
        },

        mainFilter(state, action:PayloadAction<ProductProps>){
            // Условия для высчитывания стоимости
            while(state.minCost > state.maxCost ){
                state.maxCost = state.maxCost + 100
            }
            if(state.minCost === undefined){
                state.minCost = 0
            }
            if(state.maxCost === undefined){
                state.maxCost = 1000
            }


            //Основная фильтрация
            let sortedRes= []
            state.products.forEach(obj =>{
                if (action.payload){
                    Object.keys(obj).forEach(key =>{
                        if(action.payload === key){
                            obj[key].forEach(e=>{
                                if(!state.roomsCurrentValue){
                                    if(+e.cost >= state.minCost && +e.cost <= state.maxCost && e.city.includes(state.cityCurrentValue) && e.district.includes(state.districtCurrentValue) && e.metro.includes(state.metroCurrentValue) && e.people.includes(state.bedSumCurrentValue)){
                                        sortedRes.push(e)
                                    }
                                } else if(+e.cost >= state.minCost && +e.cost <= state.maxCost && e.city.includes(state.cityCurrentValue) && e.rooms===state.roomsCurrentValue && e.district.includes(state.districtCurrentValue) && e.metro.includes(state.metroCurrentValue) && e.people.includes(state.bedSumCurrentValue)){
                                    sortedRes.push(e)
                                }
                            })
                        }
                    })
                } else{
                    Object.keys(obj).forEach(key =>{
                        obj[key].forEach(e=>{
                            if(!state.roomsCurrentValue){
                                if(+e.cost >= state.minCost && +e.cost <= state.maxCost && e.city.includes(state.cityCurrentValue) && e.district.includes(state.districtCurrentValue) && e.metro.includes(state.metroCurrentValue) && e.people.includes(state.bedSumCurrentValue)){
                                    sortedRes.push(e)
                                }
                            } else if(+e.cost >= state.minCost && +e.cost <= state.maxCost && e.city.includes(state.cityCurrentValue) && e.rooms===state.roomsCurrentValue && e.district.includes(state.districtCurrentValue) && e.metro.includes(state.metroCurrentValue) && e.people.includes(state.bedSumCurrentValue)){
                                sortedRes.push(e)
                            }
                        })
                    })
                }
            })
            state.productsLen = sortedRes?.length

            // Сортировка массива
            switch (state.sortedValue) {
            case 'Сначала дешевые':
                sortedRes.sort((a, b)=>{
                    return a.cost - b.cost
                })
                break
            case 'Сначала дорогие':
                sortedRes.sort((a, b)=>{
                    return b.cost - a.cost
                })
                break
            default:
                break
            }

            // Фильтрация по страницам
            let res = []
            let test = 0
            for (let i = 0; test < sortedRes?.length; i++) {
                let obj = []
                for (let j = 0; j< state.productsLimit; j++) {
                    if(sortedRes[test]){
                        obj.push(sortedRes[test])
                        test++
                    }

                }
                res.push(obj)
            }
            state.sortedProducts = res
            state.currentPage = 1
        },

    },
})

export default main.reducer
export const {setCity, setRooms, setMinCost, setMaxCost, mainFilter, setDistrict, setMetro, resetFilter, setCurrentPage, setSortedValue, setLimit, likeHandler, setBedSum, checkboxHandler, fetchProducts} = main.actions
