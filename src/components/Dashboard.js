import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import House from './House'
class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            houses: [],


        }
    }
    componentDidMount () {
        axios.get('/api/houses').then(res=> this.setState({houses: res.data})).catch(err=>console.log('get front end',err))
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