import {createStore} from 'redux'

const initialState = {
            houses: [],
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0,
            img: '',
            mortgage: 0,
            rent: 0
}


function reducer(state = initialState,action) {
    const {type,payload} = action
    switch(type) {
        case HOUSE:
        return {...state,name: payload.name,
        address: payload.address,
        city: payload.city,
        state: payload.state,
        zip: payload.zip}
        case IMG:
        return {...state,img: payload}
        case MORTGAGE:
        return {...state, mortgage: payload}
        case RENT:
        return {...state, rent: payload}
        case ADDHOUSE:
        const {
            name,
            address,
            city,
            state,
            zip,
            img,
            mortgage,
            rent
        } = state;
        const house = {name,
            address,
            city,
            state,
            zip,
            img,
            mortgage,
            rent}
            const newHouse = [...state.houses,house]
        return {...state,houses: newHouse}
        case DELETEHOUSE:

        default:
        return state
    }
    }
  