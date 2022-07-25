//svg

export interface Svg{
    width?: string,
    height?: string,
    color?: string,
    style?: string,
}

// products

export interface ProductItemProps{
    params?: paramsProps,
    likeActive?: boolean,
    handler?: () => void,
    product?: ProductProps,
    id?:number,
    like?:boolean
}

export interface ProductProps{
    img?: any,
    type?:string,
    cost?:string|number,
    rooms?: number,
    title?: string,
    district?: string,
    city?:string,
    location?:string,
    people?: string | number,
    metro?: string,
    body?: string,
    id?: number,
    obj?: string,
    profile?: object,
    size?: string,
    length?: number
}

//params

export interface paramsProps{
    type?:string,
    id?:number
}

//news

export interface newProps{
    img?: string,
    title?: string,
    body?: string,
    date?: string,
    id?: number,
    bigImg?: string,
    description?: string,
    length?: number,
    params?: paramsProps
}

//option

export interface optionSelectProps{
    id:number,
    value: string | number,
    bol: boolean,
}

// login redux

export interface loginRedux {
    login:{
        isAuth?: boolean,
        profilesArr?:profilesArr,
        profile?:profilesArr
    }
}

export interface profilesArr{
    name?: string,
    avatar?: any,
    phone?: string,
    city?: string,
    email?: string,
    password?: string,
    viber?: string,
    whatsUpp?: string,
    length?: number
}

// main redux

export interface mainRedux {
    main:{
        tabs?: optionSelectProps[],
        cityOption?: optionSelectProps[],
        cityCurrentValue?: string,
        roomsOption?:optionSelectProps[],
        roomsCurrentValue?:string,
        metroOption?:optionSelectProps[],
        metroCurrentValue?:string,
        districtOption?:optionSelectProps[],
        districtCurrentValue?:string,
        productsLimit?:number,
        currentPage?:number,
        sortedOptions?: optionSelectProps[],
        sortedValue?: string,
        bedSumOptions?: optionSelectProps[],
        bedSumCurrentValue?:string,
        checkboxsMoreOption?: optionSelectProps[],
        minCost?: string | number,
        maxCost?: string | number,
        productsLen?: number,
        sortedProducts?:ProductProps,
        products?:ProductProps,

    }
}

// news redux

export interface newsRedux{
    news:{
        sortedPosts?: newProps,
        limitNewsItems?: number,
        currentPage?: number,
        contactsInformation?:contactsInformationProps,
        posts?:newProps
    }
}

export interface contactsInformationProps{
    location?: string,
    tel?: string | number,
    email?: string,
    timeWork?: string
}
