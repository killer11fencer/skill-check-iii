import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import House from './House'
import store from '../ducks/store'
class Dashboard extends Component {
    constructor() {
        super();
        const reduxState = store.getState()
        this.state = {
            houses: reduxState.houses,


        }
    }
    componentDidMount () {
       store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({ houses: reduxState.houses})
    })
}
    render() { 
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