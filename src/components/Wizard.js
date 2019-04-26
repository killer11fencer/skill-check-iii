import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            Zip: 0
        }
       this.createHouse = this.createHouse.bind(this)
    }
    createHouse() {
        let {name,address,city,state,zip} = this.state
        axios.put('/api/houses',{name,address,city,state,zip}).then(res=> {
            this.setState({name: '',
            address: '',
            city: '',
            state: '',
            Zip: 0})
            res.status(200)}).catch(err=>console.log('err on creation',err))
    }
    handleChanges = (e) => {
        const {name,value} = e.target
        this.setState({[name]: value})
    }


    render() { 
        return(
            <div>
                <Link to='/'><button>Cancel</button></Link>
                <div>Property Name <input name='name'onChange={this.handleChanges}></input></div>
                <div>Address<input name='address' onChange={this.handleChanges}></input></div>
                <div>City<input name='city' onChange={this.handleChanges}></input></div>
                <div>State<input name='state' onChange={this.handleChanges}></input></div>
                <div>Zip<input name='zip' onChange={this.handleChanges}></input></div>
                <Link to='/'><button>Complete</button></Link>
            </div>
        )
    }
}
export default Wizard