import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import store, {HOUSE} from '../../ducks/store'


class Wizard extends Component {
    constructor() {
        super();
        const reduxState = store.getState()
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            states: reduxState.states,
            zip: reduxState.zip,
            
        }
       this.addInfo = this.addInfo.bind(this)
    }
    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            states: reduxState.states,
            zip: reduxState.zip,
            })
        })
    }
    addInfo() {
        let {name,address,city,states,zip} = this.state
     store.dispatch({
         type: HOUSE,
         name: name,
         address: address,
         city: city,
         states: states,
         zip: zip
     })
  
    }
    handleChanges = (e) => {
        const {name,value} = e.target
        this.setState({[name]: value})
    }


    render() { 
        return(
            <div>
                <Link to='/'><button>Cancel</button></Link>
               
                <div>Property Name <input name='name' value={this.state.name} onChange={this.handleChanges}></input></div>
                <div>Address<input name='address' value={this.state.address}onChange={this.handleChanges}></input></div>
                <div>City<input name='city' value={this.state.city}onChange={this.handleChanges}></input></div>
                <div>State<input name='states' value={this.state.states}onChange={this.handleChanges}></input></div>
                <div>Zip<input name='zip' value={this.state.zip}onChange={this.handleChanges}></input></div>
                <Link to='/wizard/step1'><button onClick={this.addInfo}>Next</button></Link>
            </div>
        )
    }
}
export default Wizard