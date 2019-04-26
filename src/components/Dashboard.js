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

    render() {   console.log('reduuuuuux',this.state.houses)
        let displayArr = this.state.houses.map((elem,index)=> {
            return  <div key={index}>HOUSE
            <House info={elem}/>
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