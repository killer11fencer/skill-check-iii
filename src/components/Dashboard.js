import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
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
    render() { console.log('blah',this.state.houses)
        let displayArr = this.state.houses.map((elem,index)=> {
            return  <div key={index}>
            <div>Property Name{elem.name}</div>
             <div >Address{elem.address}</div>
             <div >City{elem.city}</div>
             <div >State{elem.state}</div>
             <div >Zip{elem.zip}</div> </div>})
        return(
            <div>
               <Link to='/wizard'><button>Add New Property</button></Link>
               
               <div>Houses {displayArr}</div>
            </div>
        )
    }
}
export default Dashboard