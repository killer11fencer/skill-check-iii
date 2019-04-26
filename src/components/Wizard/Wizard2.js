import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            mortgage: 0,
            rent: 0
        }
       
    }
    


    render() { 
        let rent = this.state.mortgage * 1.25
        return(
            <div>
                <Link to='/'><button>Cancel</button></Link>
                <div>Recommended Rent ${rent}</div>
                <div>Mortgage: <input name='name'onChange={this.handleChanges}></input></div>
                <div>Rent:<input name='address' onChange={this.handleChanges}></input></div>
               
                <Link to='/'><button>Complete</button></Link>
            </div>
        )
    }
}
export default Wizard