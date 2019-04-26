import React, {Component} from 'react'
import {Link} from 'react-router-dom'

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