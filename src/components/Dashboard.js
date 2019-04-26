import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import House from './House'
import store, {GETHOUSES} from '../ducks/store'
class Dashboard extends Component {
    constructor() {
        super();
        
        this.state = {
            houses: [],


        }
    }
    componentDidMount () {
    this.getHouses()
    }
getHouses=()=> {
    axios.get('/api/houses').then(res=> this.setState({houses: res.data})).catch(err=>console.log('get',err))
    store.dispatch({
        type: GETHOUSES,
        payload: this.state.houses
    })
}
deleteHouse = (id) => {
    axios.delete(`/api/houses/${id}`).then(res => {
        this.setState({houses: res.data})}).catch(err=>console.log('err on delete',err))
        store.dispatch({
            type: GETHOUSES,
            payload: this.state.houses
        })
    }


    render() {  
        let displayArr = this.state.houses.map((elem,index)=> {
            return  <div key={index}>HOUSE
            <House delete={this.deleteHouse} info={elem}/>
              </div>})
        return(
            <div>
               <Link to='/wizard'><button>Add New Property</button></Link>
               
               <div>{displayArr}</div>
            </div>
        )
    }
}
export default Dashboard