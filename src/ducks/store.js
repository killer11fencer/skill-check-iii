import {createStore} from 'redux'
import axios from 'axios'
const initialState = {
            houses: [],
            name: '',
            address: '',
            city: '',
            states: '',
            zip: 0,
            img: '',
            mortgage: 0,
            rent: 0
};
export const HOUSE = 'HOUSE'
export const IMG = 'IMG'
export const MORTGAGE = 'MORTGAGE'
export const RENT = 'RENT'
export const ADDHOUSE = 'ADDHOUSE'

function reducer( state = initialState, action) {
    const {type,payload,name,address,city,states,zip} = action
    switch(type) {
      
        case HOUSE:
        return {...state, name: name,
        address: address,
        city: city,
        states: states,
        zip: zip}
        case IMG:
        return {...state,img: payload}
        case MORTGAGE:
        return {...state, mortgage: payload}
        case RENT:
        return {...state, rent: payload}
        case ADDHOUSE: {
        const {
            name,
            address,
            city,
            states,
            zip,
            img,
            mortgage,
            rent
        } = state;
        const house = {name,
            address,
            city,
            states,
            zip,
            img,
            mortgage,
            rent}
            const newHouse = [...state.houses,house]
        return  axios.put('/api/houses',{...state,houses: newHouse}).then(res=> state.houses = res.data).catch(err=>console.log('err on creation',err))}
        default: 
        return state
       
        }
    }
  export default createStore(reducer)